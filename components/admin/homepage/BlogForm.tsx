export default function BlogForm() {
  return (
    <div>

      <h2>Blog</h2>

      <input
        type="text"
        placeholder="Blog Title"
      />

      <br /><br />

      <textarea
        placeholder="Blog Content"
      />

      <br /><br />

      <input
        type="file"
      />

      <br /><br />

      <button>
        Save Blog
      </button>

    </div>
  );
}
