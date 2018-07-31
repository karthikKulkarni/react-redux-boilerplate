import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight,
  ActionSheetIOS
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ReduxActions from "../../actions"; //Import your actions
import { Actions } from "react-native-router-flux";
import NewEventText from "./NewEventText";
import styles from "./EventsStyle";
import BackgroundView from "../Background/BackgroundView";

//Buttons for Action Sheet
const BUTTONS = ["Edit", "Delete", "Cancel"];

const CANCEL_INDEX = 2;

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.renderItem = this.renderItem.bind(this);
    this.showOptions = this.showOptions.bind(this);
  }

  componentDidMount() {
    this.props.getQuotes(); //call our action
  }

  showOptions(quote) {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: 1
      },
      buttonIndex => {
        if (buttonIndex === 0)
          Actions.editEvent({ quote: quote, edit: true, title: "Edit Event" });
        else if (buttonIndex === 1) this.props.deleteQuote(quote.id);
      }
    );
  }

  render() {
    setTimeout(() => this.refs.flatList.scrollToEnd(), 200);
    if (this.props.loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <BackgroundView />
          <ActivityIndicator animating={true} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <BackgroundView />
          <FlatList
            style={styles.listContainer}
            ref="flatList"
            data={this.props.quotes}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <NewEventText />
        </View>
      );
    }
  }

  renderItem({ item, index }) {
    return (
      <TouchableHighlight
        onPress={() => this.showOptions(item)}
        underlayColor="rgba(0,0,0,.2)"
      >
        <View style={styles.row}>
          <Text style={styles.quote}>{item.quote}</Text>
          <Text style={styles.author}>{item.author}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    loading: state.dataReducer.loading,
    quotes: state.dataReducer.quotes
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ReduxActions, dispatch);
}

//Connect everything
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
