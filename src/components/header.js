import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="nav-link">
      <div className="btn-group">
        <Link to="/" className="btn btn-dark">
          <i class="fas fa-book-open"></i> Home
        </Link>
        <Link to="/cart" className="btn btn-dark">
          Cart
        </Link>
        <Link to="/profile" className="btn btn-dark">
          Profile
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default header;
