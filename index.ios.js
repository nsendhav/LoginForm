
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';
var LoginView = require("./src/screens/LoginView");
import {LoginStyles} from './src//styles/LoginStyles'

var ReactProject = React.createClass({
    render: function() {
        return (
            <NavigatorIOS
                style={LoginStyles.NavigationContainer}
                initialRoute={{
                title: "Login Form",
                component: LoginView,
            }} />
        );
    }
});

AppRegistry.registerComponent('LoginForm', () => ReactProject);
