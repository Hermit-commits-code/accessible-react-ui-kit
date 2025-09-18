# RadioGroup

Accessible, themeable radio group for React.

## Usage

```jsx
import RadioGroup from '../src/components/RadioGroup'

;<RadioGroup
  label="Choose one"
  name="example"
  value="1"
  onChange={() => {}}
  options={[
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3', disabled: true },
  ]}
/>
```

## Props

| Prop      | Type   | Default | Description                          |
| --------- | ------ | ------- | ------------------------------------ |
| label     | string |         | Group label (visible & ARIA)         |
| name      | string |         | Name for all radios in group         |
| value     | string |         | Selected value                       |
| onChange  | func   |         | Change handler                       |
| options   | array  | []      | Array of { label, value, disabled? } |
| help      | string |         | Help text below the group            |
| error     | string |         | Error message (shows error state)    |
| success   | string |         | Success message                      |
| className | string |         | Custom class for group               |
| ...rest   | any    |         | All other native input props         |

## Accessibility

- Uses `role="radiogroup"` and ARIA attributes.
- Each radio is associated with a label.
- Help, error, and success text are always rendered if provided.
- Custom className applies to the group.

---
