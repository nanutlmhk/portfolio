import { useEffect, useState } from 'react'
import type { Locale } from '../types/portfolio'

/*
 * A small isometric, multi-floor hospital with a simulated day running on it.
 * Everything here is illustrative: the people, counts and clock are generated
 * in the browser and represent no real hospital or patient.
 */

type Point = [number, number]

const UNIT_X = 15.6
const UNIT_Y = 9
const FLOOR_GAP = 62
const ORIGIN_X = 110
const ORIGIN_Y = 262
const WIDTH = 9
const DEPTH = 6
const SLAB = 5

/** Project floor coordinates (x, y) on a given level to screen space. */
function project(x: number, y: number, level: number, lift = 0): Point {
  return [ORIGIN_X + (x - y) * UNIT_X, ORIGIN_Y + (x + y) * UNIT_Y - level * FLOOR_GAP - lift]
}

const fmt = (point: Point) => `${point[0].toFixed(1)},${point[1].toFixed(1)}`
const polygon = (points: Point[]) => points.map(fmt).join(' ')
const pathOf = (points: Point[]) => `M${points.map(fmt).join(' L')}`

type Box = { x0: number; y0: number; x1: number; y1: number; height: number }

function boxFaces(box: Box, level: number) {
  const { x0, y0, x1, y1, height } = box
  return {
    top: polygon([
      project(x0, y0, level, height),
      project(x1, y0, level, height),
      project(x1, y1, level, height),
      project(x0, y1, level, height),
    ]),
    left: polygon([
      project(x0, y1, level, height),
      project(x1, y1, level, height),
      project(x1, y1, level),
      project(x0, y1, level),
    ]),
    right: polygon([
      project(x1, y0, level, height),
      project(x1, y1, level, height),
      project(x1, y1, level),
      project(x1, y0, level),
    ]),
  }
}

const ROOMS: Box[] = [
  { x0: 5.9, y0: 0.2, x1: 8.8, y1: 1.9, height: 11 },
  { x0: 0.25, y0: 2.9, x1: 2.3, y1: 4.0, height: 8 },
]

/** Beds, desks and benches along the front edge; the count differs per floor. */
const FURNITURE_COUNT = [4, 3, 2, 5, 6]
const furniture = (level: number): Box[] =>
  Array.from({ length: FURNITURE_COUNT[level] }, (_, index) => ({
    x0: 0.7 + index * 1.25,
    y0: 5.3,
    x1: 1.5 + index * 1.25,
    y1: 5.8,
    height: 3,
  }))

type Walker = { from: [number, number]; to: [number, number]; seconds: number; delay: number; kind: 'staff' | 'patient' }

const WALKERS: Walker[][] = [
  [
    { from: [0.6, 4.6], to: [8.4, 4.6], seconds: 9, delay: 0, kind: 'patient' },
    { from: [7.4, 2.4], to: [7.4, 5.6], seconds: 6, delay: -2, kind: 'staff' },
    { from: [3.2, 4.2], to: [6.4, 5.0], seconds: 7, delay: -4, kind: 'patient' },
  ],
  [
    { from: [8.4, 4.4], to: [2.8, 4.4], seconds: 8, delay: -1, kind: 'staff' },
    { from: [6.6, 2.5], to: [6.6, 5.4], seconds: 5, delay: -3, kind: 'patient' },
  ],
  [
    { from: [3.0, 4.8], to: [8.2, 4.8], seconds: 10, delay: -5, kind: 'staff' },
    { from: [8.0, 2.4], to: [8.0, 5.2], seconds: 7, delay: -1, kind: 'staff' },
  ],
  [
    { from: [0.8, 4.5], to: [7.8, 4.5], seconds: 11, delay: -2, kind: 'staff' },
    { from: [6.2, 2.6], to: [6.2, 5.0], seconds: 6, delay: -4, kind: 'staff' },
  ],
  [
    { from: [8.2, 4.7], to: [1.0, 4.7], seconds: 12, delay: -6, kind: 'staff' },
    { from: [7.2, 2.5], to: [7.2, 5.5], seconds: 8, delay: -2, kind: 'patient' },
    { from: [2.4, 4.3], to: [5.2, 4.3], seconds: 6, delay: -1, kind: 'patient' },
  ],
]

const LIFT = { x: 9.55, y: 4.7 }
const LIFT_DOOR: [number, number] = [9.0, 4.7]

/** Where the featured patient stops on each floor. */
const STOPS: [number, number][] = [
  [5.0, 5.0],
  [6.5, 4.2],
  [7.0, 3.6],
  [6.8, 4.4],
  [4.0, 4.6],
]

const JOURNEY: Point[] = (() => {
  const points: Point[] = [project(1.6, 6.5, 0), project(2.6, 5.0, 0)]
  STOPS.forEach((stop, level) => {
    points.push(project(stop[0], stop[1], level))
    if (level < STOPS.length - 1) {
      points.push(project(LIFT_DOOR[0], LIFT_DOOR[1], level))
      points.push(project(LIFT.x, LIFT.y, level))
      points.push(project(LIFT.x, LIFT.y, level + 1))
      points.push(project(LIFT_DOOR[0], LIFT_DOOR[1], level + 1))
    }
  })
  return points
})()

const JOURNEY_PATH = pathOf(JOURNEY)

const SHAFT = (() => {
  const x0 = 9.15
  const x1 = 9.95
  const y0 = 4.2
  const y1 = 5.2
  const top = FLOOR_GAP * 4 + 16
  return {
    left: polygon([project(x0, y1, 0), project(x1, y1, 0), project(x1, y1, 0, top), project(x0, y1, 0, top)]),
    right: polygon([project(x1, y1, 0), project(x1, y0, 0), project(x1, y0, 0, top), project(x1, y1, 0, top)]),
    cap: polygon([
      project(x0, y0, 0, top),
      project(x1, y0, 0, top),
      project(x1, y1, 0, top),
      project(x0, y1, 0, top),
    ]),
  }
})()

type FloorInfo = { code: string; name: Record<Locale, string>; stat: (tick: number, locale: Locale) => string }

const wave = (tick: number, speed: number, phase: number) => (Math.sin(tick * speed + phase) + 1) / 2
const between = (low: number, high: number, amount: number) => Math.round(low + (high - low) * amount)

const FLOORS: FloorInfo[] = [
  {
    code: 'L1',
    name: { en: 'OPD · REGISTRATION', th: 'OPD · ลงทะเบียน' },
    stat: (t, locale) => `${locale === 'th' ? 'คิว' : 'queue'} ${between(8, 16, wave(t, 0.7, 0))}`,
  },
  {
    code: 'L2',
    name: { en: 'LAB · IMAGING', th: 'ห้องปฏิบัติการ · รังสีวิทยา' },
    stat: (t, locale) => `${locale === 'th' ? 'คำสั่งตรวจ' : 'orders'} ${between(5, 11, wave(t, 0.9, 1.3))}`,
  },
  {
    code: 'L3',
    name: { en: 'OPERATING THEATRES', th: 'ห้องผ่าตัด' },
    stat: (t, locale) =>
      locale === 'th'
        ? `ใช้งาน ${between(2, 4, wave(t, 0.4, 2.1))}/4 ห้อง`
        : `${between(2, 4, wave(t, 0.4, 2.1))}/4 in use`,
  },
  {
    code: 'L4',
    name: { en: 'ICU', th: 'ICU' },
    stat: (t, locale) => `${between(8, 11, wave(t, 0.5, 0.6))}/12 ${locale === 'th' ? 'เตียง' : 'beds'}`,
  },
  {
    code: 'L5',
    name: { en: 'WARD', th: 'หอผู้ป่วย' },
    stat: (t, locale) => `${between(38, 45, wave(t, 0.6, 3.0))}/48 ${locale === 'th' ? 'เตียง' : 'beds'}`,
  },
]

const clock = (tick: number) => {
  const minutes = (8 * 60 + tick * 5) % (24 * 60)
  return `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(query.matches)
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return reduced
}

function BoxShape({ box, level, topClass }: { box: Box; level: number; topClass: string }) {
  const faces = boxFaces(box, level)
  return (
    <g className="twin-edge" strokeWidth="0.6">
      <polygon points={faces.left} className="twin-side" />
      <polygon points={faces.right} className="twin-side-dark" />
      <polygon points={faces.top} className={topClass} />
    </g>
  )
}

function Floor({ level, animate }: { level: number; animate: boolean }) {
  const top = polygon([
    project(0, 0, level),
    project(WIDTH, 0, level),
    project(WIDTH, DEPTH, level),
    project(0, DEPTH, level),
  ])
  const left = polygon([
    project(0, DEPTH, level),
    project(WIDTH, DEPTH, level),
    project(WIDTH, DEPTH, level, -SLAB),
    project(0, DEPTH, level, -SLAB),
  ])
  const right = polygon([
    project(WIDTH, 0, level),
    project(WIDTH, DEPTH, level),
    project(WIDTH, DEPTH, level, -SLAB),
    project(WIDTH, 0, level, -SLAB),
  ])

  return (
    <g>
      <polygon points={left} className="twin-side" />
      <polygon points={right} className="twin-side-dark" />
      <polygon points={top} className="twin-floor twin-edge" strokeWidth="0.8" />

      {ROOMS.map((room) => (
        <BoxShape key={`${room.x0}-${room.y0}`} box={room} level={level} topClass="twin-room" />
      ))}
      {furniture(level).map((item) => (
        <BoxShape key={item.x0} box={item} level={level} topClass="twin-furniture" />
      ))}

      {WALKERS[level].map((walker, index) => {
        const start = project(walker.from[0], walker.from[1], level, 3)
        const end = project(walker.to[0], walker.to[1], level, 3)
        const colour = walker.kind === 'staff' ? 'fill-accent' : 'fill-info'
        return animate ? (
          <circle key={index} r="2.6" className={colour}>
            <animateMotion
              dur={`${walker.seconds * 2}s`}
              begin={`${walker.delay}s`}
              repeatCount="indefinite"
              path={pathOf([start, end, start])}
            />
          </circle>
        ) : (
          <circle key={index} r="2.6" cx={(start[0] + end[0]) / 2} cy={(start[1] + end[1]) / 2} className={colour} />
        )
      })}
    </g>
  )
}

const DESCRIPTION: Record<Locale, string> = {
  en: 'Animated illustration of a five-floor hospital: OPD and registration, lab and imaging, operating theatres, ICU and ward, with staff and patients moving and one patient journey traced across the floors',
  th: 'ภาพเคลื่อนไหวของโรงพยาบาลห้าชั้น: OPD และลงทะเบียน ห้องปฏิบัติการและรังสีวิทยา ห้องผ่าตัด ICU และหอผู้ป่วย พร้อมเจ้าหน้าที่และผู้ป่วยที่เคลื่อนที่ และเส้นทางของผู้ป่วยหนึ่งรายผ่านแต่ละชั้น',
}

type HospitalTwinProps = {
  locale: Locale
  note: string
  legend: { staff: string; patient: string; journey: string }
}

export function HospitalTwin({ locale, note, legend }: HospitalTwinProps) {
  const reducedMotion = usePrefersReducedMotion()
  const animate = !reducedMotion
  const [tick, setTick] = useState(0)

  useEffect(() => {
    if (!animate) {
      return
    }

    const timer = window.setInterval(() => setTick((value) => value + 1), 2000)
    return () => window.clearInterval(timer)
  }, [animate])

  const liftBottom = project(LIFT.x, LIFT.y, 0, 4)
  const liftTop = project(LIFT.x, LIFT.y, 4, 4)

  return (
    <div className="min-w-0 border border-line bg-panel">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-muted">
        <span>{locale === 'th' ? 'แบบจำลองโรงพยาบาล' : 'hospital.twin'}</span>
        <span className="flex items-center gap-2 text-accent">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
          {clock(tick)}
        </span>
      </div>

      <svg
        viewBox="0 0 418 420"
        className="block w-full"
        role="img"
        aria-label={DESCRIPTION[locale]}
      >
        {FLOORS.map((_, level) => (
          <Floor key={level} level={level} animate={animate} />
        ))}

        {/* Lift shaft: in front of every floor, so it is drawn after them. */}
        <polygon points={SHAFT.left} className="fill-accent-soft stroke-accent" strokeWidth="0.6" />
        <polygon points={SHAFT.right} className="fill-accent-soft stroke-accent" strokeWidth="0.6" />
        <polygon points={SHAFT.cap} className="fill-accent-soft stroke-accent" strokeWidth="0.6" />
        <rect x={liftBottom[0] - 4} y={liftBottom[1] - 9} width="8" height="9" className="fill-accent" opacity="0.85">
          {animate ? (
            <animate
              attributeName="y"
              dur="14s"
              repeatCount="indefinite"
              values={`${liftBottom[1] - 9};${liftTop[1] - 9};${liftTop[1] - 9};${liftBottom[1] - 9};${liftBottom[1] - 9}`}
              keyTimes="0;0.42;0.5;0.92;1"
            />
          ) : null}
        </rect>

        {/* One patient journey, from arrival to the ward. */}
        <path
          d={JOURNEY_PATH}
          className={`fill-none stroke-warn ${animate ? 'flow-line' : ''}`}
          strokeWidth="1.6"
          strokeDasharray="3 5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {STOPS.map((stop, level) => {
          const [cx, cy] = project(stop[0], stop[1], level)
          return (
            <g key={level}>
              <circle cx={cx} cy={cy} r="5.5" className="fill-panel stroke-warn" strokeWidth="1.4" />
              <circle cx={cx} cy={cy} r="2" className="fill-warn" />
            </g>
          )
        })}
        {animate ? (
          <circle r="4.2" className="fill-warn stroke-panel" strokeWidth="1.2">
            <animateMotion dur="36s" repeatCount="indefinite" path={JOURNEY_PATH} />
          </circle>
        ) : null}

        {FLOORS.map((floor, level) => {
          const [x, y] = project(WIDTH, 0, level)
          return (
            <g key={floor.code} className="font-mono">
              <line x1={x + 3} y1={y} x2={x + 14} y2={y} className="stroke-muted" strokeWidth="0.8" />
              <text x={x + 18} y={y} className="fill-ink text-[10.5px]">
                <tspan className="fill-accent">{floor.code}</tspan> {floor.name[locale]}
              </text>
              <text x={x + 18} y={y + 12} className="fill-muted text-[9.5px]">
                {floor.stat(tick, locale)}
              </text>
            </g>
          )
        })}
      </svg>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-line px-4 py-2.5 font-mono text-[11px] text-muted">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {legend.staff}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-info" />
          {legend.patient}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-warn" />
          {legend.journey}
        </span>
        <span className="ml-auto">{note}</span>
      </div>
    </div>
  )
}
