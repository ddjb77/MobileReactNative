import React, { useEffect, useState } from "react";
import NumericInput from "react-native-numeric-input";
import Feather from 'react-native-vector-icons/Feather';
import {
  
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  FlatList,
  StatusBar,
  Keyboard,
  Button
  
} from "react-native";
import * as SQLite from "expo-sqlite";
import { MaterialIcons } from "@expo/vector-icons";



const App =() => {
  //informações banco de dados//
  const db = SQLite.openDatabase("listaCompras.db");

  //setStates e useStates produtos//
  const [produto, setProduto] = useState("");
  const [produtos, setProdutos] = useState([]);

  const [contarP, setContarP] = useState(0);

  const createTables = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS produto (id INTEGER PRIMARY KEY AUTOINCREMENT, quantidade NUMBER,  nome VARCHAR(255))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        (error) => {
          console.log("erro ao criar a tabela " + error.message);
        }
      );
    });
  };

  const addProduto = () => {
    if (!produto) {
      alert("Informe o nome do produto");
      return false;
    }

    db.transaction((txn) => {
      txn.executeSql(
        `INSERT INTO produto (quantidade,nome) VALUES (?,?)`,
        [produto],
        (sqlTxn, res) => {
          console.log(`${produto} Produto adicionado com sucesso!`);
          getProdutos();
          setProduto("");
          Keyboard.dismiss();
        },
        (error) => {
          console.log("Erro ao inserir produto " + error.message);
        }
      );
    });
  };

  const deleteProduto = (id) => {
    db.transaction((txn) => {
      txn.executeSql(
        `DELETE FROM produto WHERE id = ?`,
        [id],

        (sqlTxn, res) => {
          console.log(`${produto} Produto deletado com sucesso!`);
          setProdutos("");
          getProdutos();
        },
        (error) => {
          console.log("Erro ao deletar um Produto " + error.message);
        }
      );
    });
  };

  const getProdutos = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM produto ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Produtos lidos com sucesso!");
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({
                id: item.id,
                quantidade: item.quantidade,
                nome: item.nome,
              });
            }

            setProdutos(results);
          }
        },
        (error) => {
          console.log("Erro ao obter produtos " + error.message);
        }
      );
    });
  };

  const renderProduto = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderColor: "#f2d69c",
          alignItems: "center",
        }}
      >
        <View  >
         <Text>{item.nome} {item.quantidade}</Text>
        </View>
        
        <View >
         <Feather onPress={()=>{deleteProduto(item.id)}} name='trash' size={24} color='#f2d69c' />
        </View>
      </View>
    );
  };

  useEffect(async () => {
    await createTables();
    await getProdutos();
  }, []);

  return (
    <View>
      <View>
        <Text>Nome do Produto</Text>
        <TextInput
          placeholder="Informe um produto"
          value={produto}
          onChangeText={(setProduto)}
          style={{
            color: "#34659b",
            padding: 25,
            fontSize: 25,
          }}
        />
        <Text>Quantidade</Text>
        <TextInput
          onClick={(setContarP)}
          style={{
            color: "#34659b",
            padding: 25,
            fontSize: 25,
            keyboard:'numeric'
          }}
        />


        <TouchableOpacity
          style={{
          
            color: "#f2d69c",
            padding: 20,
            margin: 20,
            width: 140,
            alignSelf: "center",
            alignItems: "center",
            borderRadius: 15,
            backgroundColor: "#34659b",
            fontWeight: "bold",
            fontFamily: "Arial",
          }}
          onPress={addProduto}
        >
          <p>Adicionar</p>
          
        </TouchableOpacity>

        <View>
          <FlatList
            data={produtos}
            renderItem={renderProduto}
            key={(t) => t.id}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;