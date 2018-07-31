import React, { Component } from "react";
import { View, Image } from "react-native";
import styles from "./BackgroundViewStyles";

const Images = {
  backgroundLight: require("./milkyway.jpg")
};

type Props = {
  scrollY: number
};

export default class BackgroundView extends Component<Props> {
  static defaultProps = {
    scrollY: 0
  };

  render() {
    const backgroundImage = Images.backgroundLight;

    return (
      <View style={[styles.backgroundView, { top: this.props.scrollY }]}>
        <Image source={backgroundImage} style={styles.backgroundImage} />
      </View>
    );
  }
}
