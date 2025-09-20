import { useState, useEffect } from 'react'
import RadioGroup from '../../src/components/RadioGroup/RadioGroup'
import ComponentTabs from './ComponentTabs'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const sizes = ['sm', 'md', 'lg']
const defaultOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3', disabled: false },
  { label: 'Disabled Option', value: 'disabled', disabled: true },
]

export default function RadioGroupPlayground() {
  const [value, setValue] = useState('1')
  const [label, setLabel] = useState('Label')
  const [required, setRequired] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [size, setSize] = useState('md')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [help, setHelp] = useState('')
  const [options, setOptions] = useState(defaultOptions)
  const [docs, setDocs] = useState('')
  const [a11y, setA11y] = useState('')

  useEffect(() => {
    fetch('/accessible-react-ui-kit/RadioGroupDocs.md')
      .then((r) => r.text())
      .then(setDocs)
    fetch('/accessible-react-ui-kit/RadioGroupA11y.md')
      .then((r) => r.text())
      .then(setA11y)
  }, [])

  const playground = (
    <div>
      <h2>RadioGroup Playground</h2>
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
      <RadioGroup
        label={label}
        name="demo-radio"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        options={options}
        required={required}
        disabled={disabled}
        size={size}
        help={help}
        error={error}
        success={success}
        data-testid="demo-radio-group"
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
        {`<RadioGroup\n  label=\"${label}\"\n  name=\"demo-radio\"\n  value={value}\n  onChange={...}\n  options={[...]}\n  required={${required}}\n  disabled={${disabled}}\n  size=\"${size}\"\n  help=\"${help}\"\n  error=\"${error}\"\n  success=\"${success}\"\n/>`}
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
