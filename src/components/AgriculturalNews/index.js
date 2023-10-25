import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import WebView from 'react-native-webview';
import Swiper from 'react-native-swiper';
import Noticia from './noticia';
import { useNavigation } from '@react-navigation/native';

export default function AgriculturalContent() {
  const navigation = useNavigation()



  return (
    <View style={styles.container}>
      <Swiper loop={false} showsPagination={false}>
        <View style={styles.slide}>
          <View style={styles.header}>
            <Text style={styles.label}>Notícias</Text>
              <TouchableOpacity onPress={() => navigation.navigate('TodasNoticias')}>
                <Text>Ver Mais</Text>
              </TouchableOpacity>
          </View>
          <Noticia limit={2} />
        </View>
        <View style={styles.slide}>
          <Text style={styles.label}>Cotações</Text>
          <WebView
            style={styles.webview}
            javaScriptEnabled
            source={{
              html: '<script type="text/javascript" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=55&fonte=Verdana&tamanho=26pt&largura=1000px&cortexto=000000&corcabecalho=4af069&corlinha=c4c4c4&imagem=true&output=js"></script>',
            }}
          />
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  webview: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
});
