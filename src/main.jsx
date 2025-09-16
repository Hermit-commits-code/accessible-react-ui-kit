import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import Modal from "./components/Modal";

function App() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          error={error}
        />
        <Button
          variant="primary"
          className="validate-btn"
          onClick={() => setError(value ? "" : "This field is required.")}
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
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
