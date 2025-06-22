// src/screens/FishTankDetail.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const generateSensorData = () => ({
  temperatura: Array.from({ length: 7 }, () => (20 + Math.random() * 5).toFixed(1)),
  ph: Array.from({ length: 7 }, () => (6 + Math.random()).toFixed(2)),
  conductividad: Array.from({ length: 7 }, () => (300 + Math.random() * 100).toFixed(0)),
});

const FishTankDetail = ({ route }) => {
  const { tankName } = route.params;
  const [data, setData] = useState(generateSensorData());
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateSensorData());
      setLastUpdated(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const renderChart = (label, values, color) => (
    <View style={styles.chartContainer}>
      <Text style={styles.chartLabel}>{label}</Text>
      <LineChart
        data={{
          labels: ['-6', '-5', '-4', '-3', '-2', '-1', 'Ahora'],
          datasets: [{ data: values.map(Number) }],
        }}
        width={screenWidth - 40}
        height={220}
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: '#FFF',
          backgroundGradientFrom: '#FFF',
          backgroundGradientTo: '#FFF',
          color: () => color,
          labelColor: () => '#003B73',
        }}
        bezier
        style={{ borderRadius: 16 }}
      />
    </View>
  );

  const currentValues = {
    temperatura: data.temperatura[6],
    ph: data.ph[6],
    conductividad: data.conductividad[6],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{tankName}</Text>
      <Text style={styles.subtitle}>Última actualización: {lastUpdated.toLocaleString()}</Text>
      <View style={styles.statusBox}>
        <Ionicons name="checkmark-circle-outline" size={28} color="green" />
        <Text style={styles.statusText}>Estado: Normal</Text>
      </View>

      {/* DATOS NUMÉRICOS */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Ionicons name="thermometer-outline" size={32} color="#003B73" />
          <Text style={styles.label}>Temperatura</Text>
          <Text style={styles.value}>{currentValues.temperatura} °C</Text>
        </View>
        {renderChart('Temperatura (°C)', data.temperatura, '#00A8E8')}
        <View style={styles.card}>
          <Ionicons name="water-outline" size={32} color="#003B73" />
          <Text style={styles.label}>pH</Text>
          <Text style={styles.value}>{currentValues.ph}</Text>
        </View>
        {renderChart('pH', data.ph, '#0077B6')}
        <View style={styles.card}>
          <Ionicons name="pulse-outline" size={32} color="#003B73" />
          <Text style={styles.label}>Conductividad</Text>
          <Text style={styles.value}>{currentValues.conductividad} μS/cm</Text>
        </View>
        {renderChart('Conductividad (μS/cm)', data.conductividad, '#023E8A')}
      </View>
     
    </ScrollView>
  );
};

export default FishTankDetail;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
  title: { fontSize: 24, color: '#003B73', fontWeight: 'bold', marginTop: 30, marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#555', marginBottom: 10 },
  statusBox: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  statusText: { marginLeft: 10, fontSize: 16 },

  // Tarjetas de valores
  cardContainer: {
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#E0E0E0',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    color: '#003B73',
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00A8E8',
    marginTop: 4,
  },

  // Gráficas
  chartContainer: { marginBottom: 30 },
  chartLabel: { fontSize: 18, marginBottom: 10, color: '#003B73' },
});
