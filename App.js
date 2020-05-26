
import React, { Fragment, useState, useEffect } from 'react';
import { ScrollView, FlatList, Text } from 'react-native'
import { Cabecalho } from './src/componentes/cabecalho';
import { Foto } from './src/componentes/foto';
import lerFotos from './src/api/feed'
import { Comentarios } from './src/componentes/comentario';

const App = () => {

  const [informacoes, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={informacoes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho nomeUsuario={item.userName} userURL={item.userURL} />
            <Foto urlFoto={item.url} descricao={item.description} quantidadeLikes={item.likes} />
            <Comentarios comentarios={item.comentarios} />
          </Fragment>}
      />
    </ScrollView>
  );
};

export default App;
