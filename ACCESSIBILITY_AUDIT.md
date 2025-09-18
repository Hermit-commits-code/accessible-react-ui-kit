# Accessibility Audit

_Last updated: 2025-09-18_

## Tools Used

- jest-axe (automated accessibility tests in CI)
- Manual keyboard navigation (Tab, Shift+Tab, Enter, Space, Arrow keys)
- Axe DevTools browser extension (manual spot checks)

## Summary

- All components pass automated axe-core (jest-axe) tests with zero violations.
- Manual keyboard navigation works for all interactive components (Button, Input, Checkbox, RadioGroup, Select, Modal, etc.).
- Modal: Focus trap, ARIA roles, and keyboard dismissal verified.
- Color contrast meets WCAG AA standards for all default themes.
- All form controls have proper labels, help text, and error state a11y.

## Detailed Results

- **Button**: No violations, fully keyboard and screen reader accessible.
- **Alert**: Proper ARIA roles, no violations.
- **Card**: No interactive elements, passes all checks.
- **Checkbox**: Labeled, keyboard accessible, no violations.
- **Input**: Labeled, help/error text, no violations.
- **Modal**: Focus trap, ARIA roles, keyboard dismiss, no violations.
- **RadioGroup**: Group/option roles, keyboard navigation, no violations.
- **Select**: Labeled, keyboard navigation, no violations.
- **Spinner**: ARIA live region, no violations.
- **Textarea**: Labeled, help/error text, no violations.

## Known Issues

- None at this time.

## How to Reproduce

1. Clone the repo
2. Run `npm install && npm test` (jest-axe runs with tests)
3. Optionally, open `src/components` in Storybook or a demo app and use Axe DevTools

---

_This audit will be updated with each major release or accessibility improvement._
