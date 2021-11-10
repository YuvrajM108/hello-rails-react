import React from "react"
import PropTypes from "prop-types"
class Greeting extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>{this.props.message}</h1>
      </React.Fragment>
    );
  }
}

Greeting.propTypes = {
  message: PropTypes.string
};
export default Greeting
