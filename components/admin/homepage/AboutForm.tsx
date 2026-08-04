export default function AboutForm() {
  return (
    <div>

      <h2>About Us</h2>

      <input
        type="text"
        placeholder="About Title"
      />

      <br /><br />

      <textarea
        placeholder="About Content"
      />

      <br /><br />

      <input
        type="file"
      />

      <br /><br />

      <button>
        Save About
      </button>

    </div>
  );
}
