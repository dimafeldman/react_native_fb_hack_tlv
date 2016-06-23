import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Button } from 'react-native-material-design';

export default class InitialPage extends Component {

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
