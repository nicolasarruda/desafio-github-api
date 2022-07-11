import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar main-nav">
      <div className="container-fluid">
        <Link to="/">
          <h1>Github API</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
