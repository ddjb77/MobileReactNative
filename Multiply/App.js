import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      
      num1: '', num2: '',
      resultado: ''
    };
    
    this.calcular = this.calcular.bind(this);
  }
 
  calcular(){
    if ( (this.state.n1 === '') || (this.state.n2 === '') ){
      alert('Digite os dois valores!')
      return;
    }
    var final = this.state.n1 * this.state.n2

    
    this.setState({resultado: 'Resultado: ' + final});
  }
 
  render(){
    return(
      
      <><View style={styles.view}>

        <Text style={styles.titulo}> Multiplicador de Dois Valores </Text>

        <TextInput
          keyboardType ='numeric' 
          style={styles.input}
          placeholder="Primeiro Valor "
          onChangeText={(texto) => this.setState({ n1: texto })} />

        <TextInput
          keyboardType ='numeric'
          style={styles.input}
          placeholder="Segundo Valor"
          onChangeText={(texto) => this.setState({ n2: texto })} />

        
      </View>
      <View style={styles.buttonCalc}>
      <Button color='#0f7' title="Calcular" onPress={this.calcular} />
      

     <Text style={styles.texto}> {this.state.resultado} </Text>

    </View></>
    );
  }
}
 
const styles = StyleSheet.create({
  view:{
    
    flex:1,
    flexDirection: 'column',
    justifyContent:'space-evenly',
    alignItems:'center',
    
    
  },

  titulo: {
    fontSize: 30,
    textAlign: 'center',
    margin: 40

  },

  buttonCalc:{
      width: '100%',
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center',
      
      
  },
  
  input:{
    height: 50,
    margin: 10,
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    
    

  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    margin: 20
  },
  

  
})
 
export default App;