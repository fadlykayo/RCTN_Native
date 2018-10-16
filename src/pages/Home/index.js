import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Actions } from 'react-native-router-flux';

import styles from './style';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{borderWidth: 1, padding: 10, marginBottom: 10}} onPress={Actions.login} >
          <Text>Back to Login</Text>
        </TouchableOpacity>
        <Text>Ini Home</Text>
      </View>
    );
  }
}
