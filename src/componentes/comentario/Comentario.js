import React, { Fragment, useState } from 'react';
import { Text, FlatList, TextInput, Image, View, TouchableOpacity } from 'react-native'
import estiloComentario from './estilo';

const Comentarios = ({ comentarios }) => {

    const [estadoComentarios, setComentarios] = useState(comentarios);
    const adicionarComentario = () => {
        console.warn(conteudoInputComentario);
        campoInput.clear();

        const novoComentario = {
            date: Date.now,
            text: conteudoInputComentario,
            userName: "Alexandre_pd"
        }

        setComentarios([...estadoComentarios, novoComentario]);
    }

    let conteudoInputComentario = "";
    let campoInput;

    return (
        <Fragment>

            <FlatList
                data={estadoComentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <Fragment>
                        <View style={estiloComentario.naMesmaLinha}>
                            <Text>{item.userName} </Text>
                            <Text>{item.text} </Text>
                        </View>
                    </Fragment>}
            />
            <View style={estiloComentario.naMesmaLinha}>
                <TextInput
                    ref={textInput => campoInput = textInput}
                    onChangeText={texto => conteudoInputComentario = texto}
                    placeholder={"Deixe seu comentário..."}
                    style={{ flex: 1 }} />

                <TouchableOpacity onPress={adicionarComentario}>
                    <Image
                        source={require("../../../res/img/send.jpg")}
                        style={estiloComentario.imgSend} />
                </TouchableOpacity>

            </View>
        </Fragment >
    );
};

export default Comentarios;
