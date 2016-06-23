/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { Button } from 'react-native-material-design';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          The decider
        </Text>
        <View>
            <View>
                <Button text='Ask a question' raised={true} theme="dark" />
            </View>
            <View>
                <Button text='Vote' raised={true} theme="dark" />
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Test', () => Test);
