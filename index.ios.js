 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View
 } from 'react-native';
 import LoginView from "./src/screens/LoginView";
 import SignupView from "./src/screens/LoginView";

 export default class screens extends Component {
   render() {
     return (
       <View style={styles.container}>
         <SignupView />
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
   }
 });

 AppRegistry.registerComponent('LoginForm', () => screens);
