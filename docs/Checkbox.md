# Checkbox

Accessible, themeable checkbox for React.

## Usage

```jsx
import Checkbox from '../src/components/Checkbox'

;<Checkbox label="Accept terms" checked={true} onChange={() => {}} />
```

## Props

| Prop      | Type   | Default | Description                             |
| --------- | ------ | ------- | --------------------------------------- |
| label     | string |         | Label for the checkbox (visible & ARIA) |
| checked   | bool   | false   | Whether the checkbox is checked         |
| onChange  | func   |         | Change handler                          |
| help      | string |         | Help text below the checkbox            |
| className | string |         | Custom class for outermost element      |
| ...rest   | any    |         | All other native input props            |

## Accessibility

- Input + `<label>` association for screen readers.
- Focus ring visible on keyboard.
- Supports required, disabled, and custom ARIA props.
- Help text is always rendered if provided.
- Custom className applies to the outermost element.

---
