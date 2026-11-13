type IntegrationMapProps = {
  labels: {
    devices: string
    platform: string
    systems: string
  }
}

const DEVICES = ['BEDSIDE DEVICES', 'OT DEVICES', 'DIALYSIS SYSTEM']
const SYSTEMS = ['HIS', 'LIS', 'BLOOD BANK']
const ROW_Y = [44, 92, 140]

export function IntegrationMap({ labels }: IntegrationMapProps) {
  return (
    <div className="min-w-0 border border-line bg-panel">
      <div className="border-b border-line px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-muted">
        integration.map
      </div>

      <svg
        viewBox="0 0 360 196"
        className="block w-full"
        role="img"
        aria-label="Devices connect through integration middleware to hospital systems"
      >
        <g className="fill-muted font-mono text-[9px] uppercase" style={{ letterSpacing: '0.12em' }}>
          <text x="8" y="26">{labels.devices}</text>
          <text x="180" y="26" textAnchor="middle">{labels.platform}</text>
          <text x="352" y="26" textAnchor="end">{labels.systems}</text>
        </g>

        {ROW_Y.map((y, index) => (
          <g key={y}>
            <line x1="118" y1={y + 17} x2="140" y2={y + 17} className="flow-line stroke-accent" strokeWidth="1.5" />
            <line x1="220" y1={y + 17} x2="242" y2={y + 17} className="flow-line stroke-accent" strokeWidth="1.5" />

            <rect x="8" y={y} width="110" height="34" className="fill-raised stroke-line" />
            <text x="18" y={y + 21} className="fill-ink font-mono text-[9.5px]">
              {DEVICES[index]}
            </text>

            <rect x="242" y={y} width="110" height="34" className="fill-raised stroke-line" />
            <text x="252" y={y + 21} className="fill-ink font-mono text-[9.5px]">
              {SYSTEMS[index]}
            </text>
          </g>
        ))}

        <rect x="140" y="44" width="80" height="130" className="fill-accent-soft stroke-accent" />
        <text x="180" y="104" textAnchor="middle" className="fill-accent font-mono text-[9.5px] font-semibold">
          MIDDLEWARE
        </text>
        <text x="180" y="124" textAnchor="middle" className="fill-ink font-mono text-[10px]">
          HL7 v2
        </text>
      </svg>
    </div>
  )
}
