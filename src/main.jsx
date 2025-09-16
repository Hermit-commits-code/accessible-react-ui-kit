import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import "./index.css"; // Import Tailwind styles

function App() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");
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

      <Card>
        <h2 className="text-lg font-semibold mb-2">Card Title</h2>
        <p className="mb-2">
          This is a simple card component. Add any content you like!
        </p>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
          Action
        </button>
      </Card>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
