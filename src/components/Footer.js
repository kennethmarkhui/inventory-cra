import React from 'react';

const Footer = () => {
  return (
    <footer className="container mt-5" style={{ textAlign: 'center' }}>
      <p>Copyright ©{new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
