import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div id="Footer">
        <Link to={'/blue'}>
          Blue
        </Link>
        <Link to={'/red'}>
          Red
        </Link>
        <Link to={'/'}>
          Home
        </Link>
        <Link to={'/yellow'}>
          Yellow
        </Link>
      </div>
    );
  }