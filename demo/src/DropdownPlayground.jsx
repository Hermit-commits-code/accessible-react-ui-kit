import Dropdown from '../../src/components/Dropdown/Dropdown'

export default function DropdownPlayground() {
  return (
    <div style={{ padding: 32 }}>
      <h2>Dropdown Demo</h2>
      <Dropdown
        label="Choose an option"
        options={['Option 1', 'Option 2', 'Option 3']}
        onChange={(val) => alert(`Selected: ${val}`)}
      />
    </div>
  )
}
