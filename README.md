# UI Component Library

A modern, accessible, and customizable React component library for rapid MVP development.

---

## 🚀 Features

- **MVP-first:** Fast, clear, production-grade React components
- **Accessible:** WCAG-compliant, keyboard-friendly, screen reader support
- **Customizable:** Easy theming and extension via CSS or utility classes
- **Documented:** Clear prop tables and usage examples
- **Typescript Friendly:** (optional, coming soon)

---

## ✨ Components

- [x] `Button` - Polished, accessible, with variants & sizes
- [x] `Input`
- [x] `Textarea`
- [x] `Select`
- [x] `Checkbox`
- [x] `RadioGroup`
- [x] `Alert`
- [x] `Card`
- [x] `Modal`
- [x] `Spinner`

---

## 📦 Installation

```sh
npm install your-ui-library
# or
yarn add your-ui-library
```

---

## 🧑‍💻 Usage

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

## 🖌️ Button Component

A versatile button with size, variant, full width, loading, and accessibility.

### Example

```jsx
<Button variant="primary" size="md">Primary</Button>
<Button variant="secondary" size="sm">Small Secondary</Button>
<Button variant="danger" loading>Deleting…</Button>
<Button fullWidth>Full Width</Button>
<Button disabled>Disabled</Button>
```

### Props

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

### Accessibility

- Uses `aria-disabled` and `aria-busy` for loading/disabled states.
- Standard keyboard/tab navigation.
- Focus ring visible.

---

## 🧩 Other Components

Each component follows similar conventions:

- **Props with clear defaults**
- **Error/validation support**
- **Accessibility built-in**
- See `/src/components/` for full source

---

## 🗂️ Example App

Try out all components in the included `main.jsx` demo.

---

## 📝 Development

- Clone the repo
- Run `npm install`
- Start the dev preview: `npm start` or `yarn start`
- Edit components and see live reload

---

## 🧪 Testing

_Coming soon!_

---

## 📚 License

MIT

---

## 🙏 Credits

Inspired by [Radix UI](https://www.radix-ui.com/), [Reach UI](https://reach.tech/), and the open-source community.
