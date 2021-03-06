import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {

  return (
    <nav className="navbar bg-primary">
      <h1><i className={icon}></i>  {title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
};

// Provides default props for component if not passed from parent
Navbar.defaultProps = {
  title: 'Developer Finder',
  icon: 'fab fa-github'
};

// Validate that props passed to component are correct data type
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar
