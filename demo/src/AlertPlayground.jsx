import { useEffect, useState } from 'react'
import ComponentTabs from './ComponentTabs'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Alert from '../../src/components/Alert'

export default function AlertPlayground() {
  const [variant, setVariant] = useState('info')
  const [title, setTitle] = useState('Alert Title')
  const [body, setBody] = useState('This is an alert message.')
  const [inline, setInline] = useState(false)
  const [show, setShow] = useState(true)
  const [dismissible, setDismissible] = useState(false)
  const [docs, setDocs] = useState('')
  const [a11y, setA11y] = useState('')

  useEffect(() => {
    fetch('/accessible-react-ui-kit/AlertDocs.md')
      .then((r) => r.text())
      .then(setDocs)
    fetch('/accessible-react-ui-kit/AlertA11y.md')
      .then((r) => r.text())
      .then(setA11y)
  }, [])

  const handleClose = () => setShow(false)

  const playground = (
    <div>
      <h2>Alert Playground</h2>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}
      >
        <label>
          Variant:
          <select value={variant} onChange={(e) => setVariant(e.target.value)}>
            {['info', 'success', 'warning', 'error'].map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Body:
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <label>
          Inline:
          <input
            type="checkbox"
            checked={inline}
            onChange={(e) => setInline(e.target.checked)}
          />
        </label>
        <label>
          Dismissible:
          <input
            type="checkbox"
            checked={dismissible}
            onChange={(e) => setDismissible(e.target.checked)}
          />
        </label>
        {dismissible && (
          <button
            type="button"
            onClick={() => setShow(true)}
            style={{ alignSelf: 'flex-end' }}
          >
            Show Alert
          </button>
        )}
      </div>
      {show && (
        <Alert
          variant={variant}
          title={title}
          inline={inline}
          onClose={dismissible ? handleClose : undefined}
          data-testid="demo-alert"
        >
          {body}
        </Alert>
      )}
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
        {`<Alert\n  variant=\"${variant}\"\n  title=\"${title}\"\n  inline={${inline}}\n  ${dismissible ? 'onClose={...}' : ''}\n>\n  ${body}\n</Alert>`}
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
