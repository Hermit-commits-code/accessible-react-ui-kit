import React from "react";
import ReactDOM from "react-dom/client";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import Modal from "./components/Modal";
import "./index.css"; // Import Tailwind styles

function App() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">UI Component Library Preview</h1>
      <p>
        Start building your components in <code>src/components/</code>!
      </p>
      <Button variant="primary" onClick={() => alert("Clicked!")}>
        Primary
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="neutral" disabled>
        Disabled
      </Button>

      <Input
        label="Username"
        id="username"
        placeholder="Enter your username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        error={error}
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setError(value ? "" : "This field is required.")}
      >
        Validate
      </button>

      <Alert status="info">
        This is an informational alert. Use <code>status="info"</code>.
      </Alert>
      <Alert status="success">
        Success! Your action was completed successfully.
      </Alert>
      <Alert status="warning">Warning! Please double-check your action.</Alert>
      <Alert status="error">Error! Something went wrong.</Alert>

      <Card>
        <h2 className="text-lg font-semibold mb-2">Card Title</h2>
        <p className="mb-2">
          This is a simple card component. Add any content you like!
        </p>
        <button
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Open Modal
        </button>
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-xl font-bold mb-4">Hello from the Modal!</h3>
        <p>This is a simple modal. Click outside or the × to close.</p>
      </Modal>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
