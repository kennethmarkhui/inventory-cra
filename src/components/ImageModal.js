import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

const ImageModal = ({ show, toggle, image, alt = 'PLACEHOLDER' }) => {
  return (
    <Modal isOpen={show} toggle={toggle} centered contentClassName="border-0">
      <ModalBody className="p-0">
        <img
          src={image}
          className="rounded img-fluid"
          alt={alt}
          onClick={toggle}
        />
      </ModalBody>
    </Modal>
  );
};

export default ImageModal;
