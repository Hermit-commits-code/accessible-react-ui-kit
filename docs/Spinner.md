# Spinner

Accessible, themeable loading spinner for React.

## Usage

```jsx
import Spinner from '../src/components/Spinner'

;<Spinner size="lg" color="danger" ariaLabel="Loading..." />
```

## Props

| Prop      | Type   | Default   | Description                         |
| --------- | ------ | --------- | ----------------------------------- |
| size      | string | 'md'      | 'sm', 'md', or 'lg'                 |
| color     | string | 'primary' | 'primary', 'muted', or 'danger'     |
| ariaLabel | string | 'Loading' | Accessible label for screen readers |
| className | string |           | Custom class for spinner            |
| ...rest   | any    |           | All other native span props         |

## Accessibility

- Uses `role="status"` and `aria-label` for screen readers.
- Custom className applies to the spinner.

---
