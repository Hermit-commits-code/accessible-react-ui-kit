# Button

A highly accessible, themeable button component for React.

## Usage

```jsx
import Button from '../../src/components/Button';

<Button variant="primary" onClick={() => alert('Clicked Primary!')}>
  Primary
</Button>
<Button variant="secondary" onClick={() => alert('Clicked Secondary!')}>
  Secondary
</Button>
<Button variant="neutral" disabled>
  Disabled
</Button>
<Button aria-label="Save changes">
  <span role="img" aria-label="Save">💾</span>
</Button>
```

## Accessibility Notes

- Uses a semantic `<button>` element for built-in keyboard and screen reader support.
- Supports `aria-label` for custom accessible names.
- Shows a visible focus ring for keyboard users, meeting WCAG guidelines.
- Disabled state is fully supported.

## Props

| Prop         | Type   | Default   | Description                                              |
| ------------ | ------ | --------- | -------------------------------------------------------- |
| `variant`    | string | "primary" | Sets the color style (`primary`, `secondary`, `neutral`) |
| `children`   | node   | —         | Content inside the button (text, icons)                  |
| `className`  | string | —         | Additional classes for custom styling                    |
| `type`       | string | "button"  | Button type (`button`, `submit`, etc.)                   |
| `disabled`   | bool   | false     | Disables the button and prevents interaction             |
| `aria-label` | string | —         | Accessibility label for screen readers                   |
| ...rest      | any    | —         | All other native button props                            |

## Example in `/examples/ButtonExample.jsx`

See a live demo and more usage patterns in [examples/ButtonExample.jsx](../../examples/ButtonExample.jsx).

---

Need more component guides? Return to [Components Overview](../README.md).
