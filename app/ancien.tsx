import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput } from 'react-native';
import profileStyles from './styles/ProfileStyles';
import ProfileAccount from './ui/ProfileAccount';
import Button from './ui/Button';

const ProfileScreen = () => {
  return (
    <View style={profileStyles.profile}>
      
      <View style={profileStyles.content}>
        <Text style={profileStyles.qui}>Qui est-ce ?</Text>
        <View style={profileStyles.photo}>
          <ProfileAccount image={require('../assets/images/chapter-logo.png')} name="Julie" />
          <ProfileAccount image={require('../assets/images/chapter-logo.png')} name="Théo" />
          <ProfileAccount image={require('../assets/images/chapter-logo.png')} name="Matthieu" />
          <ProfileAccount image={require('../assets/images/chapter-logo.png')} name="Matthieu" />
          
        </View>
        <View style={profileStyles.addUserForm}>
        <View style={profileStyles.addImage}></View>
          
          <View style={{ marginTop: 8 , display : 'flex', flexDirection : 'column'}}>
          <Text style={profileStyles.headerAddUser}>AJOUTER UN PROFIL</Text>
            
            <TextInput
              style={profileStyles.newProfileInput}
              
            />
            <View style = {{display : 'flex', flexDirection : 'row' , marginTop : 10}}>
            <TouchableOpacity
      style={[profileStyles.checkbox, {marginTop : 3}]}
      
    ></TouchableOpacity>
            <Text style={{ fontSize :14, color : 'white', marginTop : 0 }}>Compte enfant :</Text>
            </View>
       
            <Button
              backgroundColor="#EAC702"
              textColor="black"
              variant="contained"
              style={{ width: '100%', height: 50, marginTop: 16, fontSize: 20 }}
            >
              Suivant
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  profileDescription: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginVertical: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
  },
  tag: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  tagText: {
    fontSize: 16,
    color: '#000',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 16,
    color: '#000',
  },
  photosContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  reviewsContainer: {
    marginBottom: 20,
  },
  review: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  reviewText: {
    fontSize: 16,
    color: '#000',
  },
  reviewAuthor: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
  pricingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  pricingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  calendarButton: {
    backgroundColor: '#00FF00',
    padding: 10,
    borderRadius: 5,
  },
  calendarButtonText: {
    fontSize: 16,
    color: '#000',
  },
  addButton: {
    backgroundColor: '#00FF00',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default ProfileScreen;