import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import axios from 'axios';
import {styles} from './styles/';
import Feather from 'react-native-vector-icons/Feather';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      usuario: "",
      id: "",
      nome: "",
      repo: "",
      criado: "",
      followers: "",
      seguindo: "",
      imagem: "vazio",
    }
    this.consultar = this.consultar.bind(this);
    this.limpar = this.limpar.bind(this);
    this.inputUsuario = React.createRef();
  }

  consultar(){
    axios.get(`https://api.github.com/users/${this.state.usuario}`).then((resposta)=>{
      this.setState({
        id: resposta.data.id,
        nome: resposta.data.name,
        repo: resposta.data.public_repos,
        criado: resposta.data.created_at,
        followers: resposta.data.followers,
        seguindo: resposta.data.following,
        imagem: resposta.data.avatar_url
      })
      Keyboard.dismiss();
    })
    .catch(()=>{
     alert('Ocorreu um erro, verifique o nome do usuário e tente novamente')
    })
    
  }

  limpar(){
    this.setState({
      usuario: "",
      id: "",
      nome: "",
      repo: "",
      criado: "",
      followers: "",
      seguindo: "",
      imagem: "vazio",
    })
    this.inputUsuario.current.clear();
  }

  render(){
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textoPrincipal} >Perfil dos Devs</Text>
        </View>
        <View style={styles.viewImage} >
          <Image style={styles.imagemDev} source={{uri: this.state.imagem}} />
        </View>
        <View style={styles.viewEntrada} > 

          <TextInput ref={this.inputUsuario} onChangeText={(valor)=>{this.setState({usuario: valor})}} style={styles.inputPerfil}  />

          <TouchableOpacity onPress={this.consultar} style={styles.btnPesquisa} >
            <Feather name='search' size={25} color='#fff' />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.limpar} style={styles.btnLimpar} >
            <Feather name='x-square' size={25} color='#fff' />
          </TouchableOpacity>

        </View>

      <View style={styles.viewResultados} >
        <Text style={styles.dados} > ID: {this.state.id} </Text>
        <Text style={styles.dados} >Nome: {this.state.nome} </Text>
        <Text style={styles.dados} >Repositórios: {this.state.repo} </Text>
        <Text style={styles.dados} >Criado em: {this.state.criado} </Text>
        <Text style={styles.dados} >followers: {this.state.followers} </Text>
        <Text style={styles.dados} >Seguindo: {this.state.seguindo} </Text>
      </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textoPrincipal:{
        marginTop: 15,
        padding: 15,
        fontSize: 30,
        textAlign: 'center'
    },
    viewImage:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagemDev:{
        width:200,
        height:200,
        resizeMode: 'contain'
    },
    viewEntrada:{
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputPerfil:{
        borderWidth: 2,
        borderColor: '#222',
        flex: 9,
        height: 50,
        borderRadius: 3,
        marginRight: 4,
        paddingLeft: 10
    },
    btnPesquisa:{
        flex: 2,
        backgroundColor: '#ccc',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    btnLimpar:{
        flex: 2,
        backgroundColor: '#b99',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginLeft: 3
    },
    viewResultados:{
        padding: 20
    },
    dados:{
        padding: 10,
        marginTop: 6,
        backgroundColor: '#27ae60',
        borderRadius: 3,
        color: '#fff',
    }
})
