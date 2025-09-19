# RadioGroup Accessibility

- Uses semantic `<fieldset>` and `<legend>` for correct grouping.
- Supports all ARIA attributes (e.g., `aria-label`, `aria-required`).
- Keyboard accessible: can be focused and toggled with keyboard.
- Focus ring is visible for keyboard users.
- Disabled and required states use proper attributes and are announced by screen readers.
- Works with screen readers and assistive tech out of the box.

**Best Practices:**

- Use clear, descriptive group labels.
- Use `aria-label` for icon-only radio groups.
- Ensure color contrast for text and focus ring.
