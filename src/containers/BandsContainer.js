import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';
import { connect } from 'react-redux';


class BandsContainer extends Component {
  render() {
    return(
      <ul>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand}/>
      </ul>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })



const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({type: "ADD_BAND", name: name}),
  deleteBand: id => dispatch({type: "DELETE_BAND", id})
  })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
