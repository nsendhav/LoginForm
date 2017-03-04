"use strict";

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Button,
  Image,
  avatarSource,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
var ImagePicker = require('react-native-image-picker');
var LoginDetailView = require("./LoginDetailView");
import {LoginStyles} from '../styles/LoginStyles'

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            phoneNumber: "",
            DateOfBirth: "",
            Gender: "",
            avatarSource,
        };
    }

    render() {
      return (
        <ScrollView style={LoginStyles.container}>
            <TouchableHighlight onPress={(this.onPhotoPressed.bind(this))} style={LoginStyles.buttonPhoto} backgroundColor="#ff69b4">
            <Image source={this.state.avatarSource} style={LoginStyles.imagePhoto} />
            </TouchableHighlight>
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
            passProps: {username: this.state.username, email: this.state.email, phoneNumber: this.state.phoneNumber, DateOfBirth: this.state.DateOfBirth, Gender: this.state.Gender, avatarSource: this.state.avatarSource},
        });
    }

    onPhotoPressed() {
       ImagePicker.showImagePicker(null, (response) => {
       if (response.didCancel) {
        console.log('User cancelled image picker');
       }
       else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
       }
       else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
       }
      else {
        let source = { uri: response.uri };
        this.setState({
          avatarSource: source
        });
       }
     });
    }
};

module.exports = LoginView;
