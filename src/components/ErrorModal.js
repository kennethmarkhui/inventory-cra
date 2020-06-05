import React, { useContext } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import ItemsContext from '../context/items/itemsContext';

const ErrorModal = (props) => {
  const itemsContext = useContext(ItemsContext);
  const { error, clearError } = itemsContext;
  return (
    <Modal isOpen={!!error} centered>
      <ModalHeader toggle={clearError}>
        An error occurred, please try again later.
      </ModalHeader>
      <ModalBody>{error}</ModalBody>
    </Modal>
  );
};

export default ErrorModal;
