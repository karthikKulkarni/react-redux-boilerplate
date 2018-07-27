import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

class NewEventTextComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.item1}
          placeholder={"New msg"}
          autoFocus={true}
        />
        <View />
        <View />
        <TouchableOpacity style={styles.item2}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//Connect everything
export default connect()(NewEventTextComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  item1: {
    width: 50,
    height: 50,
    flexGrow: 1,
    backgroundColor: "#EE2C38"
  },
  item2: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    flexGrow: 0.2,
    backgroundColor: "#FAA030"
  }
});
