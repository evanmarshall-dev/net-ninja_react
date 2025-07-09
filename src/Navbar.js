import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>This is a Fake Blog App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#635bff",
            borderRadius: "0.5rem",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
