import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone desejado
import Noticia from '../../components/AgriculturalNews/cotacao'

export default function TodasNoticias() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack(); // Isso fará com que a tela retorne à tela anterior.
  };

  return (
    <View style={styles.container}>
    <View style={styles.header}>

        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="arrow-left" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
       

       <Text style={styles.title}>Cotação</Text>
      </View>
      <Noticia />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40
  },
  icon: {
    marginRight: 10,
    marginLeft: 2,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
