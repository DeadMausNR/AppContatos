import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, FlatList, Alert, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import * as contatosActions from '../store/contatosActions';
import BotaoCabecalho from '../components/BotaoCabecalho';
import ContatoItem from '../components/ContatoItem';
import Cartao from '../components/Cartao';
import cores from '../cores/cores';

export default function Contato({ navigation }) {
    navigation.setOptions({
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { navigation.navigate("AddContato") }}
                />
            </HeaderButtons>
    });

    const dispatch = useDispatch();
    const listaContatos = useSelector(estado => estado.contatosReducer.listaContatos);

    useEffect(() => {
        dispatch(contatosActions.listarContatos())
    }, [dispatch]);

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
                    dispatch(contatosActions.deleteContato(key));
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
                    data={listaContatos}
                    keyExtractor={contato => contato.key.toString()}
                    renderItem={
                        contato => (
                            <ContatoItem contato={contato} onDelete={deletarContato} onAbrirAtualizar={() => navigation.navigate('EditarContato', { contato })} />
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