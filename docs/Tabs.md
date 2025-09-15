# Tabs

Accessible tabs for React.

## Usage

```jsx
import Tabs from "../src/components/Tabs";

<Tabs
  tabs={[
    { label: "Tab 1", content: <div>Content 1</div> },
    { label: "Tab 2", content: <div>Content 2</div> },
  ]}
/>;
```

## Props

| Prop | Type          | Default | Description               |
| ---- | ------------- | ------- | ------------------------- |
| tabs | array[object] | —       | Array of {label, content} |

## Accessibility

- Keyboard navigation
- ARIA roles (`tablist`, `tab`, `tabpanel`)

---
