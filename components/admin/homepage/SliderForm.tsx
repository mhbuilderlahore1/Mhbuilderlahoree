export default function SliderForm() {
  return (
    <div>
      <h2>Slider</h2>

      <input
        type="text"
        placeholder="Slider Title"
      />

      <br /><br />

      <textarea
        placeholder="Slider Content"
      />

      <br /><br />

      <input type="file" />

      <br /><br />

      <button>
        Save Slider
      </button>
    </div>
  );
}
