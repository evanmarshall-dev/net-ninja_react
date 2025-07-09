import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry!</h2>
      <p>That page does not exist... key X-Files music 🛸👽</p>
      <Link to="/">Go back home before abduction! 🏠</Link>
    </div>
  );
};

export default NotFound;
