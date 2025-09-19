import { useState } from 'react'
import Modal from '../../src/components/Modal/Modal'

const sizes = ['sm', 'md', 'lg']

export default function ModalPlayground() {
  const [open, setOpen] = useState(false)
  const [header, setHeader] = useState('Modal Header')
  const [footer, setFooter] = useState('Modal Footer')
  const [body, setBody] = useState('This is the modal body.')
  const [size, setSize] = useState('md')
  const [center, setCenter] = useState(true)
  const [closeButton, setCloseButton] = useState(true)

  return (
    <div>
      <h2>Modal Playground</h2>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{ fontWeight: 600 }}
        >
          Open Modal
        </button>
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
          Centered:
          <input
            type="checkbox"
            checked={center}
            onChange={(e) => setCenter(e.target.checked)}
          />
        </label>
        <label>
          Show Close Button:
          <input
            type="checkbox"
            checked={closeButton}
            onChange={(e) => setCloseButton(e.target.checked)}
          />
        </label>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        header={header}
        footer={footer}
        size={size}
        center={center}
        closeButton={closeButton}
      >
        <span style={{ color: '#222' }}>{body}</span>
      </Modal>
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
        {`<Modal\n  open={open}\n  onClose={...}\n  header=\"${header}\"\n  footer=\"${footer}\"\n  size=\"${size}\"\n  center={${center}}\n  closeButton={${closeButton}}\n>
  ${body}
</Modal>`}
      </pre>
    </div>
  )
}
