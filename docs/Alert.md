# Alert / Toast

Accessible alert/toast notifications for React.

## Usage

```jsx
import Alert from '../src/components/Alert';

<Alert type="success">This is a success message!</Alert>
<Alert type="error">This is an error message!</Alert>
```

## Props

| Prop     | Type                                        | Default | Description      |
| -------- | ------------------------------------------- | ------- | ---------------- |
| type     | 'success' \| 'error' \| 'info' \| 'warning' | 'info'  | Alert type/style |
| children | node                                        | —       | Message/content  |

## Accessibility

- ARIA live region for announcements
- Dismissable option

---
