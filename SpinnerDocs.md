# Spinner

A highly accessible, themeable spinner for React.

## Usage

```jsx
import Spinner from '../src/components/Spinner'

;<Spinner />
```

## Props

| Prop    | Type             | Default | Description                    |
| ------- | ---------------- | ------- | ------------------------------ |
| size    | 'sm'\|'md'\|'lg' | 'md'    | Spinner size                   |
| ...rest | any              | —       | All other native spinner props |

## Accessibility

- Uses `<div role="status">` for semantic markup.
- ARIA attributes supported.
- Keyboard and screen reader support.
- Visible focus ring for keyboard users.
