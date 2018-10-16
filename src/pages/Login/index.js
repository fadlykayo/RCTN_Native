import React, { Component } from "react";
import {
  Button,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import styles from './style';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  handleChangeEmail(text) {
    this.setState({
      email: text
    });
  }
  handleChangePassword(text) {
    this.setState({
      password: text
    });
  }
  handleLoginPress() {
    alert(`Your email: ${this.state.email}. And your password: ${this.state.password}`);
  }
  render() {
    return (
      <View style={styles.container} onPress={Keyboard.dismiss}>
        <TextInput
          onChangeText={(email) => this.setState({email})}
          placeholder={"user@email.com"}
          style={styles.textInput}
        />
        <TextInput
          onChangeText={(e) => this.handleChangePassword(e)}
          secureTextEntry={true}
          placeholder={"Your super secret password"}
          style={styles.textInput}
        />
        <TouchableOpacity
          style={{borderWidth: 1, borderColor: 'green', width: 120, height: 60, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => this.handleLoginPress()}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
