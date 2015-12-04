import React, { PropTypes } from 'react'

class Band extends React.Component {
  render () {
    return (
      <div>
        <h1>Band</h1>
        // <h2>{this.props.band.name}</h2>
        // <span>{this.props.band.image[0]}</span>
      </div>
    )
  }
}

export default Band;
