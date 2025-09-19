# Alert

A highly accessible, themeable alert for React.

## Usage

```jsx
import Alert from '../src/components/Alert'

;<Alert variant="info" title="Heads up!">
  This is an info alert.
</Alert>
```

## Props

| Prop        | Type                                  | Default | Description                  |
| ----------- | ------------------------------------- | ------- | ---------------------------- |
| variant     | 'info'\|'success'\|'warning'\|'error' | 'info'  | Alert style                  |
| title       | string                                | —       | Alert title                  |
| children    | node                                  | —       | Alert body                   |
| inline      | boolean                               | false   | Inline style                 |
| dismissible | boolean                               | false   | Can be dismissed             |
| ...rest     | any                                   | —       | All other native alert props |

## Accessibility

- Uses `<div role="alert">` for semantic markup.
- ARIA attributes supported.
- Keyboard and screen reader support.
- Visible focus ring for keyboard users.
