import { useState, useEffect } from 'react'
import Textarea from '../../src/components/Textarea/Textarea'
import ComponentTabs from './ComponentTabs'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const sizes = ['sm', 'md', 'lg']

export default function TextareaPlayground() {
  const [value, setValue] = useState('')
  const [label, setLabel] = useState('Label')
  const [placeholder, setPlaceholder] = useState('Type here...')
  const [required, setRequired] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [readOnly, setReadOnly] = useState(false)
  const [size, setSize] = useState('md')
  const [fullWidth, setFullWidth] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [help, setHelp] = useState('')
  const [maxLength, setMaxLength] = useState(200)
  const [showCount, setShowCount] = useState(false)
  const [docs, setDocs] = useState('')
  const [a11y, setA11y] = useState('')

  useEffect(() => {
    fetch('/TextareaDocs.md')
      .then((r) => r.text())
      .then(setDocs)
    fetch('/TextareaA11y.md')
      .then((r) => r.text())
      .then(setA11y)
  }, [])

  const playground = (
    <div>
      <h2>Textarea Playground</h2>
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
          Placeholder:
          <input
            type="text"
            value={placeholder}
            onChange={(e) => setPlaceholder(e.target.value)}
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
          Full Width:
          <input
            type="checkbox"
            checked={fullWidth}
            onChange={(e) => setFullWidth(e.target.checked)}
          />
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
        <label>
          Max Length:
          <input
            type="number"
            min={1}
            value={maxLength}
            onChange={(e) => setMaxLength(Number(e.target.value))}
          />
        </label>
        <label>
          Show Counter:
          <input
            type="checkbox"
            checked={showCount}
            onChange={(e) => setShowCount(e.target.checked)}
          />
        </label>
      </div>
      <Textarea
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        size={size}
        fullWidth={fullWidth}
        help={help}
        error={error}
        success={success}
        maxLength={maxLength}
        showCount={showCount}
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
        {`<Textarea\n  label=\"${label}\"\n  value={value}\n  onChange={...}\n  placeholder=\"${placeholder}\"\n  required={${required}}\n  disabled={${disabled}}\n  readOnly={${readOnly}}\n  size=\"${size}\"\n  fullWidth={${fullWidth}}\n  help=\"${help}\"\n  error=\"${error}\"\n  success=\"${success}\"\n  maxLength={${maxLength}}\n  showCount={${showCount}}\n/>`}
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
