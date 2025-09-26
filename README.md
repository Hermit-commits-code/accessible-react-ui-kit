# UI Component Library

[![Live Demo](https://img.shields.io/badge/demo-online-blue?logo=react)](https://hermit-commits-code.github.io/accessible-react-ui-kit/)
[![Star on GitHub ⭐](https://img.shields.io/github/stars/Hermit-commits-code/accessible-react-ui-kit?style=social&label=Star%20on%20GitHub)](https://github.com/Hermit-commits-code/accessible-react-ui-kit)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A modern, accessible, and customizable React component library for rapid MVP development.
⭐️ If you find this project useful, please consider starring it on GitHub!

**[→ Accessibility Audit](ACCESSIBILITY_AUDIT.md)**

---

## Table of Contents

- [Features](#features)
- [Theming](#theming)
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
- [Component Status](#component-status)
- [Roadmap](#roadmap)
- [Example App](#example-app)
- [Development](#development)
- [Testing](#testing)
- [Contribution](#contribution)
- [License](#license)
- [Credits](#credits)

---

## Features

- **MVP-first:** Fast, production-ready React components for quick prototyping and real apps.
- **Accessible:** WCAG-compliant, keyboard-friendly, screen-reader support. All components are tested with jest-axe and React Testing Library.
- **Customizable:** Theme everything via CSS variables or utility classes.
- **Documented:** Clear prop tables and usage examples. Per-component docs for every component.
- **Robust Help Text:** All components support always-rendered help text for accessibility.
- **Custom className:** All components accept a custom className on the outermost element.
- **TypeScript Support:** Type definitions included for all components via .d.ts files.
- **Lightweight:** Minimal dependencies, tree-shakable.
- **Composable:** Easy to integrate and extend.

---

## Theming

All components are fully customizable via CSS variables for dark mode, branding, or any custom theme.

Override variables in your app’s CSS:

```css
:root {
  --ui-button-primary-bg: #1976d2;
  --ui-modal-bg: #222c35;
  /* See src/theme.css for all variables */
}
```

You can also scope them to a class or selector for alternate themes.

---

## Installation

```sh
npm install accessible-react-ui-kit
# or
yarn add accessible-react-ui-kit
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
} from 'your-ui-library'

function App() {
  return <Button variant="primary">Hello World</Button>
}
```

---

## Components

<!-- Repeat for each component: usage + props + accessibility -->

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

### Textarea

A modern, accessible textarea with size, state, help/error messages, and optional character counter.

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

**Accessibility:**

- Label and textarea are linked for screen readers.
- Error/help/success messages are read out via `aria-describedby`.
- `aria-invalid` and `aria-disabled` set as needed.
- Focus ring visible.

---

### Select

A modern, accessible select field with size, state, placeholder, and help/error message support.

```jsx
<Select
  label="Favorite Fruit"
  id="fruit"
  options={[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
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

**Accessibility:**

- Label and select are linked for screen readers.
- Error/help/success messages are read out via `aria-describedby`.
- `aria-invalid` and `aria-disabled` set as needed.
- Focus ring and keyboard friendly.

---

### Checkbox

A modern, accessible checkbox with size, state, help/error message support.

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

**Accessibility:**

- Label and checkbox are linked via `htmlFor`
- Error/help/success messages are read out via `aria-describedby`
- `aria-invalid`, `aria-disabled` set as needed
- Keyboard/focus ring visible

---

### RadioGroup

A modern, accessible radio button group with size, state, help/error message support.

```jsx
<RadioGroup
  label="Favorite Color"
  name="color"
  options={[
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue', disabled: true },
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

**Accessibility:**

- Group and radios use proper roles and `aria-` attributes
- Error/help/success messages are read via `aria-describedby`
- Keyboard/focus ring visible
- Radios are keyboard navigable

---

### Alert

A visually distinct alert box for feedback messages, warnings, errors, and more.

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

| Prop        | Type                                          | Default  | Description                     |
| ----------- | --------------------------------------------- | -------- | ------------------------------- |
| `variant`   | `"info" \| "success" \| "warning" \| "error"` | `"info"` | Visual style and icon           |
| `title`     | `string`                                      | —        | Optional bold title             |
| `children`  | `node`                                        | —        | Main alert content              |
| `onClose`   | `function`                                    | —        | Shows close button if present   |
| `inline`    | `boolean`                                     | `false`  | Display inline (not full width) |
| `className` | `string`                                      | —        | Extra CSS classes               |

**Accessibility:**

- Uses `role="alert"` (for error/warning) or `role="status"` (for info/success) and `aria-live` for screen reader announcements, matching the `variant` prop.
- Dismiss button is accessible and focusable

---

### Card

A visually distinct container for grouping related content.

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

**Accessibility:**

- By default, uses `<section>`; for stand-alone content, use `as="article"` or add ARIA labels as needed.
- Header and footer are semantic and accessible if provided.

---

### Spinner

A simple animated indicator for loading states.

```jsx
<Spinner />
<Spinner size="sm" />
<Spinner size="lg" color="danger" />
<Spinner color="muted" ariaLabel="Please wait…" />
```

| Prop        | Type                         | Default   | Description         |
| ----------- | ---------------------------- | --------- | ------------------- |
| `size`      | "sm"\|"md"\|"lg"             | "md"      | Spinner size        |
| `color`     | "primary"\|"muted"\|"danger" | "primary" | Spinner color       |
| `ariaLabel` | string                       | "Loading" | Screen reader label |
| `className` | string                       | —         | Extra CSS classes   |

**Accessibility:**

- Uses `role="status"` and `aria-label` for assistive tech.
- Use an informative `ariaLabel` for context.

---

### Modal

A dialog overlay for focused content or actions.

```jsx
const [open, setOpen] = useState(false)

;<Modal
  open={open}
  onClose={() => setOpen(false)}
  header="Dialog Title"
  footer={<Button onClick={() => setOpen(false)}>Close</Button>}
>
  <p>This is the modal’s content.</p>
</Modal>
```

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

**Accessibility:**

- Uses `role="dialog"` and `aria-modal`
- ESC key closes modal
- Backdrop click closes modal
- Focus is trapped and returned

---

## Component Status

| Component  | Status     | Docs | Themeable |
| ---------- | ---------- | ---- | --------- |
| Button     | ✅         | ✅   | ✅        |
| Input      | ✅         | ✅   | ✅        |
| Textarea   | ✅         | ✅   | ✅        |
| Select     | ✅         | ✅   | ✅        |
| Checkbox   | ✅         | ✅   | ✅        |
| RadioGroup | ✅         | ✅   | ✅        |
| Alert      | ✅         | ✅   | ✅        |
| Card       | ✅         | ✅   | ✅        |
| Modal      | ✅         | ✅   | ✅        |
| Spinner    | ✅         | ✅   | ✅        |
| Tooltip    | ✅         | ✅   | ✅        |
| Dropdown   | 🚧 Planned |      |           |
| Tabs       | 🚧 Planned |      |           |
| Toast      | 🚧 Planned |      |           |
| Pagination | 🚧 Planned |      |           |

---

## Roadmap

- Advanced components: ~~Tooltip~~, Dropdown, Tabs, Toast, Pagination, etc.
- TypeScript types and support
- Automated testing (Jest, Testing Library)
- Improved documentation and demo site
- Community & contribution guidelines

---

## Example App

Try all components in the included [`main.jsx`](./src/main.jsx) demo.

---

## Development

1. Clone the repo
2. Run `npm install`
3. Start the dev preview: `npm start` or `yarn start`
4. Edit components and see live reload

---

## Testing

All components are covered by professional, accessibility-first automated tests (Jest, React Testing Library, jest-axe). Every component robustly supports help text and custom className props, and all accessibility features are verified.

To try the components in a real project, install the package from npm and import as shown above.

---

## Contribution

Contributions are very welcome!  
Please see the [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines and our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## License

Copyright (c) 2025 Hermit-commits-code

---

## Credits

Inspired by [Radix UI](https://www.radix-ui.com/), [Reach UI](https://reach.tech/), and the open-source community.
