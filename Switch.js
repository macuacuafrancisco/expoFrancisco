import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      valor: false
    };
  }

  render() {
    return (
      <View style={styles.body}>
        <Switch value={this.state.valor} onValueChange={(v) => this.setState({ valor: v })} />
        <Text>{this.state.valor.toString()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1
  }
});
