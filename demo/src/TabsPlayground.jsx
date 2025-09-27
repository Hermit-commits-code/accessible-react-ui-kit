import Tabs from '../../src/components/Tabs/Tabs'

export default function TabsPlayground() {
  return (
    <div style={{ padding: 32 }}>
      <h2>Tabs Demo</h2>
      <Tabs
        tabs={[
          { label: 'Tab 1', content: 'Content 1' },
          { label: 'Tab 2', content: 'Content 2' },
          { label: 'Tab 3', content: 'Content 3' },
        ]}
      />
    </div>
  )
}
