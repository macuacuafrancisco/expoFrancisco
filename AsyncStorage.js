import React from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };

    AsyncStorage.getItem("nome").then((value) => {
      this.setState({ nome: value });
    });

    this.setNome = this.setNome.bind(this);
  }

  setNome(nome) {
    let s = this.state;
    s.nome = nome;
    this.setState(s);

    AsyncStorage.setItem("nome", nome);
  }
  render() {
    return (
      <View style={styles.body} >
        <TextInput style={styles.input}
          value={this.state.nome}
          onChangeText={(text) => this.setNome(text)}>

        </TextInput>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    justifyContent:'center',
    alignItems:'center',

  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    fontSize: 16,
   }


});