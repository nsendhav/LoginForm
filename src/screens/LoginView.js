"use strict";

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
var LoginDetailView = require("./LoginDetailView");
import {LoginStyles} from '../styles/LoginStyles'
const { width, height } = Dimensions.get("window");

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            phoneNumber: "",
            DateOfBirth: "",
            Gender: "",
        };
    }

    render() {
      return (
        <ScrollView style={LoginStyles.container}>
            <View style={LoginStyles.inputWrap}>
                <TextInput
                placeholder="Name"
                onChange={(event) => this.setState({username: event.nativeEvent.text})}
                placeholderTextColor="#FFF"
                style={LoginStyles.input}
                />
            </View>
            <View style={LoginStyles.inputWrap}>
                <TextInput
                placeholder="Email"
                onChange={(event) => this.setState({email: event.nativeEvent.text})}
                placeholderTextColor="#FFF"
                style={LoginStyles.input}
                />
            </View>
            <View style={LoginStyles.inputWrap }>
                <TextInput
                keyboardType={'phone-pad'}
                placeholder="Phone Number"
                onChange={(event) => this.setState({phoneNumber: event.nativeEvent.text})}
                placeholderTextColor="#FFF"
                style={LoginStyles.input}
                />
            </View>
            <View style={LoginStyles.inputWrap}>
                <TextInput
                placeholder="Date of Birth (dd/mm/yy)"
                onChange={(event) => this.setState({DateOfBirth: event.nativeEvent.text})}
                placeholderTextColor="#FFF"
                style={LoginStyles.input}
                />
            </View>
            <View style={LoginStyles.inputWrap}>
                <TextInput
                placeholder="Gender"
                onChange={(event) => this.setState({Gender: event.nativeEvent.text})}
                placeholderTextColor="#FFF"
                style={LoginStyles.input}
                />
            </View>
            <TouchableHighlight onPress={(this.onSubmitPressed.bind(this))} style={LoginStyles.buttonPhoto} backgroundColor="#ff69b4">
              <Text style={LoginStyles.buttonText}>Photo</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={(this.onSubmitPressed.bind(this))} style={LoginStyles.button}>
              <Text style={LoginStyles.buttonText}>Submit</Text>
            </TouchableHighlight>
        </ScrollView>
      );
    }
    onSubmitPressed() {
        this.props.navigator.push({
            title: "Details",
            component: LoginDetailView,
            passProps: {username: this.state.username, email: this.state.email, phoneNumber: this.state.phoneNumber, DateOfBirth: this.state.DateOfBirth, Gender: this.state.Gender},
        });
    }
};

var styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: "stretch"
    },
    title: {
        fontSize: 18,
        marginBottom: 10
    },
    formInput: {
        height: 36,
        padding: 10,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        flex: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#555555",
        borderRadius: 8,
        color: "#555555"
    },
    button: {
        height: 36,
        flex: 1,
        backgroundColor: "#555555",
        borderColor: "#555555",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffff",
        alignSelf: "center"
    },
});

module.exports = LoginView;
