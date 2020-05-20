import React from 'react';
import { View, StyleSheet } from 'react-native';

import cores from '../cores/cores';
import Cartao from '../components/Cartao';
import InputContato from '../components/InputContato';

export default function AddContato({ route }) {
    return (
        <View style={styles.telaCadastroView}>
            <Cartao style={styles.contatoInput}>
                <InputContato onAdicionarContato={route.params.adicionarContato} />
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