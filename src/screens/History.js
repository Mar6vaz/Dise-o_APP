// src/screens/History.js
import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput,
} from 'react-native';

const History = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [reports, setReports] = useState([]);

  useEffect(() => {
    setReports([
      {
        id: '1',
        tankName: 'Pecera Sala',
        weekRange: '03 - 09 Junio 2025',
        resumen: 'Durante esta semana, el pH se mantuvo estable pero la temperatura subió ligeramente.',
        metrics: {
          ph: '7.4',
          temperatura: '26.3°C',
          conductividad: '480 μS/cm',
        },
      },
      {
        id: '2',
        tankName: 'Pecera Oficina',
        weekRange: '03 - 09 Junio 2025',
        resumen: 'Se detectaron fluctuaciones en la conductividad y valores de pH fuera del rango ideal.',
        metrics: {
          ph: '6.9',
          temperatura: '25.1°C',
          conductividad: '710 μS/cm',
        },
      },
    ]);
  }, []);

  const filteredReports = reports.filter(r =>
    r.tankName.toLowerCase().includes(search.toLowerCase()) ||
    r.weekRange.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ReportDetail', { report: item })}
    >
      <Text style={styles.cardTitle}>{item.tankName}</Text>
      <Text style={styles.week}>{item.weekRange}</Text>
      <Text style={styles.summaryPreview}>{item.resumen.substring(0, 60)}...</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informes Semanales</Text>
      <TextInput
        style={styles.search}
        placeholder="Buscar por pecera o semana..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredReports}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default History;

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
    marginBottom: 30,
  },
  search: {
    backgroundColor: '#CAF0F8',
    padding: 10,
    borderRadius: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  card: {
    backgroundColor: '#E0F7FA',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0077B6',
  },
  week: {
    fontSize: 14,
    color: '#003B73',
  },
  summaryPreview: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});
