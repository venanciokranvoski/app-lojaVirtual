import  { useContext } from 'react';
import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../componentes/Produto';
import { estilos } from './estilos';
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';

import { TemaContext } from '../../context/TemaContext';

import { AutenticContext } from '../../context/AutenticContext';
import { ProdutosContext } from '../../context/ProdutosContext';

export default function Resumo({navigation}) {
  const {
    quantidade,
    carrinho
  } = useContext(ProdutosContext)


  // Alterando a aplicação! ! !
  const {temaEscolhido} = useContext(TemaContext)
  
  const estilo = estilos(temaEscolhido)

  const { usuario } = useContext(AutenticContext)



  return (
    <View style={estilo.container}>
    <StatusBar />
    <View style={estilo.tituloArea}>
      <Text style={estilo.titulo}>{usuario.nome}</Text>
      <View style={estilo.carrinhoArea}>
        <Feather name="shopping-cart" size={30} color="#fff" style={estilo.carrinhoIcon} />
        <View style={estilo.carrinhoQuantidadeArea}>
          <Text style={estilo.carrinhoQuantidade}>{quantidade}</Text>  
        </View>
      </View>
    </View>

    <FlatList
      data={carrinho}
      keyExtractor={item => Math.random()}
      renderItem={({ item }) => <Produto item={item} adicionar={false} />}
      style={estilo.lista}
      showsVerticalScrollIndicator={false}
      />
       
      <TouchableOpacity
        onPress={()=> navigation.navigate('Finalizar')}
        style={estilo.botao}>
        <Text style={estilo.botaoText}>Finalizar</Text>  
      </TouchableOpacity> 
    </View>

  );
}

