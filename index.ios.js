/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { Button } from 'react-native-material-design';
import React, { Component } from 'react';
import {
  NavigatorIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import InitialPage from './app/inital_page';

class Test extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        initialRoute={{component: InitialPage, title: 'HomePage'}}/>
    );
  }
}

const styles = StyleSheet.create({

  navigator: {flex: 1},
  container: {
    flex: 1
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
