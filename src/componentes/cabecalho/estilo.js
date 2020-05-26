import { StyleSheet } from 'react-native'

const estiloCabecalho = StyleSheet.create(
    {
        fotoUsuario: {
            width: 40,
            height: 40,
            margin: 10,
            borderRadius: 30
        },
        cabecalho: {
            flexDirection: "row",
            alignItems: "center",
        }
    }
);

export default estiloCabecalho;