import { useState, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity, StatusBar, Alert, Image } from 'react-native';
import { estilos } from './estilos';

import logoApp from '../../imagens/logo.png'

import { TemaContext } from "../../context/TemaContext";

import { AutenticContext } from "../../context/AutenticContext";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const {temaEscolhido} = useContext(TemaContext)

  const estilo = estilos(temaEscolhido)

  const { login } = useContext(AutenticContext)

  function logandoNoSistema(){
    const result = login(email, senha)
    console.log(result);
    if(result == 'ok'){
      navigation.navigate('Principal')
    }
    else {
      Alert.alert(result)
    }
  }

  return (
    <View style={estilo.container}>
      <StatusBar />
      <Text style={estilo.titulo}>Login </Text>
      
      <View style={estilo.headerlogo}>
        <Image source={logoApp} style={estilo.sizeIcone} />
      </View>

      <View style={estilo.inputArea}>
        <TextInput
          style={estilo.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={estilo.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => logandoNoSistema()}
      >
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

