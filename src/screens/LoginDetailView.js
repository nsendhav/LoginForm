"use strict";

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {LoginDetailStyles} from '../styles/LoginDetailStyles'

class LoginDetailView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            email: this.props.email,
            phoneNumber: this.props.phoneNumber,
            DateOfBirth: this.props.DateOfBirth,
            Gender: this.props.Gender,
            avatarSource: this.props.avatarSource,
        };
    }

    render() {
        return (
            <View style={LoginDetailStyles.container}>
                <Image source={this.state.avatarSource} style={LoginDetailStyles.profilePhoto} />
                <Text style={LoginDetailStyles.heading}>
                    Name: {this.props.username}
                </Text>
                <Text style={LoginDetailStyles.heading}>
                    Email: {this.props.email}
                </Text>
                <Text style={LoginDetailStyles.heading}>
                    Phone Number: {this.props.phoneNumber}
                </Text>
                <Text style={LoginDetailStyles.heading}>
                    Date Of Birth: {this.props.DateOfBirth}
                </Text>
                <Text style={LoginDetailStyles.heading}>
                    Gender: {this.props.Gender}
                </Text>
            </View>
        );
    }
};

module.exports = LoginDetailView;
