import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      flatData: [
        { key: "1", nome: 'Francico', idade: 39 },
        { key: "2", nome: 'Gonsal', idade: 57 },
        { key: "3", nome: 'Amrio', idade: 78 },
        { key: "4", nome: 'Cuasy', idade: 78 },
      ]
    };
  }

  flatRender(item) {
    return (
      <View style={styles.flatItem}>
        <Text style={styles.flatNome}> {item.nome}   </Text>
        <Text style={styles.flatIdade}>  {item.idade} Anos </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.body} >
        <FlatList style={styles.flatList} data={this.state.flatData}
          renderItem={({ item }) => this.flatRender(item)} />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex:1
  },
  flatList: {
   // backgroundColor: '#0000FF',
  },
  flatItem: {
    padding: 10,
    borderWidth:1,
    borderColor:'#000000'
  },
  flatNome: {
    fontSize: 20
  },
  flatIdade: {
    fontSize: 14
  },
 
  

});