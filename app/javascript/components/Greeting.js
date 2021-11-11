import React from "react"
import PropTypes from "prop-types"
const Greeting = ({ message }) => (
  <React.Fragment>
    <h1>{message}</h1>
  </React.Fragment>
);

Greeting.propTypes = {
  message: PropTypes.string
};
export default Greeting
