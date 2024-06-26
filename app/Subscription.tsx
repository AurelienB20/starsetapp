import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { View, Text, StyleSheet } from "react-native";
import signupStyles from './styles/SignupStyles';



const Subscription = () => {
  

  useEffect(() => {
    // Vous pouvez ajouter ici des effets de montage ou de démontage
    // pour le composant Subscription
    // Par exemple : document.body.className = 'body-signup';
  }, []);

  const handleSubmit = async () => {
    // Effectuez ici votre logique de soumission du formulaire
    // Utilisez par exemple la bibliothèque axios pour effectuer des requêtes HTTP
    // Vous pouvez également utiliser des hooks de navigation pour naviguer vers une autre page
   
  };

  return (
    <View style={{ width : '100%',backgroundColor : '#000A2E',paddingHorizontal : 30,alignItems : 'center',justifyContent : 'center',marginHorizontal : 10,paddingTop : 50}}>
      
      <View style={styles.form}>
        <Text style={signupStyles.step}>Step 4 of 5</Text>
        <Text style={signupStyles.enter}>NOS OFFRES</Text>
        <View style={{width: '50%',
    height: 3,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    }}></View>
        <Text style={signupStyles.description}>
          Plongez dans un océan de savoir avec des offres pour tous les budgets
        </Text>
        {/* Vos composants d'offres ici */}
        <View style = {signupStyles.offers}>
        <View style={signupStyles.offer}>
  <Text style={signupStyles.offerName}>Offre "Me, Myself and I"</Text>
  <Text style={signupStyles.offerInfo}>1 écran : lecture en mode solo</Text>
  <br />
  <View >
  
    <Text style = {signupStyles.li}>• Accès aux animations</Text>
    <Text style = {signupStyles.li}>• Accès aux fonctionnalités</Text>
    <Text style = {signupStyles.li}>• Lecture hors ligne</Text>
    <Text style = {signupStyles.li}>• Accès aux exclusivités</Text>
    <Text style = {signupStyles.li}>• Compte enfant offert</Text>
    <Text style = {signupStyles.li}>• Jusqu'à quatre personnes</Text>
  </View>
  <View style={signupStyles.offerBottom}>
    <Text style={signupStyles.offerPrice}>6,90€<View style={signupStyles.perMonth}>/mois</View></Text>
    
    <Text style={signupStyles.discover}>Découvrir</Text>
  </View>
</View>
<View style={signupStyles.offer}>
  <Text style={signupStyles.offerName}>Offre "Zen"</Text>
  <Text style={signupStyles.offerInfo}>2 écrans : lecture en mode duo</Text>
  <View>
    <Text style={signupStyles.li}>• Accès aux animations</Text>
    <Text style={signupStyles.li}>• Accès aux fonctionnalités</Text>
    <Text style={signupStyles.li}>• Lecture hors ligne</Text>
    <Text style={signupStyles.li}>• Accès aux exclusivités</Text>
    <Text style={signupStyles.li}>• Compte enfant offert</Text>
    <Text style={signupStyles.li}>• Jusqu'à quatre personnes</Text>
  </View>
  <View style={signupStyles.offerBottom}>
    <Text style={signupStyles.offerPrice}>10,90€<View style={signupStyles.perMonth}>/mois</View></Text>
    <Text style={signupStyles.discover}>Découvrir</Text>
  </View>
</View>

<View style={signupStyles.offer}>
  <Text style={signupStyles.offerName}>Offre XXL</Text>
  <Text style={signupStyles.offerInfo}>4 écrans : un plaisir familial à partager avec bonheur</Text>
  <View>
    <Text style={signupStyles.li}>• Accès aux animations</Text>
    <Text style={signupStyles.li}>• Accès aux fonctionnalités</Text>
    <Text style={signupStyles.li}>• Lecture hors ligne</Text>
    <Text style={signupStyles.li}>• Accès aux exclusivités</Text>
    <Text style={signupStyles.li}>• Compte enfant offert</Text>
    <Text style={signupStyles.li}>• Jusqu'à quatre personnes</Text>
  </View>
  <View style={signupStyles.offerBottom}>
    <Text style={signupStyles.offerPrice}>14,90€<View style={signupStyles.perMonth}>/mois</View></Text>
    <Text style={signupStyles.discover}>Découvrir</Text>
  </View>
</View>

<View style={signupStyles.offer}>
  <Text style={signupStyles.offerName}>Offre "Mieux que le Crous"</Text>
  <Text style={signupStyles.offerInfo}>réservé aux étudiants : lecture en mode solo</Text>
  <View>
    <Text style={signupStyles.li}>• Accès aux animations</Text>
    <Text style={signupStyles.li}>• Accès aux fonctionnalités</Text>
    <Text style={signupStyles.li}>• Lecture hors ligne</Text>
    <Text style={signupStyles.li}>• Accès aux exclusivités</Text>
    <Text style={signupStyles.li}>• Compte enfant offert</Text>
    <Text style={signupStyles.li}>• Jusqu'à quatre personnes</Text>
  </View>
  <View style={signupStyles.offerBottom}>
    <Text style={signupStyles.offerPrice}>6,90€<View style={signupStyles.perMonth}>/mois</View></Text>
    <Text style={signupStyles.discover}>Découvrir</Text>
  </View>
</View>
</View>


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Styles supplémentaires pour le conteneur principal
  },
  form: {
    flex: 1,
    // Styles supplémentaires pour le formulaire
  },
  step: {
    // Styles pour l'étape du formulaire
  },
  offerTitle: {
    // Styles pour le titre des offres
  },
  description: {
    // Styles pour la description des offres
  },
  button: {
    // Styles pour le bouton de soumission
  },
});

export default Subscription;