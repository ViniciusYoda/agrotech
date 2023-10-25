import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import WebView from 'react-native-webview';

export default function Cotacao({ source }) {
  return (
    <View style={styles.container}>
          <WebView
            style={styles.webview}
            javaScriptEnabled
            source={{
              html: '<script type="text/javascript" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=55&fonte=Verdana&tamanho=26pt&largura=1000px&cortexto=000000&corcabecalho=4af069&corlinha=c4c4c4&imagem=true&output=js"></script>',
            }}
          />
          <WebView
            style={styles.webview}
            javaScriptEnabled
            source={{
              html: '<script type="text/javascript" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=55&fonte=Verdana&tamanho=26pt&largura=1000px&cortexto=000000&corcabecalho=4af069&corlinha=c4c4c4&imagem=true&output=js"></script>',
            }}
          />
                    <WebView
            style={styles.webview}
            javaScriptEnabled
            source={{
              html: '<script type="text/javascript" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=55&fonte=Verdana&tamanho=26pt&largura=1000px&cortexto=000000&corcabecalho=4af069&corlinha=c4c4c4&imagem=true&output=js"></script>',
            }}
          />
                    <WebView
            style={styles.webview}
            javaScriptEnabled
            source={{
              html: '<script type="text/javascript" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=55&fonte=Verdana&tamanho=26pt&largura=1000px&cortexto=000000&corcabecalho=4af069&corlinha=c4c4c4&imagem=true&output=js"></script>',
            }}
          />
                    <WebView
            style={styles.webview}
            javaScriptEnabled
            source={{
              html: '<script type="text/javascript" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=55&fonte=Verdana&tamanho=26pt&largura=1000px&cortexto=000000&corcabecalho=4af069&corlinha=c4c4c4&imagem=true&output=js"></script>',
            }}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
});
