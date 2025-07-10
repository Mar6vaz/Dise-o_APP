import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#555" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por pecera o semana..."
          value={search}
          onChangeText={setSearch}
          placeholderTextColor="#888"
        />
      </View>

      <FlatList
        data={filteredReports}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FBFF',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#003B73',
    marginBottom: 25,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#E8F1F8',
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#003B73',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0077B6',
    marginBottom: 5,
  },
  week: {
    fontSize: 15,
    color: '#555',
    marginBottom: 4,
  },
  summaryPreview: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
});
