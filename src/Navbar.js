const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>This Blog is Fake</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#635bff",
            borderRadius: "0.5rem",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
