import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ message }) => (
  <div className="d-flex flex-row justify-content-center">
    <h1 className="greeting">{message}</h1>
  </div>
);

Greeting.propTypes = {
  message: PropTypes.string
};
export default Greeting
