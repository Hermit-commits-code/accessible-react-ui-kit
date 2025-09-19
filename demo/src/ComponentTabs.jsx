import { useState } from 'react'

export default function ComponentTabs({ playground, docs, accessibility }) {
  const [tab, setTab] = useState('Playground')
  const tabs = [
    { label: 'Playground', content: playground },
    { label: 'Docs', content: docs },
    { label: 'Accessibility', content: accessibility },
  ]
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {tabs.map(({ label }) => (
          <button
            key={label}
            onClick={() => setTab(label)}
            style={{
              padding: '8px 20px',
              border: 'none',
              borderBottom:
                tab === label ? '2px solid #2563eb' : '2px solid transparent',
              background: 'none',
              color: tab === label ? '#2563eb' : '#222',
              fontWeight: tab === label ? 600 : 400,
              fontSize: 16,
              cursor: 'pointer',
              outline: 'none',
              borderRadius: 0,
              transition: 'color 0.2s',
            }}
            aria-selected={tab === label}
            tabIndex={tab === label ? 0 : -1}
            role="tab"
          >
            {label}
          </button>
        ))}
      </div>
      <div style={{ minHeight: 120 }} role="tabpanel">
        {tabs.find((t) => t.label === tab).content}
      </div>
    </div>
  )
}
