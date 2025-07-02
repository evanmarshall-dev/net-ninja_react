const Home = () => {
  const handleClick = (event) => {
    console.log("Heyoo!", event);
  };

  const handleClickAgain = (name, event) => {
    console.log(`Hello ${name}`, event);
    // ? console.log(`Hello ${name}`, event.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      {/* <button
        onClick={() => {
          handleClickAgain("Mario");
        }}
      >
        Click Me Instead
      </button> */}
      <button onClick={(event) => handleClickAgain("Mario", event)}>
        Click Me Instead
      </button>
    </div>
  );
};

export default Home;
