
import React, { Fragment } from 'react';
import { Text, Image, View } from 'react-native'

import estiloCabecalho from './estilo.js'

const Cabecalho = ({ nomeUsuario, userURL }) => {

    return (
        <View style={estiloCabecalho.cabecalho}>
            <Image
                source={{ uri: userURL }}
                style={estiloCabecalho.fotoUsuario} />
            <Text>{nomeUsuario}</Text>
        </View>
    );

}

export default Cabecalho;