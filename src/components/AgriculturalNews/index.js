import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import WebView from 'react-native-webview';
import Swiper from 'react-native-swiper';

export default function AgriculturalContent() {
  const swiperRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={false} 
        onIndexChanged={handleIndexChanged}
      >
        <View style={styles.slide}>
          <Text style={styles.label}>Notícias</Text>
          <WebView
           style={styles.webview}
           javaScriptEnabled
            source={{
              html: '<script type="text/javascript" src="https://www.noticiasagricolas.com.br/widgets/noticias?subsecao=2,3,162,6,7,8,10,64,80,85,146,5,4,11,160,12,156,40,158,60,13,163,97,14,95,205,15,1,155,84&largura=900px&altura=1000px&fonte=Arial%2C%20Helvetica%2C%20sans-serif&tamanho=20px&cortexto=333333&corlink=006666&qtd=20&output=js"></script>',
            }}
          />
        </View>
        <View style={styles.slide}>
          <Text style={styles.label}>Cotações</Text>
          <WebView
          style={styles.webview}
          javaScriptEnabled
            source={{
              html: '<script type="text/javascript" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=144&fonte=Arial%2C%20Helvetica%2C%20sans-serif&tamanho=27pt&largura=1000px&cortexto=333333&corcabecalho=006400&corlinha=228b22&imagem=false&output=js"></script>',
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
    
  }
});

