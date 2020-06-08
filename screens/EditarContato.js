import React from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import * as contatosActions from '../store/contatosActions';
import InputContato from '../components/InputContato';
import Cartao from '../components/Cartao';
import cores from '../cores/cores';
import PreviewDoMapa from '../components/PreviewDoMapa';
import { ScrollView } from 'react-native-gesture-handler';

export default function EditarContato({ navigation, route }) {
    const contatoAtual = route.params.contato.item;
    const dispatch = useDispatch();

    const atualizarContato = (contato) => {
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
                    dispatch(contatosActions.updateContato(contato));
                    navigation.goBack();
                }
            }]
        );
    }

    return (
        <ScrollView>
            <View style={styles.telaUpdateView}>
                <Cartao style={styles.contatoInput}>
                    <InputContato contatoAtual={contatoAtual} onSalvarContato={atualizarContato} />
                </Cartao>
                <Cartao style={styles.dataCartao}>
                    <Text>Atualizado em: {new Date(contatoAtual.createdAt).toLocaleDateString()} às {new Date(contatoAtual.createdAt).toLocaleTimeString()}</Text>
                </Cartao>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    telaUpdateView: {
        paddingBottom: 50,
        paddingTop: 10,
        alignItems: 'center'
    },
    contatoInput: {
        backgroundColor: cores.backgroundCartaoPrimary
    },
    dataCartao: {
        backgroundColor: cores.backgroundCartaoPrimary,
        alignItems: 'center'
    }
});