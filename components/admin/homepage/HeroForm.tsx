export default function HeroForm() {
  return (
    <div>
      <h2>Hero Section</h2>

      <input
        type="text"
        placeholder="Hero Title"
      />

      <br /><br />

      <textarea
        placeholder="Hero Content"
      />

      <br /><br />

      <input type="file" />

      <br /><br />

      <button>
        Save Hero
      </button>
    </div>
  );
}
