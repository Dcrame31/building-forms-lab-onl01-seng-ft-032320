import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux';


class BandsContainer extends Component {



  render() {

    this.bandList = this.props.bands.map((band, index) => {
      return <li key={index}>{band.name}</li>
    })

    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.bandList}
      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({ type: 'ADD_BAND', band: { name: band } })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
