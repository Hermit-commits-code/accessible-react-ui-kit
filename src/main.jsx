import ReactDOM from "react-dom/client";
import "./index.css"; // Import Tailwind styles

import Button from "./components/Button"; // <-- You need this import!

function App() {
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
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
