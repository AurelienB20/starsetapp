import { StyleSheet, TextStyle } from 'react-native';
const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#FFFFFF',
    
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal : 10,
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
    justifyContent: 'flex-start',
    marginVertical: 10,
    paddingHorizontal : 10,
  },
  tag: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 15,
    margin: 5,
  },
  tagText: {
    fontSize: 12,
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
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 11,
    color: '#000',
  },
  photosContainer: {
    marginBottom: 20,
    width: '100%',
    flexDirection: 'row',
    flexWrap : 'wrap',
    justifyContent: 'space-between',
    flexGrow: 3
  },
  sectionHeader: {
    fontSize : 15,
    fontWeight: 'bold',
    color: '#000',
    marginVertical : 10,
    marginLeft : 5,
    padding : 8,
    backgroundColor : 'gray',
    borderRadius : 10,
    alignSelf: 'flex-start'
  },

  sectionHeaderText :{
    fontSize : 15,
    fontWeight: 'bold',
    color: '#000',
  },

  photo: {
    width: '33vw',
    height: '33vw',
    maxHeight : 300,
    maxWidth : 300,
    
  },
  reviewsContainer: {
    marginBottom: 20,
  },
  
  review: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal : 10,
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

  descriptionContainer : {
    backgroundColor : 'gray',
    marginHorizontal : 10,
    
    borderRadius : 10,
    padding : 20,
  },

  descriptionContainerText : {
    fontSize : 12
  }
});


export default styles;