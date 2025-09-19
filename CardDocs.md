# Card

A highly accessible, themeable card for React.

## Usage

```jsx
import Card from '../src/components/Card'

;<Card header="Header" footer="Footer">
  Body
</Card>
```

## Props

| Prop       | Type             | Default   | Description                 |
| ---------- | ---------------- | --------- | --------------------------- |
| header     | string           | —         | Card header                 |
| footer     | string           | —         | Card footer                 |
| children   | node             | —         | Card body                   |
| shadow     | boolean          | false     | Show shadow                 |
| borderless | boolean          | false     | No border                   |
| size       | 'sm'\|'md'\|'lg' | 'md'      | Card size                   |
| center     | boolean          | false     | Center content              |
| as         | string           | 'section' | Element type                |
| ...rest    | any              | —         | All other native card props |

## Accessibility

- Uses semantic elements for markup.
- ARIA attributes supported.
- Keyboard and screen reader support.
- Visible focus ring for keyboard users.
