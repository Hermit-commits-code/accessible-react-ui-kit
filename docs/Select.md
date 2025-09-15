# Select / Dropdown

Accessible custom select/dropdown for React.

## Usage

```jsx
import Select from "../src/components/Select";

<Select label="Choose one" options={["One", "Two", "Three"]} />;
```

## Props

| Prop    | Type          | Default | Description                   |
| ------- | ------------- | ------- | ----------------------------- |
| label   | string        | —       | Label for the select          |
| options | array[string] | —       | Options to choose from        |
| ...rest | any           | —       | All other native select props |

## Accessibility

- Keyboard navigation.
- ARIA roles and attributes for dropdowns.
- Visible focus ring.

---
