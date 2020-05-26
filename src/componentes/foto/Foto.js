import React, { Fragment, useState } from 'react';
import estiloFoto from './estilo.js';
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { imgLike, curtirFoto } from '../../api/curtidas.js';

const Foto = ({ urlFoto, descricao, quantidadeLikes }) => {

    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLike] = useState(quantidadeLikes)

    const cliclouCurtir = () => {

        const [novoCurtiu, qtde] = curtirFoto(curtiu, likes);
        setLike(qtde);
        setCurtiu(novoCurtiu);
    }

    return (
        <View >
            <Image
                source={{ uri: urlFoto }}
                style={estiloFoto.image} />
            <Text>{descricao}</Text>
            <View style={estiloFoto.viewLike}>
                <TouchableOpacity onPress={cliclouCurtir}>
                    <Image source={imgLike(curtiu)} style={estiloFoto.like} />
                </TouchableOpacity>
                <Text>Curtidas: {likes}</Text>
            </View>
        </View>
    );
};

export default Foto;
