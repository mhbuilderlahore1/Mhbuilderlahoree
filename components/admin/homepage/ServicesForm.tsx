export default function ServicesForm() {
  return (
    <div>

      <h2>Services</h2>

      <input
        type="text"
        placeholder="Service Title"
      />

      <br /><br />

      <textarea
        placeholder="Service Content"
      />

      <br /><br />

      <input
        type="file"
      />

      <br /><br />

      <button>
        Save Service
      </button>

    </div>
  );
}
