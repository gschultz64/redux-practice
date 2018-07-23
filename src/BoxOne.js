import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addText} from './actions/index';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = dispatch => {
  return {
    addText: (text) => {
      dispatch(addText(text))
    }
  }
}

class ConnectedBoxOne extends Component {
  constructor(props) {
  	super(props)
		this.state = {
			input: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
  }

	handleChange(e) {
		this.setState({
			input: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.addText(this.state.input)
		console.log(this.state.input)
	}

  render() {
    return (
      <div className="box-one">
        <h2>Box 1</h2>
        <form onSubmit={this.handleSubmit}>
        	<input type="text" onChange={this.handleChange}></input>
        	<button type="submit">Add Text!</button><br/><br/>
        </form>
      </div>
    );
  }
}

const BoxOne = connect(
  null,
  mapDispatchToProps
)(ConnectedBoxOne)

export default BoxOne;