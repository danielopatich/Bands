import React, { PropTypes } from 'react'

class band extends React.Component {
  render () {
    return (
      <li>{this.props.artist}</li>
    )
  }
}

export default band;
