/*
 * Small animated thumbnails for the platform cards.
 *
 * These are drawings, not screenshots: every value in them is made up, so no
 * patient data can appear. The only real image is the Wallflower screenshot,
 * which shows synthetic data. Animations are plain CSS (see index.css) and are
 * switched off when the visitor prefers reduced motion.
 */

import type { Locale } from '../types/portfolio'

const WORDS: Record<Locale, { events: string; dialysis: string; order: string; legacy: string; archive: string }> = {
  en: { events: 'events', dialysis: 'DIALYSIS', order: 'drug order', legacy: 'LEGACY', archive: 'ARCHIVE · POSTGRESQL' },
  th: { events: 'เหตุการณ์', dialysis: 'ไตเทียม', order: 'คำสั่งยา', legacy: 'ระบบเดิม', archive: 'คลังข้อมูล · PostgreSQL' },
}

export type PlatformArtKind = 'chart' | 'order' | 'archive' | 'imaging' | 'locked' | 'twin'

const HR_LINE = 'M12,62 L40,58 L64,66 L92,52 L118,60 L146,48 L172,56 L200,50 L228,58 L256,46 L284,54 L308,50'
const SPO2_LINE = 'M12,34 L48,33 L84,36 L120,32 L156,34 L192,31 L228,35 L264,32 L308,33'

function ChartArt({ locale }: { locale: Locale }) {
  return (
    <>
      {[30, 54, 78, 102].map((y) => (
        <line key={y} x1="12" y1={y} x2="308" y2={y} className="stroke-line" strokeWidth="0.6" />
      ))}
      <path d={SPO2_LINE} className="art-draw fill-none stroke-info" strokeWidth="1.6" pathLength="100" />
      <path d={HR_LINE} className="art-draw fill-none stroke-accent" strokeWidth="1.6" pathLength="100" />
      {[40, 96, 150, 232].map((x, index) => (
        <rect key={x} x={x} y="110" width={18 + index * 6} height="7" className="fill-warn" opacity="0.75" />
      ))}
      <line x1="0" y1="24" x2="0" y2="120" className="art-cursor stroke-ink" strokeWidth="0.8" opacity="0.5" />
      <g className="fill-muted font-mono text-[8px]">
        <text x="12" y="16">HR</text>
        <text x="34" y="16">SpO2</text>
        <text x="12" y="132">{WORDS[locale].events}</text>
      </g>
    </>
  )
}

function OrderArt({ locale }: { locale: Locale }) {
  return (
    <>
      <rect x="22" y="46" width="86" height="48" className="fill-raised stroke-line" />
      <rect x="212" y="46" width="86" height="48" className="fill-accent-soft stroke-accent" />
      <line x1="108" y1="70" x2="212" y2="70" className="flow-line stroke-accent" strokeWidth="1.4" />
      <g className="art-packet">
        <rect x="112" y="60" width="22" height="20" className="fill-panel stroke-warn" strokeWidth="1.2" />
        <line x1="116" y1="67" x2="130" y2="67" className="stroke-warn" strokeWidth="1.2" />
        <line x1="116" y1="73" x2="126" y2="73" className="stroke-warn" strokeWidth="1.2" />
      </g>
      <g className="font-mono text-[9px]">
        <text x="65" y="74" textAnchor="middle" className="fill-ink">
          {WORDS[locale].dialysis}
        </text>
        <text x="255" y="74" textAnchor="middle" className="fill-accent">
          HIS
        </text>
        <text x="160" y="112" textAnchor="middle" className="fill-muted text-[8px]">
          {WORDS[locale].order}
        </text>
      </g>
    </>
  )
}

function ArchiveArt({ locale }: { locale: Locale }) {
  const rows = [0, 1, 2, 3, 4]
  return (
    <>
      <g className="font-mono text-[8px] fill-muted">
        <text x="24" y="20">{WORDS[locale].legacy}</text>
        <text x="186" y="20">{WORDS[locale].archive}</text>
      </g>
      {rows.map((row) => (
        <rect key={row} x="24" y={28 + row * 16} width="96" height="10" className="fill-line" />
      ))}
      <path d="M134,68 L170,68 M162,61 L170,68 L162,75" className="fill-none stroke-muted" strokeWidth="1.4" />
      {rows.map((row) => (
        <g key={row} className="art-row" style={{ animationDelay: `${row * 0.7}s` }}>
          <rect x="186" y={28 + row * 16} width="96" height="10" className="fill-accent-soft stroke-accent" strokeWidth="0.6" />
          <path
            d={`M288,${33 + row * 16} l3,3 l6,-7`}
            className="fill-none stroke-accent"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}
      <rect x="24" y="118" width="272" height="5" className="fill-line" />
      <rect x="24" y="118" width="272" height="5" className="art-progress fill-accent" />
    </>
  )
}

function ImagingArt() {
  return (
    <>
      <rect x="100" y="14" width="120" height="112" className="fill-raised stroke-line" />
      <ellipse cx="160" cy="70" rx="44" ry="46" className="fill-none stroke-muted" strokeWidth="1.2" />
      <ellipse cx="143" cy="66" rx="14" ry="24" className="fill-line" />
      <ellipse cx="177" cy="66" rx="14" ry="24" className="fill-line" />
      <rect x="166" y="52" width="24" height="22" className="art-detect fill-none stroke-warn" strokeWidth="1.6" />
      <line x1="100" y1="0" x2="220" y2="0" className="art-scan stroke-accent" strokeWidth="1.4" />
      <g className="font-mono text-[8px]">
        <text x="194" y="50" className="fill-warn">
          AI
        </text>
        <text x="20" y="72" className="fill-muted">
          DICOM
        </text>
        <text x="270" y="72" className="fill-muted">
          PACS
        </text>
      </g>
      <line x1="56" y1="69" x2="96" y2="69" className="flow-line stroke-accent" strokeWidth="1.2" />
      <line x1="224" y1="69" x2="264" y2="69" className="flow-line stroke-accent" strokeWidth="1.2" />
    </>
  )
}

function LockedArt() {
  return (
    <>
      {[30, 50, 90, 110].map((y, index) => (
        <rect
          key={y}
          x={index % 2 === 0 ? 40 : 70}
          y={y}
          width={index % 2 === 0 ? 240 : 180}
          height="9"
          className="art-redact fill-line"
          style={{ animationDelay: `${index * 0.4}s` }}
        />
      ))}
      <rect x="143" y="62" width="34" height="26" rx="2" className="fill-panel stroke-warn" strokeWidth="1.6" />
      <path d="M150,62 v-7 a10,10 0 0 1 20,0 v7" className="fill-none stroke-warn" strokeWidth="1.6" />
      <circle cx="160" cy="75" r="2.6" className="fill-warn" />
    </>
  )
}

export function PlatformArt({ kind, label, locale }: { kind: PlatformArtKind; label: string; locale: Locale }) {
  if (kind === 'twin') {
    return (
      <img
        src="/work/wallflower-twin.jpg"
        alt={label}
        loading="lazy"
        className="art-photo block aspect-[16/7] w-full border-b border-line object-cover"
      />
    )
  }

  return (
    <svg
      viewBox="0 0 320 140"
      role="img"
      aria-label={label}
      className="block aspect-[16/7] w-full border-b border-line bg-bg/60"
    >
      {kind === 'chart' ? <ChartArt locale={locale} /> : null}
      {kind === 'order' ? <OrderArt locale={locale} /> : null}
      {kind === 'archive' ? <ArchiveArt locale={locale} /> : null}
      {kind === 'imaging' ? <ImagingArt /> : null}
      {kind === 'locked' ? <LockedArt /> : null}
    </svg>
  )
}
