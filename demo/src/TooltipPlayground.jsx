import Tooltip from '../../src/components/Tooltip/Tooltip'

export default function TooltipPlayground() {
  return (
    <div style={{ padding: 32 }}>
      <h2>Tooltip Demo</h2>
      <Tooltip content="Accessible Tooltip!">
        <button aria-label="Show tooltip">Hover or focus me</button>
      </Tooltip>
    </div>
  )
}
