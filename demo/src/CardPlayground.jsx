import { useState, useEffect } from 'react'
import Card from '../../src/components/Card/Card'
import ComponentTabs from './ComponentTabs'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const sizes = ['sm', 'md', 'lg']

export default function CardPlayground() {
  const [header, setHeader] = useState('Card Header')
  const [footer, setFooter] = useState('Card Footer')
  const [body, setBody] = useState('This is the card body.')
  const [shadow, setShadow] = useState(false)
  const [borderless, setBorderless] = useState(false)
  const [size, setSize] = useState('md')
  const [center, setCenter] = useState(false)
  const [as, setAs] = useState('section')
  const [docs, setDocs] = useState('')
  const [a11y, setA11y] = useState('')

  useEffect(() => {
    fetch('/CardDocs.md')
      .then((r) => r.text())
      .then(setDocs)
    fetch('/CardA11y.md')
      .then((r) => r.text())
      .then(setA11y)
  }, [])

  const playground = (
    <div>
      <h2>Card Playground</h2>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}
      >
        <label>
          Header:
          <input
            type="text"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />
        </label>
        <label>
          Footer:
          <input
            type="text"
            value={footer}
            onChange={(e) => setFooter(e.target.value)}
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
          Shadow:
          <input
            type="checkbox"
            checked={shadow}
            onChange={(e) => setShadow(e.target.checked)}
          />
        </label>
        <label>
          Borderless:
          <input
            type="checkbox"
            checked={borderless}
            onChange={(e) => setBorderless(e.target.checked)}
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
          Center Content:
          <input
            type="checkbox"
            checked={center}
            onChange={(e) => setCenter(e.target.checked)}
          />
        </label>
        <label>
          Element Type (as):
          <input
            type="text"
            value={as}
            onChange={(e) => setAs(e.target.value)}
          />
        </label>
      </div>
      <Card
        header={header}
        footer={footer}
        shadow={shadow}
        borderless={borderless}
        size={size}
        center={center}
        as={as}
      >
        <span style={{ color: '#222' }}>{body}</span>
      </Card>
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
        {`<Card\n  header=\"${header}\"\n  footer=\"${footer}\"\n  shadow={${shadow}}\n  borderless={${borderless}}\n  size=\"${size}\"\n  center={${center}}\n  as=\"${as}\"\n>\n  ${body}\n</Card>`}
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
