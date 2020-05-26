import { Dimensions, StyleSheet } from 'react-native'

const largura = Dimensions.get("screen").width;

const estiloFoto = StyleSheet.create(
    {
        image: {
            width: largura,
            height: largura,
        },
        like:{
            height:40,
            width:40,
            margin: 5
        },
        viewLike:{
            flexDirection:"row",
            alignItems: "center",
        }
    }
);

export default estiloFoto;