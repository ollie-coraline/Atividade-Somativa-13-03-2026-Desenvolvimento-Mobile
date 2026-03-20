import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const backgroundColor = isDarkMode ? '#1e1e1e' : '#f5f5f5';
  const textColor = isDarkMode ? '#ffffff' : '#000000';
  const cardColor = isDarkMode ? '#333333' : '#ffffff';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      
      {/* Cabecalho */}
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Text style={[styles.title, { color: textColor }]}>Atualização em Andamento</Text>
          <ActivityIndicator size="small" color={textColor} style={{ marginLeft: 8 }} />
        </View>
        
        {/* Toggle escuro */}
        <View style={styles.switchContainer}>
          <Text style={{ color: textColor, marginRight: 8 }}>Modo Escuro</Text>
          <Switch 
            value={isDarkMode} 
            onValueChange={setIsDarkMode} 
          />
        </View>
        <Text style={[styles.subtitle, { color: textColor }]}>Status do Painel de Elevador</Text>
      </View>

      {/* Lista de noticias */}
      <ScrollView style={styles.scrollView}>
        
        <View style={[styles.card, { backgroundColor: cardColor }]}>
          <Text style={[styles.cardTitle, { color: textColor }]}>📢 Anúncio: Campanha de Verão</Text>
          <Text style={[styles.cardTime, { color: textColor }]}>Há 5 min</Text>
          <Text style={{ color: textColor }}>Nova propaganda carregada no Painel Elevador 3.</Text>
        </View>

        <View style={[styles.card, { backgroundColor: cardColor }]}>
          <Text style={[styles.cardTitle, { color: textColor }]}>⛅ Notícias Locais e Clima</Text>
          <Text style={[styles.cardTime, { color: textColor }]}>Há 15 min</Text>
          <Text style={{ color: textColor }}>Previsão do tempo local atualizada nos Elevadores A e B.</Text>
        </View>

        <View style={[styles.card, { backgroundColor: cardColor }]}>
          <Text style={[styles.cardTitle, { color: textColor }]}>📰 Manchetes do Dia</Text>
          <Text style={[styles.cardTime, { color: textColor }]}>Há 30 min</Text>
          <Text style={{ color: textColor }}>Notícias locais e trânsito atualizados no Painel 1.</Text>
        </View>

      </ScrollView>

      {/* Indicador de progresso*/}
      <View style={styles.footer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={[styles.footerText, { color: textColor }]}>Aplicando atualizações OTA... (2/5)</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardTime: {
    fontSize: 12,
    opacity: 0.7,
    position: 'absolute',
    right: 16,
    top: 16,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    marginTop: 10,
    fontSize: 14,
  }
});