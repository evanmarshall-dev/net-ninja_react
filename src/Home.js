import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // Initial value of blogs state is an array of blogs. The blogs are objects.
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
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

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
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
