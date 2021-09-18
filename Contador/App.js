
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0,
    };
  }
 
 

remover()
    {
      this.setState
      ({contador: this.state.contador -1,})

    }



    adicionar(){
      this.setState
      ({contador: this.state.contador +1,})}
    
 
  render(){
    return(
      <View>
 
        <Text style={styles.header}>Contador</Text>

        <Text style={styles.texto}> {this.state.contador} </Text>

        <View style={styles.aligns}>
        <Pressable style={[styles.botao, {backgroundColor: '#f55'}]} onPress={this.remover.bind(this)}>
          <Text style={styles.texts}>Del</Text>
        </Pressable>

        <Pressable style={[styles.botao, {backgroundColor: '#0f7'}]} onPress={this.adicionar.bind(this)}>
          <Text style={styles.texts}>Add</Text>
        </Pressable>
 
        </View>

       
      </View>
    );
  }
}
 
const styles = StyleSheet.create({

  header:{
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 30
  },
  botao:{
    width:95,
    height: 50,
    borderRadius: 5,
    cursor: 'pointer',
    margin:10,
  },
  texts:{
    textAlign:'center',
    padding:10,
    fontSize: 20,
    color: '#fff'
  },
  texto:{
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 32,
    paddingTop: 30,
  },

  aligns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
   
  },

})
 
export default App;

