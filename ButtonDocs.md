# Button

A highly accessible, themeable button for React.

## Usage

```jsx
import Button from '../src/components/Button';

<Button variant="primary" onClick={() => alert('Clicked!')}>
  Primary
</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="neutral" disabled>Disabled</Button>
```

## Props

| Prop     | Type                                  | Default   | Description                   |
| -------- | ------------------------------------- | --------- | ----------------------------- |
| variant  | 'primary' \| 'secondary' \| 'neutral' | 'primary' | Visual style                  |
| children | node                                  | —         | Content inside the button     |
| ...rest  | any                                   | —         | All other native button props |

## Accessibility

- Uses `<button>` for semantic markup.
- ARIA attributes supported (`aria-label`, etc.).
- Keyboard and screen reader support.
- Visible focus ring for keyboard users.
- Disabled state is accessible.

---
