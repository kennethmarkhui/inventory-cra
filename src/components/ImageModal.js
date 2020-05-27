import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

const ImageModal = (props) => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle} centered>
      <ModalBody className="p-0">
        <img src={props.image} alt="dummy" style={{ width: '100%' }} />
      </ModalBody>
    </Modal>
  );
};

export default ImageModal;
