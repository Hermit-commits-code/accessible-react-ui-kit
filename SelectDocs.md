# Select

A highly accessible, themeable select for React.

## Usage

```jsx
import Select from '../src/components/Select'

;<Select label="Fruit" options={[{ label: 'Apple', value: 'apple' }]} />
```

## Props

| Prop     | Type             | Default | Description                   |
| -------- | ---------------- | ------- | ----------------------------- |
| label    | string           | —       | Select label                  |
| options  | array            | []      | Options for the select        |
| required | boolean          | false   | Mark as required              |
| disabled | boolean          | false   | Mark as disabled              |
| readOnly | boolean          | false   | Mark as read-only             |
| size     | 'sm'\|'md'\|'lg' | 'md'    | Select size                   |
| error    | string           | —       | Error message                 |
| success  | string           | —       | Success message               |
| help     | string           | —       | Help text                     |
| ...rest  | any              | —       | All other native select props |

## Accessibility

- Uses `<select>` for semantic markup.
- ARIA attributes supported.
- Keyboard and screen reader support.
- Visible focus ring for keyboard users.
- Disabled and required states are accessible.
