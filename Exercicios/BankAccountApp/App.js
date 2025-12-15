import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [clienteNome, setClienteNome] = useState('');
  const [clienteIdade, setClienteIdade] = useState(18);
  const [genero, setGenero] = useState('Masculino');
  const [limiteConta, setLimiteConta] = useState(250);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🏦 Banco Digital</Text>
        <Text style={styles.subtitle}>Cadastro de Cliente</Text>
      </View>

      <View style={styles.form}>
        {/* Nome */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={clienteNome}
            onChangeText={setClienteNome}
          />
        </View>

        {/* Idade e Gênero */}
        <View style={styles.row}>
          <View style={styles.inputHalf}>
            <Text style={styles.label}>Idade</Text>
            <TextInput
              style={styles.inputHalf}
              placeholder="18"
              value={clienteIdade.toString()}
              onChangeText={(texto) => setClienteIdade(Number(texto) || 0)}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.pickerContainer}>
            <Text style={styles.label}>Gênero</Text>
            <Picker
              selectedValue={genero}
              style={styles.picker}
              onValueChange={setGenero}
            >
              <Picker.Item label="Masculino" value="Masculino" />
              <Picker.Item label="Feminino" value="Feminino" />
            </Picker>
          </View>
        </View>

        {/* Limite */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Limite da Conta</Text>
          <Slider
            style={styles.slider}
            minimumValue={250}
            maximumValue={10000}
            step={50}
            value={limiteConta}
            onValueChange={setLimiteConta}
            minimumTrackTintColor="#4CAF50"
            maximumTrackTintColor="#ddd"
            thumbTintColor="#4CAF50"
          />
          <Text style={styles.valorSlider}>
            R$ {limiteConta.toLocaleString('pt-BR')}
          </Text>
        </View>
      </View>

      {/* Resumo */}
      <View style={styles.resumo}>
        <Text style={styles.resumoTitulo}>Resumo do Cadastro</Text>
        <Text style={styles.resumoTexto}>Nome: {clienteNome || '---'}</Text>
        <Text style={styles.resumoTexto}>Idade: {clienteIdade} anos</Text>
        <Text style={styles.resumoTexto}>Gênero: {genero}</Text>
        <Text style={styles.resumoLimite}>
          Limite: R$ {limiteConta.toLocaleString('pt-BR')}
        </Text>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#2c3e50',
    padding: 30,
    alignItems: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#ecf0f1',
  },
  form: {
    flex: 1,
    padding: 25,
    gap: 20,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    gap: 15,
  },
  inputHalf: {
    flex: 1,
  },
  pickerContainer: {
    flex: 1,
  },
  picker: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  valorSlider: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    marginTop: 10,
  },
  resumo: {
    backgroundColor: '#fff',
    margin: 25,
    padding: 25,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  resumoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
  },
  resumoTexto: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 8,
  },
  resumoLimite: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 10,
  },
});
