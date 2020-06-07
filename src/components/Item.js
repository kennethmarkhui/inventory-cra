import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, CardBody, CardFooter } from 'reactstrap';

import ImageModal from './ImageModal';
import './Item.css';

import ItemsContext from '../context/items/itemsContext';

const Item = (props) => {
  const itemsContext = useContext(ItemsContext);
  const { deleteItem } = itemsContext;

  // console.log(props);
  const [showImageModal, setShowImageModal] = useState(false);
  const toggleImageModal = () => setShowImageModal(!showImageModal);

  const onDelete = () => {
    // console.log(props.dummy);
    deleteItem(props.dummy._id);
  };

  return (
    <React.Fragment>
      <ImageModal
        toggle={toggleImageModal}
        show={showImageModal}
        image={props.dummy.image}
      />
      <Col lg="6" className="mb-3">
        <Card>
          <CardBody className="pb-2 pt-2">
            <Row>
              <Col sm="4" className="p-0">
                <div className="img-container embed-responsive">
                  <img
                    className="embed-responsive-item img-fit"
                    src={props.dummy.image}
                    alt={props.dummy.name}
                    onClick={toggleImageModal}
                  />
                </div>
              </Col>
              <Col sm="8">
                <NavLink to="/" className="float-right" onClick={onDelete}>
                  <FontAwesomeIcon icon="times" color="black" />
                </NavLink>
                <NavLink
                  to={`/edit/${props.dummy._id}`}
                  className="float-right mr-3"
                >
                  <FontAwesomeIcon icon="pen" color="black" />
                </NavLink>
                <h5 className="text-dark d-block mt-2 text-truncate">
                  <span title={props.dummy.name}>{props.dummy.name}</span>
                </h5>
                <hr className="m-1" />
                <Row
                  className="mb-0 text-center text-sm-left"
                  style={{ fontSize: '.9rem' }}
                >
                  <dt className="col-sm-4">Storage</dt>
                  <dd className="col-sm-8 mb-0">{props.dummy.storage}</dd>
                  <dt className="col-sm-4">Category</dt>
                  <dd className="col-sm-8 mb-0">{props.dummy.category}</dd>
                  <dt className="col-sm-4">Location</dt>
                  <dd className="col-sm-8 mb-0">
                    {props.dummy.location.country}
                    {props.dummy.location.area &&
                      ', ' + props.dummy.location.area}
                  </dd>
                  <dt className="col-sm-4">Period</dt>
                  <dd className="col-sm-8 mb-0">
                    {props.dummy.period || 'Unknown'}
                  </dd>
                </Row>
                <hr className="m-1" />
                {props.dummy.sizes && props.dummy.sizes.length !== 0 && (
                  <Row className="text-center">
                    {props.dummy.sizes.map((size, index) => (
                      <Col xs={12 / props.dummy.sizes.length} key={index}>
                        <Row>
                          <Col>
                            {size.len || '-'}x{size.wid || '-'}
                          </Col>
                        </Row>
                      </Col>
                    ))}
                  </Row>
                )}
              </Col>
            </Row>
          </CardBody>
          <CardFooter className="w-100 text-muted text-center p-1">
            {props.dummy.refId}
          </CardFooter>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Item;
