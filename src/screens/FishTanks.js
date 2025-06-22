// src/screens/FishTanks.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const mockFishTanks = [
  { id: '1', name: 'Pecera Sala' },
  { id: '2', name: 'Pecera Oficina' },
];

const FishTanks = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Peceras</Text>
      <FlatList
        data={mockFishTanks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('FishTankDetail', { tankId: item.id, tankName: item.name })
            }
          >
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Botón flotante para agregar */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddFishTank')}
      >
        <Ionicons name="add" size={32} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

export default FishTanks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003B73',
    marginTop: 30,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#00A8E8',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  name: {
    fontSize: 18,
    color: '#003B73',
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#00A8E8',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
