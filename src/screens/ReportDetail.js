// src/screens/ReportDetail.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ReportDetail = ({ route }) => {
  const { report } = route.params;

  const handleShare = () => {
    Share.share({
      message: `Informe de ${report.tankName} (${report.weekRange})\nResumen: ${report.resumen}`,
    });
  };

  const handleEdit = () => {
    Alert.alert('Editar', 'Función para editar informe próximamente.');
  };

  const handleDownload = () => {
    Alert.alert('Descargar', 'El informe se ha generado como PDF.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informe: {report.tankName}</Text>
      <Text style={styles.week}>{report.weekRange}</Text>

      <View style={styles.box}>
        <Text style={styles.label}>pH promedio:</Text>
        <Text style={styles.value}>{report.metrics.ph}</Text>

        <Text style={styles.label}>Temperatura promedio:</Text>
        <Text style={styles.value}>{report.metrics.temperatura}</Text>

        <Text style={styles.label}>Conductividad promedio:</Text>
        <Text style={styles.value}>{report.metrics.conductividad}</Text>
      </View>

      <Text style={styles.label}>Resumen:</Text>
      <Text style={styles.summary}>{report.resumen}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.iconBtn} onPress={handleEdit}>
          <Ionicons name="create-outline" size={28} color="#0077B6" />
          <Text style={styles.iconLabel}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn} onPress={handleShare}>
          <Ionicons name="share-social-outline" size={28} color="#00A8E8" />
          <Text style={styles.iconLabel}>Compartir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn} onPress={handleDownload}>
          <Ionicons name="download-outline" size={28} color="#003B73" />
          <Text style={styles.iconLabel}>Descargar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReportDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#003B73',
  },
  week: {
    fontSize: 16,
    color: '#0077B6',
    marginBottom: 20,
  },
  box: {
    backgroundColor: '#CAF0F8',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#0077B6',
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#003B73',
  },
  summary: {
    fontSize: 15,
    color: '#333',
    backgroundColor: '#F1F9FF',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
  },
  iconBtn: {
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 14,
    marginTop: 5,
    color: '#003B73',
  },
});
