import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  // STATE Variables
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isLoading, setIsLoading] = useState(false);

  // Constant Variables
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = { title, body, author };
    // ? console.log(blog);

    setIsLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog Added");
      setIsLoading(false);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding Blog...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
