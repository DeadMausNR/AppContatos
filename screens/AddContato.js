import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import * as contatosActions from '../store/contatosActions';
import cores from '../cores/cores';
import Cartao from '../components/Cartao';
import InputContato from '../components/InputContato';


export default function AddContato({ navigation }) {
    const dispatch = useDispatch();

    const adicionarcontato = (contato) => {
        dispatch(contatosActions.addContato(contato));
        navigation.goBack();
    }

    return (
        <View style={styles.telaCadastroView}>
            <Cartao style={styles.contatoInput}>
                <InputContato onSalvarContato={adicionarcontato} />
            </Cartao>
        </View>
    );
}

const styles = StyleSheet.create({
    telaCadastroView: {
        paddingBottom: 50,
        paddingTop: 10,
        alignItems: 'center'
    },
    contatoInput: {
        backgroundColor: cores.backgroundCartaoPrimary
    }
});