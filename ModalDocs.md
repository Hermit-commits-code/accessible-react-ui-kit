# Modal

A highly accessible, themeable modal for React.

## Usage

```jsx
import Modal from '../src/components/Modal'

;<Modal open={true} onClose={() => {}}>
  Content
</Modal>
```

## Props

| Prop     | Type    | Default | Description                  |
| -------- | ------- | ------- | ---------------------------- |
| open     | boolean | false   | Modal open state             |
| onClose  | func    | —       | Close handler                |
| children | node    | —       | Modal content                |
| ...rest  | any     | —       | All other native modal props |

## Accessibility

- Uses `<dialog>` or `<div role="dialog">` for semantic markup.
- ARIA attributes supported.
- Keyboard and screen reader support.
- Focus trap and visible focus ring for keyboard users.
