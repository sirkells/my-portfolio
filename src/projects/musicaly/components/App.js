import React, { Component } from "react";
import Artist from "./Artist";
import Tracks from "./Tracks";
import Search from "./Search";
import Header from "./Header";

const URL_ADDRESS = "https://spotify-api-wrapper.appspot.com";
const DEFAULT_ARTIST = "Coldplay";
const Background =
  "http://wallpoper.com/images/00/24/09/32/abstract-music_00240932.jpg";

class App extends Component {
  state = { artistData: null, topTracks: [], notLoaded: true };

  componentDidMount() {
    this.searchArtist(DEFAULT_ARTIST);
  }
  searchArtist = searchQuery => {
    // fetch artist data using searchQuery gotten from search component
    fetch(`${URL_ADDRESS}/artist/${searchQuery}`)
      .then(response => response.json())
      .then(res => {
        // check if the artist in searchQuery exist in the api
        if (res.artists.total > 0) {
          const artistData = res.artists.items[0];
          this.setState({ artistData: artistData, notLoaded: false });

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
    const { artistData, topTracks, notLoaded } = this.state;
    return (
      <div
        style={{
          backgroundImage: `url(${
            notLoaded ? Background : artistData.images[0].url
          })`,
          backgroundSize: "cover",
          overflow: "hidden"
        }}
      >
        <Header />

        <Search searchArtist={this.searchArtist} />
        <Artist artist={artistData} />
        <Tracks tracks={topTracks} />
      </div>
    );
  }
}

export default App;
