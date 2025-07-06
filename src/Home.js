import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // Initial value of blogs state is an array of blogs. The blogs are objects.
  // const [blogs, setBlogs] = useState([
  //   { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
  //   { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
  //   {
  //     title: "Web dev top tips",
  //     body: "lorem ipsum...",
  //     author: "mario",
  //     id: 3,
  //   },
  // ]);
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // ? const [name, setName] = useState("Mario");
  // ? let name = "Mario";
  // Variable for initial value, setter function to change value, and useState with initial value within it.
  // ? const [name, setName] = useState("Mario");
  // Another example using a number data type.
  // ? const [age, setAge] = useState(20);

  // ? const handleClick = (event) => {
  // ? console.log("Heyoo!", event);
  // ? name = "Luigi";
  // Check that name variable value has changed.
  // ? console.log(name);
  // Change the value of name.
  // ? setName("Luigi");
  // Update age and re-render.
  // ? setAge(25);
  // ? };

  // ? const handleClickAgain = (name, event) => {
  // ? console.log(`Hello ${name}`, event);
  // ? console.log(`Hello ${name}`, event.target);
  // ? };

  // ? const handleDelete = (id) => {
  // ? const newBlogs = blogs.filter((blog) => {
  //   ? return blog.id !== id;
  // ? });
  // ? const newBlogs = blogs.filter((blog) => blog.id !== id);
  // ? setBlogs(newBlogs);
  // ? };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // ? console.log(data);
        setBlogs(data);
        setIsLoading(false);
      });
    // ? console.log("Use Effect Ran");
    // ? console.log(blogs);
  }, []);
  // ? useEffect(() => {
  //   ? console.log("Use Effect Ran");
  //   ? console.log(name);
  // ? }, [name]);

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          // ? handleDelete={handleDelete}
        />
      )}
      {/* <button onClick={() => setName("Luigi")}>Change Name</button> */}
      {/* <p>{name}</p> */}
      {/* <BlogList
        blogs={blogs.filter((blog) => {
          return blog.author === "mario";
        })}
        title="Mario's Blogs!"
      /> */}
      {/* <h2>Homepage</h2> */}
      {/* Now name is a reactive value. */}
      {/* <p>
        {name} is {age} years old.
      </p> */}
      {/* <button onClick={handleClick}>Change Name</button> */}
      {/* <button
        onClick={() => {
          handleClickAgain("Mario");
        }}
      >
        Click Me Instead
      </button> */}
      {/* <button onClick={(event) => handleClickAgain("Mario", event)}>
        Click Me Instead
      </button> */}
    </div>
  );
};

export default Home;
