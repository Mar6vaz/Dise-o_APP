import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

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
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <Animatable.View animation="fadeInUp" duration={600} style={styles.cardWrapper}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.card}
              onPress={() =>
                navigation.navigate('FishTankDetail', { tankId: item.id, tankName: item.name })
              }
            >
              <Ionicons name="water-outline" size={28} color="#00A8E8" style={{ marginRight: 15 }} />
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          </Animatable.View>
        )}
      />
    </View>
  );
};

export default FishTanks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F8FAFC',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#003B73',
    marginTop: 40,
    marginBottom: 25,
    alignSelf: 'center',
  },
  cardWrapper: {
    marginBottom: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    paddingHorizontal: 25,
    borderRadius: 20,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Elevación para Android
    elevation: 5,
  },
  name: {
    fontSize: 20,
    color: '#003B73',
    fontWeight: '600',
  },
});
