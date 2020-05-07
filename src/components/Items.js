import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Item from './Item';
import DUMMY_DATA from '../DUMMY_DATA.json';

const Items = (props) => {
  const updateAppState = () => {
    props.appStateHandler('nice');
  };
  return (
    <React.Fragment>
      <div className="row">
        {DUMMY_DATA.map((item) => {
          return <Item dummy={item} key={item.itemId} />;
        })}
      </div>
      <p className="mt-3 text-center">Showing 1 to 50 of 1,035 titles</p>
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="/">
              <FontAwesomeIcon icon="angle-double-left" color="black" />
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              1
            </a>
          </li>
          <li className=" page-item">
            <a className="page-link" href="/">
              <FontAwesomeIcon icon="angle-double-right" color="black" />
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Items;
