# Input

A highly accessible, themeable input for React.

## Usage

```jsx
import Input from '../src/components/Input'

;<Input label="Name" placeholder="Enter your name" />
```

## Props

| Prop        | Type             | Default | Description                  |
| ----------- | ---------------- | ------- | ---------------------------- |
| label       | string           | —       | Input label                  |
| placeholder | string           | —       | Placeholder text             |
| required    | boolean          | false   | Mark as required             |
| disabled    | boolean          | false   | Mark as disabled             |
| readOnly    | boolean          | false   | Mark as read-only            |
| size        | 'sm'\|'md'\|'lg' | 'md'    | Input size                   |
| error       | string           | —       | Error message                |
| success     | string           | —       | Success message              |
| help        | string           | —       | Help text                    |
| ...rest     | any              | —       | All other native input props |

## Accessibility

- Uses `<input>` for semantic markup.
- ARIA attributes supported.
- Keyboard and screen reader support.
- Visible focus ring for keyboard users.
- Disabled and required states are accessible.
