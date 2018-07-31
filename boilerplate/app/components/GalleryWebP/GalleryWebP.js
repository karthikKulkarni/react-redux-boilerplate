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
          src: require("./a1.jpg")
        },
        {
          label: "bridge",
          src: require("./a2.jpeg")
        },
        {
          label: "fields",
          src: require("./a3.jpg")
        },
        {
          label: "mountains",
          src: require("./a4.jpg")
        },
        {
          label: "sunflower",
          src: require("./a5.jpg")
        },
        {
          label: "sunset",
          src: require("./a6.jpg")
        },
        {
          label: "lake",
          src: require("./a7.jpg")
        },
        {
          label: "nature",
          src: require("./a8.jpeg")
        },
        {
          label: "pink",
          src: require("./a9.jpg")
        },
        {
          label: "rails",
          src: require("./a10.jpeg")
        },
        {
          label: "beach",
          src: require("./a11.jpeg")
        },
        {
          label: "bridge",
          src: require("./a12.jpeg")
        },
        {
          label: "fields",
          src: require("./a13.jpg")
        },
        {
          label: "mountains",
          src: require("./a14.jpg")
        },
        {
          label: "sunflower",
          src: require("./a15.jpeg")
        },
        {
          label: "sunset",
          src: require("./a16.jpeg")
        },
        {
          label: "lake",
          src: require("./a17.jpeg")
        },
        {
          label: "nature",
          src: require("./a18.jpeg")
        },
        {
          label: "pink",
          src: require("./a19.jpeg")
        },
        {
          label: "rails",
          src: require("./a20.jpeg")
        },
        {
          label: "sunflower",
          src: require("./a21.jpg")
        },
        {
          label: "sunset",
          src: require("./a22.jpeg")
        },
        {
          label: "lake",
          src: require("./a23.jpeg")
        },
        {
          label: "nature",
          src: require("./a24.jpg")
        },
        {
          label: "pink",
          src: require("./a25.jpg")
        },
        {
          label: "beach",
          src: require("./a1.jpg")
        },
        {
          label: "bridge",
          src: require("./a2.jpeg")
        },
        {
          label: "fields",
          src: require("./a3.jpg")
        },
        {
          label: "mountains",
          src: require("./a4.jpg")
        },
        {
          label: "sunflower",
          src: require("./a5.jpg")
        },
        {
          label: "sunset",
          src: require("./a6.jpg")
        },
        {
          label: "lake",
          src: require("./a7.jpg")
        },
        {
          label: "nature",
          src: require("./a8.jpeg")
        },
        {
          label: "pink",
          src: require("./a9.jpg")
        },
        {
          label: "rails",
          src: require("./a10.jpeg")
        },
        {
          label: "beach",
          src: require("./a11.jpeg")
        },
        {
          label: "bridge",
          src: require("./a12.jpeg")
        },
        {
          label: "fields",
          src: require("./a13.jpg")
        },
        {
          label: "mountains",
          src: require("./a14.jpg")
        },
        {
          label: "sunflower",
          src: require("./a15.jpeg")
        },
        {
          label: "sunset",
          src: require("./a16.jpeg")
        },
        {
          label: "lake",
          src: require("./a17.jpeg")
        },
        {
          label: "nature",
          src: require("./a18.jpeg")
        },
        {
          label: "pink",
          src: require("./a19.jpeg")
        },
        {
          label: "rails",
          src: require("./a20.jpeg")
        },
        {
          label: "sunflower",
          src: require("./a21.jpg")
        },
        {
          label: "sunset",
          src: require("./a22.jpeg")
        },
        {
          label: "lake",
          src: require("./a23.jpeg")
        },
        {
          label: "nature",
          src: require("./a24.jpg")
        },
        {
          label: "pink",
          src: require("./a25.jpg")
        },
        {
          label: "beach",
          src: require("./a1.jpg")
        },
        {
          label: "bridge",
          src: require("./a2.jpeg")
        },
        {
          label: "fields",
          src: require("./a3.jpg")
        },
        {
          label: "mountains",
          src: require("./a4.jpg")
        },
        {
          label: "sunflower",
          src: require("./a5.jpg")
        },
        {
          label: "sunset",
          src: require("./a6.jpg")
        },
        {
          label: "lake",
          src: require("./a7.jpg")
        },
        {
          label: "nature",
          src: require("./a8.jpeg")
        },
        {
          label: "pink",
          src: require("./a9.jpg")
        },
        {
          label: "rails",
          src: require("./a10.jpeg")
        },
        {
          label: "beach",
          src: require("./a11.jpeg")
        },
        {
          label: "bridge",
          src: require("./a12.jpeg")
        },
        {
          label: "fields",
          src: require("./a13.jpg")
        },
        {
          label: "mountains",
          src: require("./a14.jpg")
        },
        {
          label: "sunflower",
          src: require("./a15.jpeg")
        },
        {
          label: "sunset",
          src: require("./a16.jpeg")
        },
        {
          label: "lake",
          src: require("./a17.jpeg")
        },
        {
          label: "nature",
          src: require("./a18.jpeg")
        },
        {
          label: "pink",
          src: require("./a19.jpeg")
        },
        {
          label: "rails",
          src: require("./a20.jpeg")
        },
        {
          label: "sunflower",
          src: require("./a21.jpg")
        },
        {
          label: "sunset",
          src: require("./a22.jpeg")
        },
        {
          label: "lake",
          src: require("./a23.jpeg")
        },
        {
          label: "nature",
          src: require("./a24.jpg")
        },
        {
          label: "pink",
          src: require("./a25.jpg")
        },
        {
          label: "beach",
          src: require("./a1.jpg")
        },
        {
          label: "bridge",
          src: require("./a2.jpeg")
        }
      ]
    };
  }
}
