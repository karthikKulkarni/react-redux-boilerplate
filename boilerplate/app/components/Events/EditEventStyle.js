import { StyleSheet } from "react-native";

export default StyleSheet.create({
  saveBtn: {
    width: windowWidth,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6B9EFA"
  },

  buttonText: {
    fontWeight: "500"
  },

  quote: {
    fontSize: 17,
    lineHeight: 38,
    fontFamily: "Helvetica Neue",
    color: "#333333",
    padding: 16,
    paddingLeft: 0,
    flex: 1,
    height: 200,
    marginBottom: 50,
    borderTopWidth: 1,
    borderColor: "rgba(212,211,211, 0.3)"
  },

  title: {
    fontWeight: "400",
    lineHeight: 22,
    fontSize: 16,
    fontFamily: "Helvetica Neue",
    height: 25 + 32,
    padding: 16,
    paddingLeft: 0
  }
});
