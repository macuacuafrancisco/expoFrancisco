import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends React.Component {

  render() {
    return (

      <View style={styles.body} >

        <View style={styles.header}></View>

        <ScrollView pagingEnabled={true}>
          <View style={styles.quadrado1}></View>
          <View style={styles.quadrado2}></View>
          <View style={styles.quadrado1}></View>
          <View style={styles.quadrado2}></View>
          <View style={styles.quadrado1}></View>
          <View style={styles.quadrado2}></View>
          <View style={styles.quadrado1}></View>
          <View style={styles.quadrado2}></View>
        </ScrollView>

        <View style={styles.header}></View>

      </View >
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1
  },
  quadrado1: {
    backgroundColor: '#FF0000',
    height: 300
  },
  quadrado2: {
    backgroundColor: '#00FF00',
    height: 200
  },
  header: {
    backgroundColor: '#0000FF',
    height: 50
  }

});