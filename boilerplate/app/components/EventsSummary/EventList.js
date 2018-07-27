import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";

class EventList extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

//Connect everything
export default connect()(EventList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  }
});
