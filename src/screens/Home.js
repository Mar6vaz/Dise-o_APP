// screens/Home.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Animatable.View animation="fadeInDown" style={styles.header}>
        <Text style={styles.title}>Bienvenido a AquaSense</Text>
        <Text style={styles.description}>
          AquaSense es un sistema inteligente de monitoreo de calidad del agua que registra en tiempo real los niveles de oxígeno disuelto, pH y temperatura.
        </Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={300} style={styles.gallerySection}>
        <Text style={styles.sectionTitle}>Galería</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={{ uri: 'https://complementosparaaves.com/blog/wp-content/uploads/2024/10/Designer-4.jpeg' }}
            style={styles.image}
            resizeMode="cover"
          />
          <Image
            source={{ uri: 'https://pecesmarinos.es/wp-content/uploads/2023/04/peces-cirujano-naso-elegans.jpg' }}
            style={styles.image}
            resizeMode="cover"
          />
          <Image
            source={{ uri: 'https://www.zooplus.es/magazine/wp-content/uploads/2021/02/Goldfish.webp' }}
            style={styles.image}
            resizeMode="cover"
          />
        </ScrollView>

        {/* Segundo carrusel separado */}
        <Text style={styles.sectionSubtitle}>Más vistas</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.secondCarousel}>
          <Image
            source={{ uri: 'https://complementosparaaves.com/blog/wp-content/uploads/2024/10/Designer-4.jpeg' }}
            style={styles.image}
            resizeMode="cover"
          />
          <Image
            source={{ uri: 'https://pecesmarinos.es/wp-content/uploads/2023/04/peces-cirujano-naso-elegans.jpg' }}
            style={styles.image}
            resizeMode="cover"
          />
          <Image
            source={{ uri: 'https://www.zooplus.es/magazine/wp-content/uploads/2021/02/Goldfish.webp' }}
            style={styles.image}
            resizeMode="cover"
          />
        </ScrollView>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={500} style={styles.teamSection}>
        <Text style={styles.sectionTitle}>Equipo de Trabajo</Text>
        <Text style={styles.teamText}>
          - Mariela Vazquez González{"\n"}
          Lider del equipo, Desarrollo Frontend, Desarrollo IoT{"\n"}
          - Fernanda Rios Corrales{"\n"}
          Desarrollo Frontend, Desarrollo IoT{"\n"}
          - Norberto Hernández Ramírez{"\n"}
          Desarrollo Backend, Desarrollo IoT {"\n"}
          - Gregorio Rivas García{"\n"}
          Desarrollo Backend, Desarrollo IoT {"\n"}
        </Text>
      </Animatable.View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    backgroundColor: '#003B73',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 10,
  },
  description: {
    color: '#E0E0E0',
    fontSize: 16,
  },
  gallerySection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#003B73',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#0077B6',
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 0,
  },
  secondCarousel: {
    paddingHorizontal: 0,
    marginBottom: 20, // espacio extra entre carrusel y siguiente sección
  },
  image: {
    width: 200,
    height: 120,
    borderRadius: 15,
    marginRight: 10,
    backgroundColor: '#ccc',
  },
  teamSection: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  teamText: {
    fontSize: 16,
    color: '#00A8E8',
    lineHeight: 28,
  },
});
