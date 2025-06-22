import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profiles = () => {
  const [users, setUsers] = useState([
    { id: '1', name: 'Admin', email: 'admin@aquasense.com', role: 'Administrador' },
    { id: '2', name: 'Usuario', email: 'user@aquasense.com', role: 'Operador' },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });

  const handleEdit = (user) => {
    setEditingUser(user);
    setModalVisible(true);
  };

  const handleSave = () => {
    if (!editingUser.name || !editingUser.email || !editingUser.role) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    setUsers((prev) =>
      prev.map((u) => (u.id === editingUser.id ? editingUser : u))
    );
    setModalVisible(false);
  };

  const handleDelete = (id) => {
    Alert.alert('Eliminar Usuario', '¿Estás seguro?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Eliminar', style: 'destructive', onPress: () => setUsers(users.filter(u => u.id !== id)) },
    ]);
  };

  const handleAddUser = () => {
    if (users.length >= 2) {
      Alert.alert('Límite alcanzado', 'Solo se permiten dos perfiles.');
      return;
    }
    if (!newUser.name || !newUser.email || !newUser.role) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    const newUserData = { ...newUser, id: Date.now().toString() };
    setUsers([...users, newUserData]);
    setNewUser({ name: '', email: '', role: '' });
  };

  const renderItem = ({ item }) => (
    <View style={styles.userCard}>
      <View style={styles.info}>
        <Ionicons name="person-circle-outline" size={32} color="#003B73" />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
          <Text style={styles.role}>{item.role}</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleEdit(item)}>
          <Ionicons name="create-outline" size={24} color="#00A8E8" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Ionicons name="trash-outline" size={24} color="#FF6B6B" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Perfiles</Text>

      <View style={styles.addSection}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={newUser.name}
          onChangeText={(text) => setNewUser({ ...newUser, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={newUser.email}
          onChangeText={(text) => setNewUser({ ...newUser, email: text })}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Rol"
          value={newUser.role}
          onChangeText={(text) => setNewUser({ ...newUser, role: text })}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddUser}>
          <Text style={styles.buttonText}>Agregar Usuario</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Editar Perfil</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={editingUser?.name}
              onChangeText={(text) => setEditingUser({ ...editingUser, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Correo"
              value={editingUser?.email}
              onChangeText={(text) => setEditingUser({ ...editingUser, email: text })}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Rol"
              value={editingUser?.role}
              onChangeText={(text) => setEditingUser({ ...editingUser, role: text })}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.buttonText}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profiles;

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
    marginBottom: 20,
    textAlign: 'center',
  },
  addSection: {
    backgroundColor: '#E0F7FA',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#00A8E8',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  userCard: {
    backgroundColor: '#E0F7FA',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    gap: 15,
  },
  name: {
    fontSize: 18,
    color: '#003B73',
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#0077B6',
  },
  role: {
    fontSize: 14,
    color: '#0096C7',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000099',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003B73',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: '#CCCCCC',
    padding: 10,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#00A8E8',
    padding: 10,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
