import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    text: state.text
  }
}

class ConnectedBoxTwo extends Component {
  render() {
  	var loop = this.props.text.map((item, i) => {
  		return <h3>{item}</h3>
  	})

    return (
      <div className="box-two">
        <h2>Box 2</h2>
        <h3>{loop}</h3>
      </div>
    );
  }
}

const BoxTwo = connect(
  mapStateToProps,
  null
)(ConnectedBoxTwo)

export default BoxTwo;