import React, { useContext } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

import ItemsContext from '../context/items/itemsContext';

const ErrorModal = (props) => {
  const itemsContext = useContext(ItemsContext);
  const { error, clearError } = itemsContext;
  return (
    <Modal isOpen={!!error} centered>
      <ModalHeader toggle={clearError}>
        An error occurred, please try again later.
      </ModalHeader>
      <ModalBody>
        {Array.isArray(error) ? (
          <ListGroup flush>
            {error.map((err, index) => (
              <ListGroupItem key={index}>{err}</ListGroupItem>
            ))}
          </ListGroup>
        ) : (
          <React.Fragment>{error}</React.Fragment>
        )}
      </ModalBody>
    </Modal>
  );
};

export default ErrorModal;
