import Button from "../src/components/Button";

function ButtonExample() {
  return (
    <div style={{ display: "flex", gap: "1rem", padding: "2rem" }}>
      <Button variant="primary" onClick={() => alert("Clicked Primary!")}>
        Primary
      </Button>
      <Button variant="secondary" onClick={() => alert("Clicked Secondary!")}>
        Secondary
      </Button>
      <Button variant="neutral" disabled>
        Disabled
      </Button>
    </div>
  );
}

export default ButtonExample;
