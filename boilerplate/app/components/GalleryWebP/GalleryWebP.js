import React, { Component } from "react";

import { View, ScrollView, Image } from "react-native";
import ImageResizeMode from "react-native/Libraries/Image/ImageResizeMode";
import styles from "./GalleryWebPStyles";

export default class GalleryWebP extends Component {
  renderGallery() {
    var count = 0;
    var previous_item = "";
    var pairs = this.getPairsArray(this.state.photos);
    return pairs.map((item, index) => {
      return (
        <View style={styles.item} key={index}>
          <Image
            resizeMode={ImageResizeMode.stretch}
            style={styles.photo}
            source={item[0].src}
          />
          <Image
            resizeMode={ImageResizeMode.stretch}
            style={styles.photo}
            source={item[1].src}
          />
        </View>
      );
    });
  }

  getPairsArray(photos) {
    var pairs_r = [];
    var pairs = [];
    var count = 0;
    photos.forEach(item => {
      count += 1;
      pairs.push(item);
      if (count == 2) {
        pairs_r.push(pairs);
        count = 0;
        pairs = [];
      }
    });
    return pairs_r;
  }

  render() {
    // setTimeout(() => this.refs.scrollViewList.scrollToEnd());

    return (
      <View style={styles.container}>
        <ScrollView ref="scrollViewList" style={styles.gallery}>
          {this.renderGallery()}
        </ScrollView>
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      photos: [
        {
          label: "beach",
          src: require("./a1.webp")
        },
        {
          label: "bridge",
          src: require("./a2.webp")
        },
        {
          label: "fields",
          src: require("./a3.webp")
        },
        {
          label: "sunflower",
          src: require("./a5.webp")
        },
        {
          label: "sunset",
          src: require("./a6.webp")
        },
        {
          label: "lake",
          src: require("./a7.webp")
        },
        {
          label: "nature",
          src: require("./a8.webp")
        },
        {
          label: "pink",
          src: require("./a9.webp")
        },
        {
          label: "beach",
          src: require("./a11.webp")
        },
        {
          label: "fields",
          src: require("./a13.webp")
        },
        {
          label: "mountains",
          src: require("./a14.webp")
        },
        {
          label: "sunflower",
          src: require("./a21.webp")
        },
        {
          label: "nature",
          src: require("./a24.webp")
        },
        {
          label: "pink",
          src: require("./a25.webp")
        }
      ]
    };
  }
}
