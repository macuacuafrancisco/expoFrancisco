import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Platform } from 'expo-core';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { platform: Platform.OS }

    if (Platform.OS == 'ios' && Platform.OS>=9) {
      <Text> ios </Text>
    } else {
      <Text> android </Text>
    }
  }
  render() {
    return (
      <View style={styles.body} >
        <Text> Meu Sistema : {Platform.OS} </Text>
        <Text> Versao:{Platform.Version} </Text>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }


});