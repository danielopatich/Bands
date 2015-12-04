import React, { PropTypes } from 'react'

import Band from './band';

class BandList extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    let bands = this.props.bands.map( band => {
      return(<Band key={band.id}
                  band={band}/>)
    })
    return(
      <div>
        <h2>Nickelbackers</h2>
        {bands}
      </div>
    )
  }
}

export default BandList;
