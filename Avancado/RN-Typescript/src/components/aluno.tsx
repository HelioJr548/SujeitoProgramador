import { StyleSheet, Text, View } from 'react-native';

interface IAlunoProps {
    nome: string;
    idade: string | number
}

export function Aluno({
    nome,
    idade,
}: IAlunoProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem vindo, {nome}</Text>
            <Text style={styles.text}>Idade: {idade}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: '#121212',
        borderRadius: 8,
        marginVertical: 14
    },
    text: {
        color: '#FFF',
    },
});
