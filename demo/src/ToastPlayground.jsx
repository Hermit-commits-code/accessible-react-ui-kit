import Toast from '../../src/components/Toast/Toast'
import { useState } from 'react'

export default function ToastPlayground() {
  const [show, setShow] = useState(false)
  return (
    <div style={{ padding: 32 }}>
      <h2>Toast Demo</h2>
      <button onClick={() => setShow(true)}>Show Toast</button>
      <Toast open={show} onClose={() => setShow(false)}>
        Accessible Toast message!
      </Toast>
    </div>
  )
}
