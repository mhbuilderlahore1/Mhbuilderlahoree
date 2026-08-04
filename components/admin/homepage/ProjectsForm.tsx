export default function ProjectsForm() {
  return (
    <div>

      <h2>Projects</h2>

      <input
        type="text"
        placeholder="Project Title"
      />

      <br /><br />

      <textarea
        placeholder="Project Description"
      />

      <br /><br />

      <input
        type="file"
      />

      <br /><br />

      <button>
        Save Project
      </button>

    </div>
  );
}
