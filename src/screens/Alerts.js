// src/screens/Alerts.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Alerts = ({ navigation }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const now = new Date();
    setAlerts([
      {
        id: '1',
        parametro: 'pH',
        valor: '9.2',
        umbral: '7.5',
        gravedad: 'Alta',
        estado: 'Fuera de rango',
        fecha: now.toLocaleDateString(),
        hora: now.toLocaleTimeString(),
        tankName: 'Pecera Sala',
        tipoSensor: 'Sensor de pH',
        visto: false,
        imageUrl: 'https://pecesmarinos.es/wp-content/uploads/2023/04/peces-cirujano-naso-elegans.jpg',
      },
      {
        id: '2',
        parametro: 'Conductividad',
        valor: '780',
        umbral: '500',
        gravedad: 'Media',
        estado: 'Alta',
        fecha: now.toLocaleDateString(),
        hora: now.toLocaleTimeString(),
        tankName: 'Pecera Oficina',
        tipoSensor: 'Sensor de conductividad',
        visto: false,
        imageUrl: 'https://www.zooplus.es/magazine/wp-content/uploads/2021/02/Goldfish.webp',
      },
      {
        id: '3',
        parametro: 'Temperatura',
        valor: '30.1',
        umbral: '26',
        gravedad: 'Alta',
        estado: 'Crítica',
        fecha: now.toLocaleDateString(),
        hora: now.toLocaleTimeString(),
        tankName: 'Pecera Comedor',
        tipoSensor: 'Sensor de temperatura',
        visto: false,
        imageUrl: 'https://complementosparaaves.com/blog/wp-content/uploads/2024/10/Designer-4.jpeg',
      },
    ]);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('AlertDetail', { alert: item })}
    >
      <MaterialIcons name="warning" size={32} color="#FF6B6B" />
      <View style={styles.cardContent}>
        <Text style={styles.parametro}>
          {item.parametro} - {item.estado}
        </Text>
        <Text style={styles.valor}>Valor: {item.valor} | Pecera: {item.tankName}</Text>
        <Text style={styles.fecha}>Fecha: {item.fecha} | Hora: {item.hora}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alertas Activas</Text>
      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Alerts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003B73',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
    flexGrow: 1,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF3F3',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2,
  },
  cardContent: {
    marginLeft: 15,
    flex: 1,
  },
  parametro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D72638',
  },
  valor: {
    fontSize: 16,
    color: '#003B73',
    marginTop: 4,
  },
  fecha: {
    fontSize: 14,
    color: '#777777',
    marginTop: 2,
  },
});
