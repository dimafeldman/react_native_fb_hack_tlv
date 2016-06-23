import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Button } from 'react-native-material-design';

export default class CreateQuestion extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Write your question
        </Text>
        <View>

        </View>
      </View>
    )
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
