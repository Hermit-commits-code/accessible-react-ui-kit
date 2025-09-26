import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './hcc-tabs.css'

/**
 * Accessible Tabs component
 * @param {object} props
 * @param {Array<{ label: string, content: React.ReactNode }>} props.tabs - The tab labels and content
 * @param {number} [props.defaultIndex] - The initially selected tab index
 */
export function Tabs({ tabs, defaultIndex = 0 }) {
  const [selected, setSelected] = useState(defaultIndex)
  const tabId = (i) => `hcc-tab-${i}`
  const panelId = (i) => `hcc-tabpanel-${i}`

  return (
    <div className="hcc-tabs">
      <div role="tablist" aria-label="Tabs" className="hcc-tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            id={tabId(i)}
            role="tab"
            aria-selected={selected === i}
            aria-controls={panelId(i)}
            tabIndex={selected === i ? 0 : -1}
            className={selected === i ? 'hcc-tab selected' : 'hcc-tab'}
            onClick={() => setSelected(i)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight')
                setSelected((selected + 1) % tabs.length)
              if (e.key === 'ArrowLeft')
                setSelected((selected - 1 + tabs.length) % tabs.length)
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, i) => (
        <div
          key={tab.label}
          id={panelId(i)}
          role="tabpanel"
          aria-labelledby={tabId(i)}
          hidden={selected !== i}
          className="hcc-tabpanel"
        >
          {selected === i && tab.content}
        </div>
      ))}
    </div>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    }),
  ).isRequired,
  defaultIndex: PropTypes.number,
}
