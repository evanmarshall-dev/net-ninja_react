import { Link } from "react-router-dom";

// ? const BlogList = (props) => {
// ? const BlogList = ({ blogs, title, handleDelete }) => {
const BlogList = ({ blogs, title }) => {
  // ? const blogs = props.blogs;
  // ? console.log(props, blogs);
  // ? const title = props.title;
  // ? console.log(props, title);

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>

          {/* <button
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            Delete Blog
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
