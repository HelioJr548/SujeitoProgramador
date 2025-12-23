import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Aluno } from './src/components/aluno'
import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState<string | number>()

  function handleChangeName(nome: string, idade: number | string) {
    setNome(nome)
    setIdade(idade)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projeto React Native</Text>
      <Pressable onPress={() => {
        handleChangeName('Ana', 25)
      }}>
        <Text>Mudar Nome</Text>
      </Pressable>
      {nome !== '' && <Aluno nome={nome} idade={idade} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 28
  }
});
