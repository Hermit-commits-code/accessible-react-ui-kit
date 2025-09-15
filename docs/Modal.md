# Modal

Accessible modal dialog for React.

## Usage

```jsx
import Modal from "../src/components/Modal";

<Modal open={true} onClose={() => {}}>
  <h2>Title</h2>
  <p>Modal content here.</p>
</Modal>;
```

## Props

| Prop     | Type     | Default | Description              |
| -------- | -------- | ------- | ------------------------ |
| open     | bool     | false   | Whether modal is shown   |
| onClose  | function | —       | Called when modal closes |
| children | node     | —       | Modal content            |

## Accessibility

- ARIA roles (`dialog`)
- Focus trap inside modal
- ESC to close
- Overlay dismiss

---
