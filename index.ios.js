/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
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
        initialRoute={{component: InitialPage, title: 'Welcome to The Decider'}}/>
    );
  }
}

AppRegistry.registerComponent('Test', () => Test);
const styles = StyleSheet.create({

  navigator: {flex: 1}
});
