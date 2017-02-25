import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {LoginStyles}     from '../styles/LoginStyles'
const { width, height } = Dimensions.get("window");

export default class LoginScreen extends Component {
  render() {
    return (
      <ScrollView style={LoginStyles.container}>
          <View style={LoginStyles.inputWrap}>
              <TextInput
              placeholderTextColor="#FFF"
              placeholder="Name"
              style={LoginStyles.input}
              />
          </View>
          <View style={LoginStyles.inputWrap}>
              <TextInput
              placeholderTextColor="#FFF"
              placeholder="Email"
              style={LoginStyles.input}
              />
          </View>
          <View style={LoginStyles.inputWrap }>
              <TextInput
              placeholderTextColor="#FFF"
              placeholder="Phone Number"
              style={LoginStyles.input}
              />
          </View>
          <View style={LoginStyles.inputWrap}>
              <TextInput
              placeholderTextColor="#FFF"
              placeholder="Date of Birth (dd/mm/yy)"
              style={LoginStyles.input}
              />
          </View>
          <View style={LoginStyles.inputWrap}>
              <TextInput
              placeholderTextColor="#FFF"
              placeholder="Gender"
              style={LoginStyles.input}
              />
          </View>
          <TouchableOpacity activeOpacity={.5}>
            <View style={LoginStyles.button } backgroundColor="#ff69b4">
              <Text style={LoginStyles.buttonText}>Photo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}>
            <View style={LoginStyles.button}>
              <Text style={LoginStyles.buttonText}>Submit</Text>
            </View>
          </TouchableOpacity>
      </ScrollView>
    );
  }
}
