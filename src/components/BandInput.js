// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state.name)

  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label></label>
            <input type="text" name="name" value={this.state.name} onChange={event => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
