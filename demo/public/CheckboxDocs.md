# Checkbox

A highly accessible, themeable checkbox for React.

## Usage

```jsx
import Checkbox from '../src/components/Checkbox'

;<Checkbox label="Accept terms" />
```

## Props

| Prop     | Type             | Default | Description                     |
| -------- | ---------------- | ------- | ------------------------------- |
| label    | string           | —       | Checkbox label                  |
| checked  | boolean          | false   | Checked state                   |
| required | boolean          | false   | Mark as required                |
| disabled | boolean          | false   | Mark as disabled                |
| readOnly | boolean          | false   | Mark as read-only               |
| size     | 'sm'\|'md'\|'lg' | 'md'    | Checkbox size                   |
| error    | string           | —       | Error message                   |
| success  | string           | —       | Success message                 |
| help     | string           | —       | Help text                       |
| ...rest  | any              | —       | All other native checkbox props |

## Accessibility

- Uses `<input type="checkbox">` for semantic markup.
- ARIA attributes supported.
- Keyboard and screen reader support.
- Visible focus ring for keyboard users.
- Disabled and required states are accessible.
