# Input

Accessible, themeable text input for React.

## Usage

```jsx
import Input from '../src/components/Input';

<Input label="Name" placeholder="Your name" />
<Input label="Email" type="email" />
```

## Props

| Prop    | Type   | Default | Description                          |
| ------- | ------ | ------- | ------------------------------------ |
| label   | string | —       | Label for the input (visible & ARIA) |
| type    | string | 'text'  | Input type                           |
| ...rest | any    | —       | All other native input props         |

## Accessibility

- Input + `<label>` association for screen readers.
- Focus ring visible on keyboard.
- Supports required, disabled, and custom ARIA props.

---
