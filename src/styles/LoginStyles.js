

import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#696969",
    paddingVertical: 30,
  },
  inputWrap: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  input: {
    flex: 1,
    color: '#FFF',
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export {LoginStyles};
