
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component {
  render() {
    let legenda = "Aluno da FATEC RUBENS LARA, atualmente cursa Sistemas para Internet, gosta da área de design e front-end";


    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', fontSize: 30, paddingTop: 15 }}>
          David de Jesus Bezerra
        </Text>

        <Image
          source={{
            uri:
              'https://avatars.githubusercontent.com/u/67380362?v=4'
          }}
          style={{ width: 250, height: 250, borderRadius: 250 }}
        />

        <Text style={{ color: '#333', fontSize: 16, margin: 15, textAlign: 'justify' }}>{legenda}</Text>
        <a target="_blank" href="https://github.com/ddjb77">Github</a>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcbfcb',
    alignItems: 'center',
    justifyContent: 'center',
  },


});

export default App