
import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get("window");

const LoginDetailStyles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
    },
    heading: {
        fontSize: 18,
        marginTop: 18,
        color: "#656565"
    },
    profilePhoto: {
      backgroundColor: "#ff69b4",
      marginLeft: width / 2 - 80,
      width: 100,
      height: 100,
    },
});

export {LoginDetailStyles};
