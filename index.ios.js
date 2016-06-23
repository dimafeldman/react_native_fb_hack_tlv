/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Navigator,
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
      case 'initialPage':
        return (<InitialPage navigator={navigator} title="Home page"/>);
      case 'createQuestion':
        return (<CreateQuestion navigator={navigator} title="Create Question"/>);
      case 'insertPin':
        return (<InsertPin navigator={navigator} title="Insert Pin"/>);
    }
  }
  render() {
    return (
      <Navigator
        style={styles.navigator}
        initialRoute={{id: 'initialPage'}}
        renderScene={this.navigatorRenderScene}/>
    );
  }
}

AppRegistry.registerComponent('Test', () => Test);
const styles = StyleSheet.create({
  navigator: {flex: 1}
});
