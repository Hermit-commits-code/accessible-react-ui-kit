import './theme.css'
import './index.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Alert from './components/Alert'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'
import Modal from './components/Modal'
import Spinner from './components/Spinner'
import Textarea from './components/Textarea'
import Select from './components/Select'
import Checkbox from './components/Checkbox'
import RadioGroup from './components/RadioGroup'

function App() {
  // Form/field states
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [usernameSuccess, setUsernameSuccess] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [bio, setBio] = useState('')
  const [bioError, setBioError] = useState('')
  const [fruit, setFruit] = useState('')
  const [fruitError, setFruitError] = useState('')
  const [color, setColor] = useState('')
  const [colorError, setColorError] = useState('')
  const [checked, setChecked] = useState(false)
  const [checkError, setCheckError] = useState('')
  const [smallChecked, setSmallChecked] = useState(false)
  const [largeChecked, setLargeChecked] = useState(false)
  const [selectedColor, setSelectedColor] = useState('')
  const [smallRadio, setSmallRadio] = useState('')
  const [open, setOpen] = useState(false)
  const [largeRadio, setLargeRadio] = useState('')

  function handleColorChange(e) {
    setSelectedColor(e.target.value)
    setColorError(e.target.value ? '' : 'Pick a color.')
  }
  function handleSmallRadioChange(e) {
    setSmallRadio(e.target.value)
  }
  function handleLargeRadioChange(e) {
    setLargeRadio(e.target.value)
  }

  function handleCheckChange(e) {
    setChecked(e.target.checked)
    setCheckError(e.target.checked ? '' : 'You must agree to continue')
  }
  function handleSmallCheckChange(e) {
    setSmallChecked(e.target.checked)
  }
  function handleLargeCheckChange(e) {
    setLargeChecked(e.target.checked)
  }
  const fruitOptions = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
  ]
  const colorOptions = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ]

  // Handlers
  const handleUsernameChange = (e) => {
    const val = e.target.value
    setUsername(val)
    if (!val) {
      setUsernameError('This field is required.')
      setUsernameSuccess('')
    } else if (val.length < 4) {
      setUsernameError('Username must be at least 4 characters.')
      setUsernameSuccess('')
    } else {
      setUsernameError('')
      setUsernameSuccess('Looks good!')
    }
  }

  const handleValidateUsername = () => {
    if (!username) {
      setUsernameError('This field is required.')
      setUsernameSuccess('')
    } else if (username.length < 4) {
      setUsernameError('Username must be at least 4 characters.')
      setUsernameSuccess('')
    } else {
      setUsernameError('')
      setUsernameSuccess('Looks good!')
    }
  }

  const handleBioChange = (e) => {
    setBio(e.target.value)
    setBioError(
      e.target.value.length > 150 ? 'Maximum 150 characters allowed' : '',
    )
  }

  const handleFruitChange = (e) => {
    setFruit(e.target.value)
    setFruitError('')
  }

  // Demo submit (optional, for polish)
  const handleSubmit = (e) => {
    e.preventDefault()
    let isValid = true

    if (!username) {
      setUsernameError('This field is required.')
      setUsernameSuccess('')
      isValid = false
    } else if (username.length < 4) {
      setUsernameError('Username must be at least 4 characters.')
      setUsernameSuccess('')
      isValid = false
    } else {
      setUsernameError('')
      setUsernameSuccess('Looks good!')
    }
    if (!bio) {
      setBioError('Please enter your bio.')
      isValid = false
    } else if (bio.length > 150) {
      setBioError('Maximum 150 characters allowed')
      isValid = false
    }
    if (!fruit) {
      setFruitError('Please select a fruit')
      isValid = false
    }
    if (!checked) {
      setCheckboxError('You must agree to continue')
      isValid = false
    }
    if (!color) {
      setColorError('Please select a color')
      isValid = false
    }
    if (isValid) {
      alert('Form submitted! 🚀')
    }
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">UI Component Library Preview</h1>
      </header>

      <section className="section">
        <h2 className="section-title">Button</h2>

        <div
          style={{
            display: 'flex',
            gap: '1em',
            flexWrap: 'wrap',
            marginBottom: '1em',
          }}
        >
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading…</Button>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '1em',
            flexWrap: 'wrap',
            marginBottom: '1em',
          }}
        >
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button full>Full Width</Button>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '1em',
            flexWrap: 'wrap',
            marginBottom: '1em',
          }}
        >
          <Button
            leftIcon={
              <span role="img" aria-label="star">
                ⭐
              </span>
            }
          >
            Left Icon
          </Button>
          <Button
            rightIcon={
              <span role="img" aria-label="arrow">
                ➡️
              </span>
            }
          >
            Right Icon
          </Button>
          <Button
            leftIcon={
              <span role="img" aria-label="star">
                ⭐
              </span>
            }
            rightIcon={
              <span role="img" aria-label="arrow">
                ➡️
              </span>
            }
          >
            Both Icons
          </Button>
        </div>
      </section>

      <section style={{ margin: '2rem 0' }}>
        <h2 style={{ marginBottom: '1rem' }}>Alert Components</h2>
        <Alert variant="info" title="Info!">
          This is an informational alert.
        </Alert>
        <Alert variant="success" title="Success!">
          This is a success alert.
        </Alert>
        <Alert variant="warning" title="Warning!">
          This is a warning alert.
        </Alert>
        <Alert variant="error" title="Error!">
          This is an error alert.
        </Alert>
      </section>

      <section className="section">
        <h2 className="section-title">Input</h2>
        <Input
          label="Username"
          id="username-demo"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
          required
          error={usernameError}
          success={usernameSuccess}
          help="Use 4–16 letters or numbers"
          fullWidth
        />
        <Button
          variant="primary"
          className="validate-btn"
          onClick={handleValidateUsername}
          style={{ marginTop: 8 }}
        >
          Validate
        </Button>
        <Input
          label="Disabled"
          value="Can't edit this"
          disabled
          size="md"
          fullWidth
        />

        <Input
          label="Read Only"
          value="Visible but not editable"
          readOnly
          size="md"
          fullWidth
        />

        <Input
          label="Small Input"
          value=""
          placeholder="Small"
          size="sm"
          help="Try a short input"
        />

        <Input
          label="Large Input"
          value=""
          placeholder="Large"
          size="lg"
          help="Try a longer input"
        />
      </section>

      <section className="section">
        <h2 className="section-title">Textarea</h2>
        <Textarea
          label="Bio"
          id="bio-demo"
          value={bio}
          onChange={handleBioChange}
          placeholder="Tell us about yourself"
          required
          size="md"
          fullWidth
          help="Max 150 characters"
          error={bioError}
          success={
            !bioError && bio.length > 0 && bio.length <= 150
              ? 'Looks good!'
              : ''
          }
          maxLength={150}
          showCount
        />

        <Textarea
          label="Disabled"
          value="You can't edit this."
          disabled
          size="md"
          fullWidth
          help="This textarea is disabled."
        />

        <Textarea
          label="Read Only"
          value="Visible but not editable."
          readOnly
          size="md"
          fullWidth
          help="This textarea is read-only."
        />

        <Textarea
          label="Small Textarea"
          value=""
          placeholder="Small"
          size="sm"
          help="Try a short textarea"
          showCount
          maxLength={50}
        />

        <Textarea
          label="Large Textarea"
          value=""
          placeholder="Large"
          size="lg"
          help="Try a longer textarea"
          showCount
          maxLength={300}
        />
      </section>
      <section className="section">
        <h2 className="section-title">Select</h2>
        <Select
          label="Favorite Fruit"
          id="fruit-demo"
          options={[
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' },
            { label: 'Cherry', value: 'cherry' },
          ]}
          value={fruit}
          onChange={handleFruitChange}
          required
          size="md"
          fullWidth
          help="Pick your favorite fruit"
          error={fruitError}
          success={!fruitError && fruit ? 'Great choice!' : ''}
          placeholder="Choose a fruit"
        />

        <Select
          label="Disabled"
          options={[{ label: 'Unavailable', value: 'unavailable' }]}
          value="unavailable"
          disabled
          size="md"
          fullWidth
          help="This select is disabled."
          placeholder="Disabled"
        />

        <Select
          label="Read Only"
          options={[{ label: 'Locked', value: 'locked' }]}
          value="locked"
          readOnly
          size="md"
          fullWidth
          help="This select is read-only."
          placeholder="Read Only"
        />

        <Select
          label="Small Select"
          options={[
            { label: 'Small 1', value: 'sm1' },
            { label: 'Small 2', value: 'sm2' },
          ]}
          value=""
          size="sm"
          help="Small size"
          placeholder="Choose an option"
        />

        <Select
          label="Large Select"
          options={[
            { label: 'Large 1', value: 'lg1' },
            { label: 'Large 2', value: 'lg2' },
          ]}
          value=""
          size="lg"
          help="Large size"
          placeholder="Choose an option"
        />
      </section>
      <section className="section">
        <h2 className="section-title">Checkbox</h2>

        <Checkbox
          label="I agree to the terms"
          id="terms"
          checked={checked}
          onChange={handleCheckChange}
          required
          size="md"
          help="You must agree to continue"
          error={checkError}
          success={!checkError && checked ? 'Thank you!' : ''}
        />

        <Checkbox
          label="Small Checkbox"
          checked={smallChecked}
          onChange={handleSmallCheckChange}
          size="sm"
          help="A small checkbox"
        />

        <Checkbox
          label="Large Checkbox"
          checked={largeChecked}
          onChange={handleLargeCheckChange}
          size="lg"
          help="A large checkbox"
        />

        <Checkbox
          label="Disabled"
          checked={true}
          disabled
          size="md"
          help="This checkbox is disabled."
        />

        <Checkbox
          label="Read Only"
          checked={true}
          readOnly
          size="md"
          help="This checkbox is read-only."
        />
      </section>
      <section className="section">
        <h2 className="section-title">RadioGroup</h2>

        <RadioGroup
          label="Favorite Color"
          name="color"
          options={[
            { label: 'Red', value: 'red' },
            { label: 'Green', value: 'green' },
            { label: 'Blue', value: 'blue', disabled: true },
          ]}
          value={selectedColor}
          onChange={handleColorChange}
          required
          size="md"
          help="Pick your favorite color"
          error={colorError}
          success={!colorError && selectedColor ? 'Thanks for choosing!' : ''}
        />

        <RadioGroup
          label="Small Radios"
          name="smallRadios"
          options={[
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ]}
          value={smallRadio}
          onChange={handleSmallRadioChange}
          size="sm"
          help="Small size"
        />

        <RadioGroup
          label="Large Radios"
          name="largeRadios"
          options={[
            { label: 'X', value: 'x' },
            { label: 'Y', value: 'y' },
          ]}
          value={largeRadio}
          onChange={handleLargeRadioChange}
          size="lg"
          help="Large size"
        />

        <RadioGroup
          label="Disabled"
          name="disabledRadios"
          options={[
            { label: 'No', value: 'no' },
            { label: 'Yes', value: 'yes' },
          ]}
          value="no"
          disabled
          size="md"
          help="All radios disabled."
        />

        <RadioGroup
          label="Read Only"
          name="readonlyRadios"
          options={[
            { label: 'Locked', value: 'locked' },
            { label: 'Unlocked', value: 'unlocked' },
          ]}
          value="locked"
          readOnly
          size="md"
          help="This radio group is read-only."
        />
      </section>
      <section className="section">
        <h2 className="section-title">Card</h2>

        <Card header="User Profile">
          <div>
            <strong>Name:</strong> Alex Doe
            <br />
            <strong>Email:</strong> alex@example.com
          </div>
        </Card>

        <Card
          header={
            <span>
              <b>Project:</b> SuperApp
            </span>
          }
          footer="Last updated 2025-09-17"
          shadow
          size="lg"
        >
          <p>SuperApp is a productivity tool for teams. Collaborate now!</p>
        </Card>

        <Card
          header="Borderless Card"
          borderless
          size="sm"
          footer="Footer text"
        >
          <p>This card has no border and uses small padding.</p>
        </Card>

        <Card header="Center Content" center footer="Centered footer">
          <p>This card’s content and footer are centered.</p>
        </Card>
      </section>
      <section className="section">
        <h2 className="section-title">Spinner</h2>
        <div
          style={{
            display: 'flex',
            gap: '2em',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Spinner />
          <Spinner size="sm" />
          <Spinner size="lg" />
          <Spinner color="muted" />
          <Spinner color="danger" />
          <Spinner size="lg" color="danger" ariaLabel="Deleting…" />
        </div>
        <div style={{ marginTop: '1.5em' }}>
          <Button loading leftIcon={<Spinner size="sm" />} variant="secondary">
            Loading with spinner
          </Button>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Modal</h2>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          header="Welcome to the Modal"
          footer={
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
          size="md"
        >
          <p>
            This is a polished, accessible modal dialog for your UI library.
          </p>
        </Modal>
      </section>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
