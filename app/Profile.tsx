import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import styles from './styles/profilePageStyles';


const images = [
  { uri: 'https://laetliving.fr/wp-content/uploads/2022/10/laetliving-plus-beaux-paysages-malaisie-42.png' },
  { uri: 'https://laetliving.fr/wp-content/uploads/2022/10/laetliving-plus-beaux-paysages-malaisie-42.png' },
  { uri: 'https://laetliving.fr/wp-content/uploads/2022/10/laetliving-plus-beaux-paysages-malaisie-42.png' },
  { uri: 'https://laetliving.fr/wp-content/uploads/2022/10/laetliving-plus-beaux-paysages-malaisie-42.png' },
  { uri: 'https://laetliving.fr/wp-content/uploads/2022/10/laetliving-plus-beaux-paysages-malaisie-42.png' },
  { uri: 'https://laetliving.fr/wp-content/uploads/2022/10/laetliving-plus-beaux-paysages-malaisie-42.png' },
  { uri: 'https://laetliving.fr/wp-content/uploads/2022/10/laetliving-plus-beaux-paysages-malaisie-42.png' },
  { uri: 'https://laetliving.fr/wp-content/uploads/2022/10/laetliving-plus-beaux-paysages-malaisie-42.png' },
  // Ajoutez d'autres images si nécessaire
];

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://img.20mn.fr/wb0GX0XqSd2N4Y3ItfLEGik/1444x920_squeezie-youtubeur-chanteur-et-desormais-auteur-de-bd' }} // Replace with the actual profile picture URL
          style={styles.profilePicture}
        />
        <Text style={styles.profileName}>Chloé</Text>
        <Text style={styles.profileDescription}>
          Salut, je m'appelle Chloé. Je suis actuellement étudiante en droit à la fac d'Assas. Selon moi, le temps libre est une chance, elle permet de développer mes passions, en quelque chose d'utile pour les rêveurs de la communauté #STARSET.
        </Text>
      </View>

      <View style={styles.tagsContainer}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>👶 Babysitting</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>🐶 Petsitting</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>🛒 Courses</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>🏠 Ménage</Text>
        </View>
      </View>

      <View style = {styles.descriptionContainer}>
        <Text style = {styles.descriptionContainerText}> Salut, je m'appelle Chloé. Je suis actuellement étudiante en droit à la fac d'Assas.</Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>17</Text>
            <Text style={styles.statLabel}>Prestations effectuées</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>❤️</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>“Passionée”</Text>
            <Text style={styles.statLabel}>Caractère</Text>
          </View>
        </View>
      </View>
     
      
      
     <View style ={styles.sectionHeader}>
        Photos (25)
      </View>
        
     
      <View style={styles.photosContainer}>
        <Image source={ 'https://laetliving.fr/wp-content/uploads/2022/10/laetliving-plus-beaux-paysages-malaisie-42.png'} style={styles.photo} />
        <Image source={ 'https://laetliving.fr/wp-content/uploads/2022/10/laetliving-plus-beaux-paysages-malaisie-42.png'} style={styles.photo} />
        <Image source={ 'https://laetliving.fr/wp-content/uploads/2022/10/laetliving-plus-beaux-paysages-malaisie-42.png'} style={styles.photo} />
        <Image source={ 'https://laetliving.fr/wp-content/uploads/2022/10/laetliving-plus-beaux-paysages-malaisie-42.png'} style={styles.photo} />
      </View>

      <View style={styles.reviewsContainer}>
        <Text style={styles.sectionHeader}>Avis (12)</Text>
        <View style={styles.review}>
          <Text style={styles.reviewText}>Cela fait maintenant 2 mois que Alicia garde mes enfants, et je suis extrêmement satisfaite de son professionnalisme et de sa générosité. Merci ma chère Alicia ❤️</Text>
          <Text style={styles.reviewAuthor}>- Chloé.C</Text>
        </View>
        <View style={styles.review}>
          <Text style={styles.reviewText}>Alicia gardée mes neveux pour les vacances, maintenant ils l'adorent !</Text>
          <Text style={styles.reviewAuthor}>- Stéphane.G</Text>
        </View>
        <View style={styles.review}>
          <Text style={styles.reviewText}>Meilleure Babysitter que j'ai eu pour mes enfants, je pars travailler serein. Merci Alicia !</Text>
          <Text style={styles.reviewAuthor}>- Jérôme.B</Text>
        </View>
      </View>

      <View style={styles.pricingContainer}>
        <Text style={styles.pricingText}>15€/heure</Text>
        <TouchableOpacity style={styles.calendarButton}>
          <Text style={styles.calendarButtonText}>Voir le calendrier</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Ajouter au panier</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};



export default ProfileScreen;