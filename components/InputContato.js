import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const InputContato = (props) => {
    const [contatoNome, setContatoNome] = useState('');
    const [contatoTelefone, setContatoTelefone] = useState('');

    const capturarContatoNome = (nome) => {
        setContatoNome(nome)
    };

    const capturarContatoTelefone = (telefone) => {
        setContatoTelefone(telefone)
    };

    return (
        <View style={styles.contatoView}>
            <TextInput
                placeholder="Nome do Contato"
                style={styles.contatoInputText}
                onChangeText={capturarContatoNome}
                value={contatoNome}
            />

            <TextInput
                placeholder="Telefone"
                style={styles.contatoInputText}
                onChangeText={capturarContatoTelefone}
                value={contatoTelefone}
                keyboardType={"phone-pad"}
            />

            <Button
                title="Adicionar Contato"
                onPress={() => props.onAdicionarContato(contatoNome, contatoTelefone)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contatoView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    contatoInputText: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
        marginBottom: 8
    }
});

export default InputContato;