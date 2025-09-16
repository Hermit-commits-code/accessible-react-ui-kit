import "./index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Spinner from "./components/Spinner";
import Textarea from "./components/Textarea";
import Select from "./components/Select";
import Checkbox from "./components/Checkbox";
import RadioGroup from "./components/RadioGroup";

function App() {
  // Form/field states
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bio, setBio] = useState("");
  const [bioError, setBioError] = useState("");
  const [fruit, setFruit] = useState("");
  const [fruitError, setFruitError] = useState("");
  const [checked, setChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");
  const [color, setColor] = useState("");
  const [colorError, setColorError] = useState("");

  const fruitOptions = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];
  const colorOptions = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  // Handlers
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const handleValidateUsername = () => {
    setUsernameError(username ? "" : "This field is required.");
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
    setBioError(
      e.target.value.length > 150 ? "Maximum 150 characters allowed" : ""
    );
  };

  const handleFruitChange = (e) => {
    setFruit(e.target.value);
    setFruitError("");
  };

  const handleCheckChange = (e) => {
    setChecked(e.target.checked);
    setCheckboxError(e.target.checked ? "" : "You must agree to continue");
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
    setColorError("");
  };

  // Demo submit (optional, for polish)
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!username) {
      setUsernameError("This field is required.");
      isValid = false;
    }
    if (!bio) {
      setBioError("Please enter your bio.");
      isValid = false;
    } else if (bio.length > 150) {
      setBioError("Maximum 150 characters allowed");
      isValid = false;
    }
    if (!fruit) {
      setFruitError("Please select a fruit");
      isValid = false;
    }
    if (!checked) {
      setCheckboxError("You must agree to continue");
      isValid = false;
    }
    if (!color) {
      setColorError("Please select a color");
      isValid = false;
    }
    if (isValid) {
      alert("Form submitted! 🚀");
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">UI Component Library Preview</h1>
        <p className="app-description">
          Start building your components in <code>src/components/</code>!
        </p>
      </header>

      <section className="section">
        <h2 className="section-title">Buttons</h2>
        <div className="button-group">
          <Button variant="primary" onClick={() => alert("Clicked!")}>
            Primary
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="neutral" disabled>
            Disabled
          </Button>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Input</h2>
        <Input
          label="Username"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
          required
          error={usernameError}
        />
        <Button
          variant="primary"
          className="validate-btn"
          onClick={handleValidateUsername}
        >
          Validate
        </Button>
      </section>

      <section className="section">
        <h2 className="section-title">Alerts</h2>
        <Alert status="info">
          This is an informational alert. Use <code>status="info"</code>.
        </Alert>
        <Alert status="success">
          Success! Your action was completed successfully.
        </Alert>
        <Alert status="warning">
          Warning! Please double-check your action.
        </Alert>
        <Alert status="error">Error! Something went wrong.</Alert>
      </section>

      <section className="section">
        <h2 className="section-title">Card & Modal</h2>
        <Card>
          <h3 className="card-title">Card Title</h3>
          <p className="card-description">
            This is a simple card component. Add any content you like!
          </p>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>
        </Card>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h3 className="modal-title">Hello from the Modal!</h3>
          <p>This is a simple modal. Click outside or the × to close.</p>
        </Modal>
        <Spinner style={{ width: "3rem", height: "3rem" }} />
      </section>

      <form
        onSubmit={handleSubmit}
        className="section"
        autoComplete="off"
        noValidate
      >
        <h2 className="section-title">Form Elements</h2>

        <Textarea
          label="Bio"
          id="bio"
          value={bio}
          onChange={handleBioChange}
          required
          error={bioError}
          placeholder="Tell us a bit about yourself…"
          maxLength={150}
        />
        <div style={{ marginTop: 12, color: "#64748b" }}>
          {bio.length} / 150 characters
        </div>

        <Select
          label="Favorite Fruit"
          id="fruit"
          options={fruitOptions}
          value={fruit}
          onChange={handleFruitChange}
          required
          error={fruitError}
          placeholder="Choose a fruit"
        />

        <Checkbox
          id="terms"
          label="I agree to the terms and conditions"
          checked={checked}
          onChange={handleCheckChange}
          required
          error={checkboxError}
        />

        <RadioGroup
          label="Favorite Color"
          name="color"
          options={colorOptions}
          value={color}
          onChange={handleColorChange}
          required
          error={colorError}
        />

        <Button variant="primary" type="submit" style={{ marginTop: 16 }}>
          Submit Form
        </Button>
      </form>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
