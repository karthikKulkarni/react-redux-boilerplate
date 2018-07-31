import React, { Component } from "react";
import { View, AsyncStorage } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import Events from "./components/Events/Events";

import Gallery from "./components/Gallery/Gallery";
import GalleryWebP from "./components/GalleryWebP/GalleryWebP";
import EditEvent from "./components/Events/EditEvent";
import Data from "./quotes.json";
import { connect } from "react-redux";
import { getQuotes } from "./actions";

class Main extends Component {
  componentDidMount() {
    var _this = this;
    //Check if any data exist
    AsyncStorage.getItem("data", (err, data) => {
      //if it doesn't exist, extract from json file
      //save the initial data in Async
      if (data === null) {
        AsyncStorage.setItem("data", JSON.stringify(Data.quotes));
        _this.props.getQuotes();
      }
    });
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="gallery" component={Gallery} title="Gallery" />
          <Scene
            key="galleryWebP"
            component={GalleryWebP}
            title="Gallery WebP"
          />
          <Scene key="events" component={Events} title="Events" initial />
          <Scene key="editEvent" component={EditEvent} title="Edit Event" />
        </Scene>
      </Router>
    );
  }
}

//Connect everything
export default connect(
  null,
  { getQuotes }
)(Main);
