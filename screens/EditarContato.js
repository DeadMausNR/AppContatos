import React from 'react';
import { StyleSheet, View } from 'react-native';

import InputContato from '../components/InputContato';
import Cartao from '../components/Cartao';
import cores from '../cores/cores';

export default function EditarContato({ route }) {
    return (
        <View style={styles.telaUpdateView}>
            <Cartao style={styles.contatoInput}>
                <InputContato contatoAtual={route.params.contato} onAtualizarContato={route.params.atualizarContato} />
            </Cartao>
        </View>
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
    }
});