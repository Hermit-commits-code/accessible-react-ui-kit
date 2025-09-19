import { useState } from 'react'
import Spinner from '../../src/components/Spinner/Spinner'

const sizes = ['sm', 'md', 'lg']
const colors = ['primary', 'muted', 'danger']

export default function SpinnerPlayground() {
  const [size, setSize] = useState('md')
  const [color, setColor] = useState('primary')
  const [ariaLabel, setAriaLabel] = useState('Loading')

  return (
    <div>
      <h2>Spinner Playground</h2>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}
      >
        <label>
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label>
          Color:
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            {colors.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label>
          aria-label:
          <input
            type="text"
            value={ariaLabel}
            onChange={(e) => setAriaLabel(e.target.value)}
          />
        </label>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          minHeight: 48,
        }}
      >
        <Spinner size={size} color={color} ariaLabel={ariaLabel} />
        <span style={{ color: '#222' }}>{ariaLabel}</span>
      </div>
      <pre
        style={{
          marginTop: 32,
          background: '#f6f8fa',
          color: '#222',
          padding: 16,
          borderRadius: 8,
          fontSize: 16,
          overflowX: 'auto',
        }}
      >
        {`<Spinner size=\"${size}\" color=\"${color}\" ariaLabel=\"${ariaLabel}\" />`}
      </pre>
    </div>
  )
}
