import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

export default TirarFoto = (props) => {

    const [imagemURI, setImagemURI] = useState(props.fotoAtual ? props.fotoAtual : '');

    const tirarFoto = async () => {
        const foto = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1
        });

        setImagemURI(foto.uri);
        props.onFotoTirada(foto.uri);
    }

    return (
        <View style={estilos.principal}>
            <View style={estilos.previewDaImagem}>
                {
                    !imagemURI ?
                        <Text>Nenhuma foto</Text>
                        :
                        <Image
                            style={estilos.imagem}
                            source={{ uri: imagemURI }}
                        />
                }
            </View>
            <Button
                title="Selecionar foto"
                onPress={tirarFoto}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    principal: {
        alignItems: 'center',
        marginBottom: 15
    },
    previewDaImagem: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#CCC',
        borderWidth: 1
    },
    imagem: {
        width: '100%',
        height: '100%'
    }
});