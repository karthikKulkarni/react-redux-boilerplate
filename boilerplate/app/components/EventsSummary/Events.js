import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import EventList from "./EventList";
import NewEventTextComponent from "./NewEventTextComponent";

class Events extends Component {
  render() {
    return (
      <View>
        <EventList />
        <NewEventTextComponent />
      </View>
    );
  }
}

//Connect everything
export default connect()(Events);
