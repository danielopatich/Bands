import React from 'react';
import { Link } from 'react-router';
import jQuery from 'jquery';

{/*import BandList from './bandList';*/}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: [],
      image: [],
      followers: []
    };
    this.handleArtistData = this.handleArtistData.bind(this);
  }

  handleArtistData(data) {
    let bands = data.artists.items;

    this.setState({
            artist: bands[0].name,
             image: bands[0].images[0].url,
         followers: bands[0].followers.total,
    });
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
              <Link className="options_1" to="/">Home</Link>
              <Link className="options_2" to="/login">Login</Link>
              <Link className="options_3" to="/register">Register</Link>
            </ul>
          </nav>
        </header>
        <main>
          {/*<BandList artist={this.state.artist}
                   image={this.state.image}
               followers={this.state.followers}/>*/}
          {artistChildren}
        </main>
      </div>
    )
  }
}

export default App;
