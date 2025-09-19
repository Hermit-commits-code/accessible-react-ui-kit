# RadioGroup

A highly accessible, themeable radio group for React.

## Usage

```jsx
import RadioGroup from '../src/components/RadioGroup'

;<RadioGroup label="Options" options={[{ label: 'A', value: 'a' }]} />
```

## Props

| Prop     | Type             | Default | Description                  |
| -------- | ---------------- | ------- | ---------------------------- |
| label    | string           | —       | Group label                  |
| options  | array            | []      | Radio options                |
| required | boolean          | false   | Mark as required             |
| disabled | boolean          | false   | Mark as disabled             |
| size     | 'sm'\|'md'\|'lg' | 'md'    | Radio size                   |
| error    | string           | —       | Error message                |
| success  | string           | —       | Success message              |
| help     | string           | —       | Help text                    |
| ...rest  | any              | —       | All other native radio props |

## Accessibility

- Uses `<fieldset>` and `<legend>` for semantic markup.
- ARIA attributes supported.
- Keyboard and screen reader support.
- Visible focus ring for keyboard users.
- Disabled and required states are accessible.
