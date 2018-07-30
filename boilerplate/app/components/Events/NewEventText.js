import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { addQuoteAction } from "../../actions";
import { Actions } from "react-native-router-flux";
import KeyboardSpacer from "react-native-keyboard-spacer";
import styles from "./NewEventTextStyle";
import { formatTimeDateMed } from "../../utils/DateTimeFormatting";
class NewEventText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      quote: ""
    };

    this.generateID = this.generateID.bind(this);
    this.addQuote = this.addQuote.bind(this);
  }

  generateID() {
    let d = new Date().getTime();
    let id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
      c
    ) {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(5);
    });

    return id;
  }

  addQuote() {
    if (!this.state.author == "" && !this.state.quote == "") {
      let id = this.generateID();
      let quote = {
        id: id,
        author: this.state.author,
        quote: this.state.quote
      };
      this.props.addQuoteAction(quote);
      this.setState({ quote: "", author: "" });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          multiline={true}
          onChangeText={text =>
            this.setState({
              quote: text,
              author: formatTimeDateMed(new Date())
            })
          }
          placeholder={"Enter Quote"}
          style={styles.item1}
          autoFocus={true}
          value={this.state.quote}
        />
        <View />
        <View />
        <TouchableOpacity style={styles.item2} onPress={this.addQuote}>
          <Text>Save</Text>
        </TouchableOpacity>
        <KeyboardSpacer />
      </View>
    );
  }
}

//Connect everything
export default connect(
  null,
  { addQuoteAction }
)(NewEventText);
