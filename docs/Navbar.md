# Navbar / Sidebar

Accessible navigation bar or sidebar for React.

## Usage

```jsx
import Navbar from "../src/components/Navbar";

<Navbar>
  <a href="/">Home</a>
  <a href="/about">About</a>
</Navbar>;
```

## Props

| Prop     | Type | Default | Description     |
| -------- | ---- | ------- | --------------- |
| children | node | —       | Nav links/items |

## Accessibility

- Uses `<nav>` with proper ARIA roles
- Keyboard navigation

---
