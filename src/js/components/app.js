import React from 'react';
import { Link } from 'react-router';
import jQuery from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: []
    };
    this.handleArtistData = this.handleArtistData.bind(this);
  }

  handleArtistData(data) {
    this.setState({artist: data.results})
  }

  componentDidMount() {
    jQuery.ajax({
      url: 'https://api.spotify.com/v1/search?q=Nickelback&type=artist',
      success: this.handleArtistData
    });
  }


  render() {
    let artistChildren = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {artist: this.state.artist})
    });
    return (
      <div className="pageWrap">
        <header className="head">
          <nav>
            <ul className="ulNav">
              <Link to="/">Home</Link>
              <Link to="login">Login</Link>
              <Link to="register">Register</Link>
            </ul>
          </nav>
        </header>
        <main>
          {this.props.artistChildren}
        </main>
      </div>
    )
  }
}

export default App;
