import { useState } from 'react'
import Button from '../../src/components/Button/Button'
import ComponentTabs from './ComponentTabs'
import { useEffect, useState as useState2 } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const variants = ['primary', 'secondary', 'danger', 'ghost']

export default function ButtonPlayground() {
  const [variant, setVariant] = useState('primary')
  const [disabled, setDisabled] = useState(false)
  const [label, setLabel] = useState('Click me!')
  const [docs, setDocs] = useState2('')
  const [a11y, setA11y] = useState2('')

  useEffect(() => {
    fetch('/accessible-react-ui-kit/ButtonDocs.md')
      .then((r) => r.text())
      .then(setDocs)
    fetch('/accessible-react-ui-kit/ButtonA11y.md')
      .then((r) => r.text())
      .then(setA11y)
  }, [])

  const playground = (
    <div>
      <h2>Button Playground</h2>
      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        <label>
          Variant:
          <select value={variant} onChange={(e) => setVariant(e.target.value)}>
            {variants.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
        <label>
          Disabled:
          <input
            type="checkbox"
            checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
          />
        </label>
        <label>
          Label:
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </label>
      </div>
      <Button variant={variant} disabled={disabled}>
        {label}
      </Button>
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
        {`<Button variant="${variant}"${disabled ? ' disabled' : ''}>${label}</Button>`}
      </pre>
    </div>
  )

  return (
    <ComponentTabs
      playground={playground}
      docs={<ReactMarkdown remarkPlugins={[remarkGfm]}>{docs}</ReactMarkdown>}
      accessibility={
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{a11y}</ReactMarkdown>
      }
    />
  )
}
