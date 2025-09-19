import { useState, useEffect } from 'react'
import Checkbox from '../../src/components/Checkbox/Checkbox'
import ComponentTabs from './ComponentTabs'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const sizes = ['sm', 'md', 'lg']

export default function CheckboxPlayground() {
  const [checked, setChecked] = useState(false)
  const [label, setLabel] = useState('Label')
  const [required, setRequired] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [readOnly, setReadOnly] = useState(false)
  const [size, setSize] = useState('md')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [help, setHelp] = useState('')
  const [docs, setDocs] = useState('')
  const [a11y, setA11y] = useState('')

  useEffect(() => {
    fetch('/accessible-react-ui-kit/CheckboxDocs.md')
      .then((r) => r.text())
      .then(setDocs)
    fetch('/accessible-react-ui-kit/CheckboxA11y.md')
      .then((r) => r.text())
      .then(setA11y)
  }, [])

  const playground = (
    <div>
      <h2>Checkbox Playground</h2>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}
      >
        <label>
          Label:
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </label>
        <label>
          Checked:
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </label>
        <label>
          Required:
          <input
            type="checkbox"
            checked={required}
            onChange={(e) => setRequired(e.target.checked)}
          />
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
          Read Only:
          <input
            type="checkbox"
            checked={readOnly}
            onChange={(e) => setReadOnly(e.target.checked)}
          />
        </label>
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
          Help Text:
          <input
            type="text"
            value={help}
            onChange={(e) => setHelp(e.target.value)}
          />
        </label>
        <label>
          Error Message:
          <input
            type="text"
            value={error}
            onChange={(e) => setError(e.target.value)}
          />
        </label>
        <label>
          Success Message:
          <input
            type="text"
            value={success}
            onChange={(e) => setSuccess(e.target.value)}
          />
        </label>
      </div>
      <Checkbox
        label={label}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        size={size}
        help={help}
        error={error}
        success={success}
      />
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
        {`<Checkbox\n  label=\"${label}\"\n  checked={${checked}}\n  onChange={...}\n  required={${required}}\n  disabled={${disabled}}\n  readOnly={${readOnly}}\n  size=\"${size}\"\n  help=\"${help}\"\n  error=\"${error}\"\n  success=\"${success}\"\n/>`}
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
