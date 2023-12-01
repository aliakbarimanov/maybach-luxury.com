// import Link
import { Link } from "react-router-dom";

const NotFound = () => {

  return (
    <section className="notFound">
      <h2 className="title">
        Page not found
      </h2>
      <p className="description">
        We are sorry, the page you're looking for could not be found. It may no
        longer exist or may have been moved.
      </p>
      <Link to="/">back to homepage</Link>
    </section>
  );
};

export default NotFound;
