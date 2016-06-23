import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { Button } from 'react-native-material-design';

export default class CreateQuestion extends Component {

  submitQuestion() {
    // submit question goes here
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Write your question
        </Text>
        <View style={styles.basicPage}>
          <TextInput
              style={styles.basicInput}
              placeholder="Write your question here"
            />
          <TextInput
              style={styles.basicInput}
              placeholder="Option 1"
            />
          <TextInput
              style={styles.basicInput}
              placeholder="Option 1"
            />
          <TextInput
              style={styles.basicInput}
              placeholder="Option 1"
            />
          <TextInput
              style={styles.basicInput}
              placeholder="Option 1"
            />

            <Button text='Submit Question' onPress={this.submitQuestion.bind(this)} raised={true} theme="dark" />
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
  },
  basicPage: {
    marginLeft: 20,
    marginRight: 20
  },
  basicInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15
  }
});
