import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = (props) => {
  // console.log(props.appState.route);

  return (
    <header className="mb-5 sticky-top">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <NavLink
            to="/"
            className="navbar-brand"
            // onClick={() => props.appRoute('root')}
          >
            Inventory
          </NavLink>
          <ul className="navbar-nav">
            <li className="navbar-item">
              <NavLink
                to={{ pathname: '/new' }}
                className="nav-link"
                // onClick={() => props.appRoute('new')}
              >
                <FontAwesomeIcon icon="plus" color="white" />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
