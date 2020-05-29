import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

const ImageModal = (props) => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle} centered>
      <ModalBody className="p-0">
        <img src={props.image} className="rounded img-fluid" alt="dummy" />
      </ModalBody>
    </Modal>
  );
};

export default ImageModal;
