import BlogDetails from "./BlogDetails";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

function App() {
  // ? const title = "Welcome to my App";
  // ? const likes = 50;
  // ? const person = { name: "Yoshi", age: 30 };
  // ? const link = "https://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="/create">
              <Create />
            </Route> */}
          </Routes>
          {/* <Home /> */}
          {/* <h1>App Component</h1> */}
          {/* <h1>{title}</h1> */}
          {/* <p>Liked {likes} times!</p> */}

          {/* <p>{person}</p> */}

          {/* <p>{10}</p> */}
          {/* <p>{"This is a string directly in JSX!"}</p> */}
          {/* <p>{[1, 2, 3, 4, 5, 6, 7].join(", ")}</p> */}
          {/* <p>{Math.floor(Math.random() * 10)}</p> */}

          {/* <a href={link} target="_blank" rel="noopener noreferrer">
          Google Search
        </a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
