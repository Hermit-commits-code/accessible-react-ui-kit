# Button Accessibility

- Uses semantic `<button>` element for correct role.
- Supports all ARIA attributes (e.g., `aria-label`, `aria-pressed`).
- Keyboard accessible: can be focused and activated with Enter/Space.
- Focus ring is visible for keyboard users.
- Disabled state uses `disabled` attribute and is announced by screen readers.
- Works with screen readers and assistive tech out of the box.

**Best Practices:**

- Use clear, descriptive button text.
- Use `aria-label` for icon-only buttons.
- Avoid using buttons for navigation (use `<a>` for links).
- Ensure color contrast for text and focus ring.
