import React from 'react';
import { StyleSheet, View, Modal, Text, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };

    this.abrirModal = this.abrirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
  }

  abrirModal() {
    let s = this.state;
    s.modalVisible = true;
    this.setState(s);
  }

  fecharModal() {
    let s = this.state;
    s.modalVisible = false;
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.body}>

        <Modal animationType="slide" visible={this.state.modalVisible}>
          <View style={styles.modal} >
            <Text> Testando 1233344</Text>
            <Button title="Fechar Modal" onPress={this.fecharModal} />
          </View>
        </Modal>

        <Button title="Abrir Modal" onPress={this.abrirModal} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    flex: 1,
    backgroundColor: '#00FF00',
    paddingTop: 25,
    alignItems: 'flex-start'
  }
});
