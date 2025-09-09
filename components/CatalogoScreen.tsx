import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Card from './Card';
import receitas from '../catalogo.json'
import { ScrollView } from 'react-native-gesture-handler';

export default function CatalogoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Histórias de Colher</Text>
        <Text style={styles.textSubtitle}>De chefe para chefe</Text>
      </View>


      <ScrollView style={styles.content}>
        {receitas.map((item) => (
          <Card
            key={item.id}
            image={item.urlImagem}
            recipe={item.receita} 
            title={item.nome}
            description={`${item.dica}\n⏱ Tempo: ${item.tempo} min`}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000000ff',
  },

  content: {
    flex: 5,
    backgroundColor: '#b72020ff',
    borderRadius: 20,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomColor: '#131212ff',
    width: '100%',
    padding: 10,
  },

  textTitle: {
    fontSize: 35,
  },

  title: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    backgroundColor: '#b8b6b6ff',
    borderRadius: 20,
    width: '100%',
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 5,
    borderBottomColor: '#131212ff',
  },

  textSubtitle: {
    fontSize: 25,
  },
});
