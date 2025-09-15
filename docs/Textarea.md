# Textarea

Accessible, themeable textarea for React.

## Usage

```jsx
import Textarea from "../src/components/Textarea";

<Textarea label="Message" placeholder="Your message" />;
```

## Props

| Prop    | Type   | Default | Description                             |
| ------- | ------ | ------- | --------------------------------------- |
| label   | string | —       | Label for the textarea (visible & ARIA) |
| ...rest | any    | —       | All other native textarea props         |

## Accessibility

- `<label>` association for screen readers.
- Visible focus ring.
- Supports required, disabled, and custom ARIA props.

---
