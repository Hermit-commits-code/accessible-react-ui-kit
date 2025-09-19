# Textarea

A highly accessible, themeable textarea for React.

## Usage

```jsx
import Textarea from '../src/components/Textarea'

;<Textarea label="Message" placeholder="Type your message..." />
```

## Props

| Prop        | Type             | Default | Description                     |
| ----------- | ---------------- | ------- | ------------------------------- |
| label       | string           | —       | Textarea label                  |
| placeholder | string           | —       | Placeholder text                |
| required    | boolean          | false   | Mark as required                |
| disabled    | boolean          | false   | Mark as disabled                |
| readOnly    | boolean          | false   | Mark as read-only               |
| size        | 'sm'\|'md'\|'lg' | 'md'    | Textarea size                   |
| error       | string           | —       | Error message                   |
| success     | string           | —       | Success message                 |
| help        | string           | —       | Help text                       |
| maxLength   | number           | —       | Maximum length                  |
| showCount   | boolean          | false   | Show character count            |
| ...rest     | any              | —       | All other native textarea props |

## Accessibility

- Uses `<textarea>` for semantic markup.
- ARIA attributes supported.
- Keyboard and screen reader support.
- Visible focus ring for keyboard users.
- Disabled and required states are accessible.
