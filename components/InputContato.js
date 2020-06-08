import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

import TirarFoto from './tirarFoto';
import Contato from '../model/Contato';
import CapturaLocalizacao from './CapturaLocalizacao';

const InputContato = (props) => {
    const contatoKey = props.contatoAtual ? props.contatoAtual.key : '';
    const [contatoNome, setContatoNome] = useState(props.contatoAtual ? props.contatoAtual.nome : '');
    const [contatoTelefone, setContatoTelefone] = useState(props.contatoAtual ? props.contatoAtual.telefone : '');
    const [contatoImagem, setContatoImagem] = useState(props.contatoAtual ? props.contatoAtual.imagem : '');
    const [lat, setLat] = useState(props.contatoAtual ? props.contatoAtual.lat : '');
    const [lng, setLng] = useState(props.contatoAtual ? props.contatoAtual.lng : '');

    const capturarContatoNome = (nome) => {
        setContatoNome(nome)
    };

    const capturarContatoTelefone = (telefone) => {
        setContatoTelefone(telefone)
    };

    const capturarContatoImagem = (imagem) => {
        setContatoImagem(imagem)
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

            <TirarFoto fotoAtual={contatoImagem} onFotoTirada={capturarContatoImagem} />

            <CapturaLocalizacao
                localizacaoInicial={{ lat, lng }}
                handleLocalizacao={(lat, lng) => {
                    setLat(lat);
                    setLng(lng);
                }}
            />

            <Button
                title="Salvar Contato"
                onPress={() => props.onSalvarContato(new Contato(contatoKey, contatoNome, contatoTelefone, contatoImagem, lat, lng, new Date().toString()))}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contatoView: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    contatoInputText: {
        alignSelf: 'center',
        maxWidth: '50%',
        minWidth: '50%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
        marginBottom: 8
    }
});

export default InputContato;