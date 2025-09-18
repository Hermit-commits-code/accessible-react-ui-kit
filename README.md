# UI Component Library

A modern, accessible, and customizable React component library for rapid MVP development.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Button](#button)
  - [Input](#input)
  - [Textarea](#textarea)
  - [Select](#select)
  - [Checkbox](#checkbox)
  - [RadioGroup](#radiogroup)
  - [Alert](#alert)
  - [Card](#card)
  - [Modal](#modal)
  - [Spinner](#spinner)
- [Example App](#example-app)
- [Development](#development)
- [Testing](#testing)
- [License](#license)
- [Credits](#credits)

---

## Features

- **MVP-first:** Fast, clear, production-grade React components
- **Accessible:** WCAG-compliant, keyboard-friendly, screen reader support
- **Customizable:** Easy theming and extension via CSS or utility classes
- **Documented:** Clear prop tables and usage examples
- **Typescript Friendly:** (optional, coming soon)

---

## Installation

```sh
npm install your-ui-library
# or
yarn add your-ui-library
```

---

## Usage

```jsx
import {
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  RadioGroup,
  Alert,
  Card,
  Modal,
  Spinner,
} from "your-ui-library";

function App() {
  return <Button variant="primary">Hello World</Button>;
}
```

---

## Components

### Button

A versatile button with size, variant, full width, loading, and accessibility.

```jsx
<Button variant="primary" size="md">Primary</Button>
<Button variant="secondary" size="sm">Small Secondary</Button>
<Button variant="danger" loading>Deleting…</Button>
<Button fullWidth>Full Width</Button>
<Button disabled>Disabled</Button>
```

| Prop        | Type                                                | Default     | Description                    |
| ----------- | --------------------------------------------------- | ----------- | ------------------------------ |
| `children`  | `ReactNode`                                         | —           | Button content                 |
| `variant`   | `"primary" \| "secondary" \| "neutral" \| "danger"` | `"primary"` | Button style                   |
| `size`      | `"sm" \| "md" \| "lg"`                              | `"md"`      | Button size                    |
| `fullWidth` | `boolean`                                           | `false`     | Make button fill parent width  |
| `loading`   | `boolean`                                           | `false`     | Show loader and disable button |
| `disabled`  | `boolean`                                           | `false`     | Disable button                 |
| `type`      | `"button" \| "submit" \| "reset"`                   | `"button"`  | Button type                    |
| `className` | `string`                                            | —           | Extra CSS classes              |
| `...rest`   | `any`                                               | —           | Any native button props        |

**Accessibility:**

- Uses `aria-disabled` and `aria-busy` for loading/disabled states.
- Standard keyboard/tab navigation.
- Focus ring visible.

---

### Input

A modern, accessible input component with size, state, and help/error message support.

```jsx
<Input
  label="Username"
  id="username"
  value={username}
  onChange={handleChange}
  placeholder="Enter your username"
  required
  size="md"
  help="Use 4–16 letters or numbers"
  error={error}
  success={success}
/>
```

| Prop          | Type                   | Default | Description                        |
| ------------- | ---------------------- | ------- | ---------------------------------- |
| `label`       | `string`               | —       | Optional label text                |
| `id`          | `string`               | —       | Input id (required if using label) |
| `value`       | `string`               | —       | Input value                        |
| `onChange`    | `function(e)`          | —       | Input change handler               |
| `placeholder` | `string`               | —       | Placeholder text                   |
| `required`    | `boolean`              | `false` | Mark as required                   |
| `disabled`    | `boolean`              | `false` | Disable input                      |
| `readOnly`    | `boolean`              | `false` | Read only                          |
| `size`        | `"sm" \| "md" \| "lg"` | `"md"`  | Input size                         |
| `fullWidth`   | `boolean`              | `false` | Make input full width              |
| `error`       | `string`               | —       | Show error state/message           |
| `success`     | `string`               | —       | Show success state/message         |
| `help`        | `string`               | —       | Show help/hint text                |
| `className`   | `string`               | —       | Extra CSS classes                  |
| `...rest`     | `any`                  | —       | Any native input props             |

**Accessibility:**

- Label and input are linked for screen readers.
- Error/help/success messages are read out via `aria-describedby`.
- `aria-invalid` and `aria-disabled` set as needed.
- Focus ring visible.

---

# Textarea

A modern, accessible textarea with size, state, help/error messages, and optional character counter.

## Usage

```jsx
<Textarea
  label="Bio"
  id="bio"
  value={bio}
  onChange={handleBioChange}
  placeholder="Tell us about yourself"
  required
  size="md"
  help="Max 150 characters"
  error={error}
  success={success}
  maxLength={150}
  showCount
/>
```

## Props

| Prop          | Type                   | Default | Description                           |
| ------------- | ---------------------- | ------- | ------------------------------------- |
| `label`       | `string`               | —       | Optional label text                   |
| `id`          | `string`               | —       | Textarea id (required if using label) |
| `value`       | `string`               | —       | Textarea value                        |
| `onChange`    | `function(e)`          | —       | Change handler                        |
| `placeholder` | `string`               | —       | Placeholder text                      |
| `required`    | `boolean`              | `false` | Mark as required                      |
| `disabled`    | `boolean`              | `false` | Disable textarea                      |
| `readOnly`    | `boolean`              | `false` | Read only                             |
| `size`        | `"sm" \| "md" \| "lg"` | `"md"`  | Textarea size                         |
| `fullWidth`   | `boolean`              | `false` | Make textarea full width              |
| `error`       | `string`               | —       | Show error state/message              |
| `success`     | `string`               | —       | Show success state/message            |
| `help`        | `string`               | —       | Show help/hint text                   |
| `maxLength`   | `number`               | —       | Maximum allowed character count       |
| `showCount`   | `boolean`              | `false` | Show the character counter            |
| `className`   | `string`               | —       | Extra CSS classes                     |
| `...rest`     | `any`                  | —       | Any native textarea props             |

## Accessibility

- Label and textarea are linked for screen readers.
- Error/help/success messages are read out via `aria-describedby`.
- `aria-invalid` and `aria-disabled` set as needed.
- Focus ring visible.

---

# Select

A modern, accessible select field with size, state, placeholder, and help/error message support.

## Usage

```jsx
<Select
  label="Favorite Fruit"
  id="fruit"
  options={[
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ]}
  value={fruit}
  onChange={handleFruitChange}
  required
  size="md"
  help="Pick your favorite fruit"
  error={error}
  success={success}
  placeholder="Choose a fruit"
/>
```

## Props

| Prop          | Type                                 | Default | Description                         |
| ------------- | ------------------------------------ | ------- | ----------------------------------- |
| `label`       | `string`                             | —       | Optional label text                 |
| `id`          | `string`                             | —       | Select id (required if using label) |
| `value`       | `string`                             | —       | Select value                        |
| `onChange`    | `function(e)`                        | —       | Change handler                      |
| `options`     | `Array<{ label, value, disabled? }>` | `[]`    | List of options                     |
| `placeholder` | `string`                             | —       | Placeholder shown as first option   |
| `required`    | `boolean`                            | `false` | Mark as required                    |
| `disabled`    | `boolean`                            | `false` | Disable select                      |
| `readOnly`    | `boolean`                            | `false` | Read only                           |
| `size`        | `"sm" \| "md" \| "lg"`               | `"md"`  | Select size                         |
| `fullWidth`   | `boolean`                            | `false` | Make select full width              |
| `error`       | `string`                             | —       | Show error state/message            |
| `success`     | `string`                             | —       | Show success state/message          |
| `help`        | `string`                             | —       | Show help/hint text                 |
| `className`   | `string`                             | —       | Extra CSS classes                   |
| `...rest`     | `any`                                | —       | Any native select props             |

## Accessibility

- Label and select are linked for screen readers.
- Error/help/success messages are read out via `aria-describedby`.
- `aria-invalid` and `aria-disabled` set as needed.
- Focus ring and keyboard friendly.

---

# Checkbox

A modern, accessible checkbox with size, state, help/error message support.

## Usage

```jsx
<Checkbox
  label="I agree to the terms"
  id="terms"
  checked={checked}
  onChange={handleCheckChange}
  required
  size="md"
  help="You must agree to continue"
  error={error}
  success={success}
/>
```

## Props

| Prop        | Type                   | Default | Description                        |
| ----------- | ---------------------- | ------- | ---------------------------------- |
| `label`     | `string`               | —       | Optional label text (right of box) |
| `id`        | `string`               | —       | Checkbox id (required if label)    |
| `checked`   | `boolean`              | —       | Checkbox checked state             |
| `onChange`  | `function(e)`          | —       | Change handler                     |
| `required`  | `boolean`              | `false` | Mark as required                   |
| `disabled`  | `boolean`              | `false` | Disable checkbox                   |
| `readOnly`  | `boolean`              | `false` | Read only                          |
| `size`      | `"sm" \| "md" \| "lg"` | `"md"`  | Checkbox size                      |
| `error`     | `string`               | —       | Show error state/message           |
| `success`   | `string`               | —       | Show success state/message         |
| `help`      | `string`               | —       | Show help/hint text                |
| `className` | `string`               | —       | Extra CSS classes                  |
| `...rest`   | `any`                  | —       | Any native checkbox props          |

## Accessibility

- Label and checkbox are linked via `htmlFor`
- Error/help/success messages are read out via `aria-describedby`
- `aria-invalid`, `aria-disabled` set as needed
- Keyboard/focus ring visible

---

# RadioGroup

A modern, accessible radio button group with size, state, help/error message support.

## Usage

```jsx
<RadioGroup
  label="Favorite Color"
  name="color"
  options={[
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue", disabled: true },
  ]}
  value={selectedColor}
  onChange={handleColorChange}
  required
  size="md"
  help="Pick your favorite color"
  error={error}
  success={success}
/>
```

## Props

| Prop        | Type                                 | Default | Description                    |
| ----------- | ------------------------------------ | ------- | ------------------------------ |
| `label`     | `string`                             | —       | Optional group label           |
| `name`      | `string`                             | —       | All radios in group share this |
| `value`     | `string`                             | —       | Selected radio value           |
| `onChange`  | `function(e)`                        | —       | Change handler                 |
| `options`   | `Array<{ label, value, disabled? }>` | `[]`    | List of options                |
| `required`  | `boolean`                            | `false` | Mark as required               |
| `disabled`  | `boolean`                            | `false` | Disable all radios             |
| `readOnly`  | `boolean`                            | `false` | Read only                      |
| `size`      | `"sm" \| "md" \| "lg"`               | `"md"`  | Radio size                     |
| `error`     | `string`                             | —       | Show error state/message       |
| `success`   | `string`                             | —       | Show success state/message     |
| `help`      | `string`                             | —       | Show help/hint text            |
| `className` | `string`                             | —       | Extra CSS classes              |

## Accessibility

- Group and radios use proper roles and `aria-` attributes
- Error/help/success messages are read via `aria-describedby`
- Keyboard/focus ring visible
- Radios are keyboard navigable

---

# Alert

A visually distinct alert box for feedback messages, warnings, errors, and more.

## Usage

```jsx
<Alert variant="success" title="Success!">
  Your profile was updated.
</Alert>
<Alert
  variant="error"
  title="Error"
  onClose={() => setShow(false)}
>
  Something went wrong.
</Alert>
```

## Props

| Prop        | Type                                          | Default  | Description                     |
| ----------- | --------------------------------------------- | -------- | ------------------------------- |
| `variant`   | `"info" \| "success" \| "warning" \| "error"` | `"info"` | Visual style and icon           |
| `title`     | `string`                                      | —        | Optional bold title             |
| `children`  | `node`                                        | —        | Main alert content              |
| `onClose`   | `function`                                    | —        | Shows close button if present   |
| `inline`    | `boolean`                                     | `false`  | Display inline (not full width) |
| `className` | `string`                                      | —        | Extra CSS classes               |

## Accessibility

- Uses `role="alert"` or `role="status"` and `aria-live` for screen reader announcements
- Dismiss button is accessible and focusable

---

# Card

A visually distinct container for grouping related content.

## Usage

```jsx
<Card header="User Profile">
  <p>This is the main content of the card.</p>
</Card>

<Card
  header={<span><b>Project:</b> SuperApp</span>}
  footer="Last updated 2025-09-17"
  shadow
  size="lg"
>
  <p>SuperApp is a productivity tool...</p>
</Card>
```

## Props

| Prop         | Type                 | Default | Description                    |
| ------------ | -------------------- | ------- | ------------------------------ |
| `header`     | string \| ReactNode  | —       | Top section of card            |
| `footer`     | string \| ReactNode  | —       | Bottom section of card         |
| `children`   | node                 | —       | Main card content              |
| `shadow`     | boolean              | false   | Adds deeper shadow             |
| `borderless` | boolean              | false   | Removes card border            |
| `size`       | "sm" \| "md" \| "lg" | "md"    | Card padding/radius size       |
| `center`     | boolean              | false   | Center text/content            |
| `as`         | string               | section | HTML element (section/article) |
| `className`  | string               | —       | Extra CSS classes              |

## Accessibility

- By default, uses `<section>`; for stand-alone content, use `as="article"` or add ARIA labels as needed.
- Header and footer are semantic and accessible if provided.

---

# Button

A flexible, accessible button for actions and forms.

## Usage

```jsx
<Button>Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger" size="lg" full>
  Delete
</Button>
<Button loading>Loading…</Button>
<Button leftIcon={<Icon />} rightIcon={<ChevronRight />} size="sm">
  With Icons
</Button>
```

## Props

| Prop        | Type                                            | Default   | Description                   |
| ----------- | ----------------------------------------------- | --------- | ----------------------------- |
| `variant`   | "primary" \| "secondary" \| "danger" \| "ghost" | "primary" | Visual style                  |
| `size`      | "sm" \| "md" \| "lg"                            | "md"      | Button size                   |
| `disabled`  | boolean                                         | false     | Disabled state                |
| `loading`   | boolean                                         | false     | Loading state (shows spinner) |
| `full`      | boolean                                         | false     | Full width                    |
| `leftIcon`  | ReactNode                                       | —         | Icon left of label            |
| `rightIcon` | ReactNode                                       | —         | Icon right of label           |
| `children`  | node                                            | —         | Label/content                 |
| `type`      | "button" \| "submit" \| "reset"                 | "button"  | HTML button type              |
| `className` | string                                          | —         | Extra CSS classes             |

## Accessibility

- Always uses a semantic `<button>` element
- Disabled and loading states are keyboard-inaccessible and announced

---

# Spinner

A simple animated indicator for loading states.

## Usage

```jsx
<Spinner />
<Spinner size="sm" />
<Spinner size="lg" color="danger" />
<Spinner color="muted" ariaLabel="Please wait…" />
```

## Props

| Prop        | Type                         | Default   | Description         |
| ----------- | ---------------------------- | --------- | ------------------- |
| `size`      | "sm"\|"md"\|"lg"             | "md"      | Spinner size        |
| `color`     | "primary"\|"muted"\|"danger" | "primary" | Spinner color       |
| `ariaLabel` | string                       | "Loading" | Screen reader label |
| `className` | string                       | —         | Extra CSS classes   |

## Accessibility

- Uses `role="status"` and `aria-label` for assistive tech.
- Use an informative `ariaLabel` for context.

---

# Modal

A dialog overlay for focused content or actions.

## Usage

```jsx
const [open, setOpen] = useState(false);

<Modal
  open={open}
  onClose={() => setOpen(false)}
  header="Dialog Title"
  footer={<Button onClick={() => setOpen(false)}>Close</Button>}
>
  <p>This is the modal’s content.</p>
</Modal>;
```

## Props

| Prop          | Type             | Default | Description                  |
| ------------- | ---------------- | ------- | ---------------------------- |
| `open`        | boolean          | —       | Modal visibility             |
| `onClose`     | function         | —       | Called on close (esc, click) |
| `header`      | ReactNode        | —       | Modal title/header           |
| `footer`      | ReactNode        | —       | Modal footer (actions)       |
| `children`    | node             | —       | Modal content                |
| `size`        | "sm"\|"md"\|"lg" | "md"    | Modal width                  |
| `center`      | boolean          | true    | Center content               |
| `closeButton` | boolean          | true    | Show close (×) button        |
| `className`   | string           | —       | Extra CSS classes            |

## Accessibility

- Uses `role="dialog"` and `aria-modal`
- ESC key closes modal
- Backdrop click closes modal
- Focus is trapped and returned

---

## Example App

Try out all components in the included [`main.jsx`](./src/main.jsx) demo.

---

## Development

- Clone the repo
- Run `npm install`
- Start the dev preview: `npm start` or `yarn start`
- Edit components and see live reload

---

## Testing

_Coming soon!_

---

## License

MIT

---

## Credits

Inspired by [Radix UI](https://www.radix-ui.com/), [Reach UI](https://reach.tech/), and the open-source community.
