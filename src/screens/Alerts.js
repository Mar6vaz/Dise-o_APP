import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
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
        imageUrl:
          'https://pecesmarinos.es/wp-content/uploads/2023/04/peces-cirujano-naso-elegans.jpg',
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
        imageUrl:
          'https://www.zooplus.es/magazine/wp-content/uploads/2021/02/Goldfish.webp',
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
        imageUrl:
          'https://complementosparaaves.com/blog/wp-content/uploads/2024/10/Designer-4.jpeg',
      },
    ]);
  }, []);

  const gravedadColor = (nivel) => {
    switch (nivel.toLowerCase()) {
      case 'alta':
        return '#D72638';
      case 'media':
        return '#FFA500';
      case 'baja':
        return '#0077B6';
      default:
        return '#555';
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('AlertDetail', { alert: item })}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <MaterialIcons name="warning" size={28} color={gravedadColor(item.gravedad)} />
          <Text style={[styles.parametro, { color: gravedadColor(item.gravedad) }]}>
            {item.parametro} - {item.estado}
          </Text>
        </View>
        <Text style={styles.tankName}>Pecera: {item.tankName}</Text>
        <Text style={styles.valor}>
          Valor: {item.valor}  |  Umbral: {item.umbral}
        </Text>
        <Text style={styles.fecha}>
          Fecha: {item.fecha}  |  Hora: {item.hora}
        </Text>
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
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Alerts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#003B73',
    textAlign: 'center',
    marginBottom: 25,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 18,
    alignItems: 'center',
    // sombras iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // sombra Android
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  parametro: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 8,
  },
  tankName: {
    fontSize: 16,
    color: '#0077B6',
    fontWeight: '600',
    marginBottom: 4,
  },
  valor: {
    fontSize: 15,
    color: '#444',
    marginBottom: 2,
  },
  fecha: {
    fontSize: 13,
    color: '#999',
  },
});
