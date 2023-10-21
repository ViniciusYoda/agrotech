import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Linking,
} from 'react-native';

const noticias = [
  {
    imagem:
      'https://agranjatotalagro.com.br/wp-content/webp-express/webp-images/uploads/2023/10/bomba-de-oleo-diesel-768x576.jpg.webp',
    urlNoticia:
      'https://agranjatotalagro.com.br/petrobras-anuncia-aumento-no-diesel-e-reducao-na-gasolina/',
    titulo: 'Petrobras anuncia aumento no diesel e redução na gasolina',
    dataAutor: '20/10/2023  Yago Portella',
  },
  {
    imagem:
      'https://agranjatotalagro.com.br/wp-content/webp-express/webp-images/uploads/2023/10/milho-milharal-1-768x576.jpg.webp',
    urlNoticia:
      'https://agranjatotalagro.com.br/milho-brasil-deve-exportar-mais-de-9-mi-de-t-em-outubro/',
    titulo: 'Milho: Brasil deve exportar mais de 9 mi de t em outubro',
    dataAutor: '19/10/2023 Yago Portella',
  },
  {
    imagem:
      'https://agranjatotalagro.com.br/wp-content/webp-express/webp-images/uploads/2023/10/Tabaco-Afbra-FOTO-1-768x514.jpg.webp',
    urlNoticia:
      'https://agranjatotalagro.com.br/renda-per-capita-mensal-do-produtor-de-tabaco-e-o-dobro-da-media-brasileira/',
    titulo:
      'Renda per capita mensal do produtor de tabaco é o dobro da média brasileira ',
    dataAutor: '20/10/2023 Leandro Mariani Mittmann',
  },
  {
    imagem:
      'https://agranjatotalagro.com.br/wp-content/webp-express/webp-images/uploads/2023/10/Soja-graos-768x512.jpg.webp',
    urlNoticia:
      'https://agranjatotalagro.com.br/producao-de-biodiesel-devera-superar-7-bilhoes-de-litros-em-2023/',
    titulo:
      'Produção de biodiesel deverá superar 7 bilhões de litros em 2023 ',
    dataAutor: '20/10/2023 Leandro Mariani Mittmann',
  },
];

const Noticia = ({ limit }) => {
  const abrirNoticia = (url) => {
    Linking.openURL(url);
  };

  const noticiasLimitadas = limit ? noticias.slice(0, limit) : noticias;

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => abrirNoticia(item.urlNoticia)}>
      <View style={styles.noticiaContainer}>
        <Image source={{ uri: item.imagem }} style={styles.imagem} />
        <View style={styles.textosContainer}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.dataAutor}>{item.dataAutor}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={noticiasLimitadas}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = {
  noticiaContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  imagem: {
    marginLeft: 10,
    width: 80,
    height: 80,
  },
  textosContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 14,
    color: 'black',
  },
  dataAutor: {
    fontSize: 9,
    color: 'gray',
  },
};

export default Noticia;
