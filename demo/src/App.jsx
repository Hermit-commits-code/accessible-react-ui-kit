import { useState } from 'react'
import Sidebar from './Sidebar'
import ButtonPlayground from './ButtonPlayground'
import InputPlayground from './InputPlayground'
import TextareaPlayground from './TextareaPlayground'
import SelectPlayground from './SelectPlayground'
import CheckboxPlayground from './CheckboxPlayground'
import RadioGroupPlayground from './RadioGroupPlayground'
import AlertPlayground from './AlertPlayground'
import CardPlayground from './CardPlayground'
import ModalPlayground from './ModalPlayground'
import SpinnerPlayground from './SpinnerPlayground'

const COMPONENTS = {
  button: <ButtonPlayground />,
  input: <InputPlayground />,
  textarea: <TextareaPlayground />,
  select: <SelectPlayground />,
  checkbox: <CheckboxPlayground />,
  radiogroup: <RadioGroupPlayground />,
  alert: <AlertPlayground />,
  card: <CardPlayground />,
  modal: <ModalPlayground />,
  spinner: <SpinnerPlayground />,
  // Add more component demos here
}

function App() {
  const [current, setCurrent] = useState('button')
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar current={current} onNavigate={setCurrent} />
      <main style={{ flex: 1, padding: 32 }}>
        <h1>Accessible React UI Kit Demo</h1>
        {COMPONENTS[current] || <div>Select a component from the sidebar.</div>}
      </main>
    </div>
  )
}

export default App
