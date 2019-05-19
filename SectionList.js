import React from 'react';
import { StyleSheet, View, Text, SectionList } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listData: [
        {
          title: 'B', data: [
            { key: '0', nome: 'Francisco', idade: 90 }
          ]
        },
        {
          title: 'C', data: [
            { key: '1', nome: 'Alaba', idade: 90 },
            { key: '2', nome: 'Alex', idade: 90 },
            { key: '3', nome: 'Francisco', idade: 90 },
            { key: '4', nome: 'Mungoi', idade: 90 },
            { key: '5', nome: 'maoata', idade: 90 },
            { key: '6', nome: 'HuiBum', idade: 90 },
            { key: '7', nome: 'Zambiana', idade: 90 },
            { key: '8', nome: 'Seila', idade: 90 },
          ]
        },
        {
          title: 'D', data: [
            { key: '10', nome: 'Francisco', idade: 90 },
            { key: '11', nome: 'Francisco', idade: 90 },
            { key: '12', nome: 'Manut', idade: 90 },
            { key: '13', nome: 'Francisco', idade: 90 },
            { key: '14', nome: 'Huilo', idade: 90 },
            { key: '15', nome: 'Joaiu', idade: 90 },
            { key: '16', nome: 'Francisco', idade: 90 },
            { key: '17', nome: 'Francisco', idade: 90 },
            { key: '18', nome: 'Guilas', idade: 90 },

          ]
        },
      ]
    };
  }

  listSectionRender(section) {
    return (
      <Text style={styles.section}>
        {section.title}
      </Text>
    );
  }

  listRender(item) {
    return (
      <Text style={styles.item}>
        {item.nome} - {item.idade}
      </Text>
    );
  }


  render() {
    return (
      <View style={styles.body} >
        <SectionList
          sections={this.state.listData}
          renderItem={({ item }) => this.listRender(item)}
          renderSectionHeader={({ section }) => this.listSectionRender(section)} />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1
  },
  item: {
    fontSize: 18,
    height: 40,
    padding: 10
  },
  section: {
    fontSize: 14,
    backgroundColor: '#CCCCCC',
    padding: 10
  }

});