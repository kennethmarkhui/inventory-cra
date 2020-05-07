import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Item.css';
import { NavLink } from 'react-router-dom';

const Item = (props) => {
  // console.log(props);

  return (
    <div className="col-lg-6 mb-3">
      <div className="card">
        <div className="card-body pb-2 pt-2">
          <div className="row">
            <div className="col-sm-4 p-0">
              <div className="img-container embed-responsive">
                <img
                  className="embed-responsive-item img-fit"
                  src={props.dummy.imgUrl}
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-8">
              <a href="/" className="float-right">
                <FontAwesomeIcon icon="times" color="black" />
              </a>
              <NavLink
                to={`/edit/${props.dummy.itemId}`}
                className="float-right mr-3"
              >
                <FontAwesomeIcon icon="pen" color="black" />
              </NavLink>
              <h5 className="text-dark d-block mt-2 text-truncate">
                <span title={props.dummy.name.en}>{props.dummy.name.en}</span>
              </h5>
              <hr className="m-1" />
              <dl
                className="row mb-0 text-center text-sm-left"
                style={{ fontSize: '.9rem' }}
              >
                <dt className="col-sm-4">Storage</dt>
                <dd className="col-sm-8 mb-0">{props.dummy.itemStorage}</dd>
                <dt className="col-sm-4">Category</dt>
                <dd className="col-sm-8 mb-0">{props.dummy.category.en}</dd>
                <dt className="col-sm-4">Location</dt>
                <dd className="col-sm-8 mb-0">
                  {props.dummy.location.country.en}
                </dd>
                <dt className="col-sm-4">Period</dt>
                <dd className="col-sm-8 mb-0">{props.dummy.period.en}</dd>
              </dl>
              <hr className="m-1" />
              <div className="row text-center" style={{ fontSize: '.9rem' }}>
                <div className="col-12">
                  <strong>Size</strong>
                </div>
                <div className="col-6">
                  <dl className="row mb-0">
                    <dt className="col-sm-5">IN</dt>
                    <dd className="col-sm-7 mb-0">
                      {props.dummy.size.in.len}x{props.dummy.size.in.wid}
                    </dd>
                  </dl>
                </div>
                <div className="col-6">
                  <dl className="row mb-0">
                    <dt className="col-sm-5">OUT</dt>
                    <dd className="col-sm-7 mb-0">
                      {props.dummy.size.out.len}x{props.dummy.size.out.wid}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer w-100 text-muted text-center p-1">
          {props.dummy.itemId}
        </div>
      </div>
    </div>
  );
};

export default Item;
