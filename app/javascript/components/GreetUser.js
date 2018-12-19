import React from "react"
import PropTypes from "prop-types"

class GreetUser extends React.Component {
  render () {
    return (
      <div>
        <h1 className="has-text-centered is-size-1 has-text-link"> Hello {this.props.name} </h1>
      </div>
    );
  }
}

GreetUser.propTypes = {
  name: PropTypes.string
};

export default GreetUser
