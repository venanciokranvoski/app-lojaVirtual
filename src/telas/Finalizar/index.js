import  { useContext } from 'react';
import { Text, View, FlatList, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { estilos } from './estilos';


import { Card } from 'react-native-paper'


import { TemaContext } from '../../context/TemaContext';
import { GlobalContext } from '../../context/GlobalContext';

import { AutenticContext } from '../../context/AutenticContext';
import { ProdutosContext } from '../../context/ProdutosContext';


export default function Finalizar({navigation}) {




  // Alterando a aplicação! ! !
  const {temaEscolhido} = useContext(TemaContext)
  const estilo = estilos(temaEscolhido)

  const { usuario } = useContext(AutenticContext)

  const {
    total,
    Delete_all
  } = useContext(ProdutosContext)

  async function remove(){
    const resol_del = await Delete_all();
    Alert.alert(resol_del);
    navigation.navigate('Principal') 
  }

  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.enderecoArea}>
          <Text style={estilo.headertext}>Informações  da Entrega</Text>
          <Text style={estilo.txt}> Nome cliente: {usuario.nome}</Text> 
          <Text style={estilo.txt}  > Email : {usuario.email}</Text>
          <Text style={estilo.txt}> Logradouro :{usuario.endereço}</Text>
          <Text style={estilo.txt}> Telefone :{usuario.telefone}</Text>  
      <View>
 
        </View>
           <Text style={estilo.txtDesc}>Valor: U$ {total}</Text> 
        </View>

      <TouchableOpacity 
      onPress={()=> remove()}
      style={estilo.botao}>
        <Text style={estilo.botaoText}>Finalizar</Text>  
      </TouchableOpacity> 
    </View>

  );
}

