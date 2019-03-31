import React, { Component } from "react";
import Artist from "./Artist";
import Tracks from "./Tracks";
import Search from "./Search";
import Header from "./Header";

const URL_ADDRESS = "https://spotify-api-wrapper.appspot.com";
const DEFAULT_ARTIST = "Coldplay";

class App extends Component {
  state = { artistData: null, topTracks: [], Notloaded: true };

  componentDidMount() {
    this.searchArtist(DEFAULT_ARTIST);
  }
  artistName = () => {
    if (this.state.Notloaded) {
      return DEFAULT_ARTIST;
    }
    return this.state.artistData.artist.name;
  };
  searchArtist = searchQuery => {
    // fetch artist data using searchQuery gotten from search component
    fetch(`${URL_ADDRESS}/artist/${searchQuery}`)
      .then(response => response.json())
      .then(res => {
        // check if the artist in searchQuery exist in the api
        if (res.artists.total > 0) {
          const artistData = res.artists.items[0];
          console.log(artistData);
          this.setState({ artistData: artistData, Notloaded: false });

          // fetches top track of artist based on artist id
          fetch(`${URL_ADDRESS}/artist/${artistData.id}/top-tracks`)
            .then(response => response.json())
            .then(res => this.setState({ topTracks: res.tracks }))
            .catch(err => alert(err.message));
        }
      })
      .catch(err => alert(err.message));
  };
  render() {
    const { artistData, topTracks, Notloaded } = this.state;

    return (
      <div>
        <Header />
        <h1>Musicaly</h1>
        <Search searchArtist={this.searchArtist} />
        <Artist artist={artistData} />
        <h1>{this.artistName} Top Ten Tracks</h1>
        <Tracks tracks={topTracks} />
      </div>
    );
  }
}

export default App;
