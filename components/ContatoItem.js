import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const ContatoItem = (props) => {
    const { contato } = props;

    return (
        <TouchableOpacity onLongPress={() => props.onDelete(contato.item.key)}>
            <View style={styles.itemNaLista}>
                <Text>{"Nome: " + contato.item.value.contatoNome + "\nTelefone: " + contato.item.value.contatoTelefone}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemNaLista: {
        padding: 12,
        backgroundColor: '#FFF',
        borderBottomColor: '#000',
        borderBottomWidth: 1
    }
});

export default ContatoItem;