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
import CreateQuestion from './app/create_question';
import InsertPin from './app/insert_pin';

class Test extends Component {
  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'second':
        return (<CreateQuestion navigator={navigator} title="first"/>);
    }
  }
  render() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        initialRoute={{component: InsertPin, title: 'Welcome to The Decider'}}
        renderScene={this.navigatorRenderScene}/>
    );
  }
}

AppRegistry.registerComponent('Test', () => Test);
const styles = StyleSheet.create({
  navigator: {flex: 1}
});
