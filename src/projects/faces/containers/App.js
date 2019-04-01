import React, { Component } from "react";
import "./App.css";
import Clarifai from "clarifai";
import Particles from "react-particles-js";
import Header from "../components/Header/Header";
import Headers from "../components/Headers";
import Logo from "../components/Logo/Logo";
import ImageLinkBar from "../components/ImageLinkBar/ImageLinkBar";
import Rank from "../components/Rank/Rank";
import ImageResult from "../components/ImageResult/ImageResult";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
const app = new Clarifai.App({
  apiKey: "f50bf0cf5e354418b72276417784bae4"
});
class App extends Component {
  state = {
    imageUrl: "",
    box: {}
  };

  onImageUrlChange = event => {
    this.setState({ imageUrl: event.target.value });
    console.log(event.target.value);
  };
  calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  displayFaceBox = box => {
    console.log(box);
    this.setState({ box: box });
  };
  onButtonClick = () => {
    app.models
      .predict("a403429f2ddf4b49b307e318f00e528b", this.state.imageUrl)
      .then(response => {
        // do something with response
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
    // app.models
    //   .initModel({
    //     id: Clarifai.GENERAL_MODEL,
    //     version: "aa7f35c01e0642fda5cf400f543e7c40"
    //   })
    //   .then(generalModel => {
    //     return generalModel.predict(this.state.imageUrl);
    //   })
    //   .then(response => {
    //     const concepts = response["outputs"][0]["data"]["concepts"][0];
    //     console.log(concepts);
    //   });
  };
  render() {
    return (
      <div className="App">
        <Headers />
        <Particles className="particles" params={particlesOptions} />
        <Header />
        <Logo />
        <ImageLinkBar
          onImageUrlChange={this.onImageUrlChange}
          onButtonClick={this.onButtonClick}
        />
        <ImageResult imageURL={this.state.imageUrl} box={this.state.box} />
      </div>
    );
  }
}

export default App;
