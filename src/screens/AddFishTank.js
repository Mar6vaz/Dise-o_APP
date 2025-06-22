import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';

const AddFishTank = ({ navigation }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !location) {
      Alert.alert('Error', 'Por favor, completa al menos el nombre y la ubicación.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://<TU_BACKEND_URL>/api/v1/tanks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          location,
          description,
        }),
      });

      if (!response.ok) throw new Error('Error al guardar la pecera');

      Alert.alert('Éxito', 'Pecera agregada correctamente');
      navigation.goBack(); // regresar a la lista
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al conectar con el servidor');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <Text style={styles.title}>Agregar Nueva Pecera</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de la pecera"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Ubicación"
        placeholderTextColor="#888"
        value={location}
        onChangeText={setLocation}
      />

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Descripción (opcional)"
        placeholderTextColor="#888"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Guardando...' : 'Agregar Pecera'}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default AddFishTank;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#003B73',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: '#000',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#00A8E8',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
