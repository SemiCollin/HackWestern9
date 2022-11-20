import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">login</Link>
      <Link to="/yourtimeline">yourtimeline</Link>
      <Link to="/explore">explore</Link>
    </div>
  );
}
