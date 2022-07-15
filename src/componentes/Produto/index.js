import { ProdutosContext } from '../../context/ProdutosContext';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { estilos } from './estilos'
import { useContext } from 'react';

export function Produto({ item, adicionar }) {

  const {
    showProd 
  } = useContext(ProdutosContext)

  return (
    <View style={estilos.cartao}>
      <Image style={estilos.imagem} source={item.imagem}/>
      <View style={estilos.textoContainer}>
        <Text style={estilos.texto} numberOfLines={1}>{item.texto}</Text>
        <Text style={estilos.preco}>R$ {item.preco}</Text>
      </View>
      { adicionar &&
      <TouchableOpacity style={estilos.botaoAdicionar} onPress={() => showProd(item)}>
        <Text style={estilos.botaoTexto}>+</Text>
      </TouchableOpacity>}
    </View>
  );
}
