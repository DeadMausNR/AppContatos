import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BotaoCabecalho from '../components/BotaoCabecalho';
import ContatoItem from '../components/ContatoItem';
import Cartao from '../components/Cartao';
import cores from '../cores/cores';

export default function Contato({ navigation, route }) {
    const [contatos, setContatos] = useState(route.params.listaContatos);
    const [contadorContatos, setContadorContatos] = useState(route.params.listaContatos.length);

    navigation.setOptions({
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { navigation.navigate("AddContato", { adicionarContato }) }}
                />
            </HeaderButtons>
    });

    const adicionarContato = (contatoNome, contatoTelefone) => {
        setContatos((contatos) => {
            contatos = [...contatos, { key: contadorContatos.toString(), value: { contatoNome, contatoTelefone } }]
            setContadorContatos(contadorContatos + 1);
            return contatos;
        });

        navigation.navigate('Contatos', { listaContatos: contatos });
    }

    const atualizarContato = (novoContato) => {
        Alert.alert(
            'Atualizar Contato',
            'Deseja mesmo atualizar esse contato?',
            [{
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                style: 'default',
                onPress: () => {
                    contatos[contatos.findIndex(contato => contato.key === novoContato.key.toString())] = novoContato
                    navigation.navigate('Contatos', { listaContatos: contatos });
                }
            }]
        );
    }

    const deletarContato = (key) => {
        Alert.alert(
            'Deletar Contato',
            'Deseja mesmo deletar esse contato?',
            [{
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                style: 'default',
                onPress: () => {
                    setContatos(contatos => {
                        return contatos.filter(contato => {
                            return contato.key !== key;
                        });
                    });
                }
            }]
        );
    }

    return (
        <View style={styles.telaPrincipalView}>
            <Cartao style={styles.contatos}>
                <Text style={styles.ListaHeader}>Contatos Salvos</Text>
                <FlatList
                    style={styles.FlatListStyle}
                    data={contatos}
                    renderItem={
                        contato => (
                            <ContatoItem contato={contato} onDelete={deletarContato} onAbrirAtualizar={() => navigation.navigate('EditarContato', { contato, atualizarContato })} />
                        )
                    }
                />
            </Cartao>
        </View>
    );
}

const styles = StyleSheet.create({
    telaPrincipalView: {
        paddingBottom: 50,
        paddingTop: 10,
        alignItems: 'center'
    },
    ListaHeader: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 30
    },
    FlatListStyle: {
        marginTop: 8
    },
    contatos: {
        backgroundColor: cores.backgroundCartaoPrimary,
        paddingBottom: 50
    }
});