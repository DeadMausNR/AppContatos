import React from 'react';
import ENV from '../env';

import { View, Image, StyleSheet } from 'react-native';

export default PreviewDoMapa = (props) => {
    let mapaURL = '';

    if (props.localizacao && props.localizacao.lat && props.localizacao.lng) {
        mapaURL = `https://maps.googleapis.com/maps/api/staticmap?center=${props.localizacao.lat},${props.localizacao.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:%7C${props.localizacao.lat},${props.localizacao.lng}&key=${ENV.apiKey}`;
    }

    return (
        <View style={{ ...estilos.previewDoMapa, ...props.style }}>
            {
                mapaURL ?
                    <Image
                        style={estilos.mapaImagem}
                        source={{ uri: mapaURL }}
                    />
                    :
                    props.children
            }
        </View>
    )
};

const estilos = StyleSheet.create({
    previewDoMapa: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapaImagem: {
        width: '100%',
        height: '100%'
    }
});
