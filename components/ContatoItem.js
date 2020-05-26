import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import Cartao from './Cartao';
import cores from '../cores/cores';

const ContatoItem = (props) => {
    const contato = props.contato.item;
    return (
        <TouchableOpacity onLongPress={() => props.onDelete(contato.key)} onPress={props.onAbrirAtualizar}>
            <Cartao style={styles.contatoInfo}>
                <Image
                    style={styles.imagem}
                    source={{ uri: contato.imagem }}
                />
                <View style={styles.infoContainer}>
                    <Text>{"Nome: " + contato.nome}</Text>
                    <Text>{"Telefone: " + contato.telefone}</Text>
                </View>
            </Cartao>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#CCC'
    },
    contatoInfo: {
        flexDirection: 'row',
        backgroundColor: cores.backgroundCartaoSecundary
    }
});

export default ContatoItem;