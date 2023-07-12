import { StyleSheet, TextStyle } from 'react-native';

const popUpStyles = StyleSheet.create({
    popupcomp: {
        
        
        backgroundColor: 'rgb(8, 22, 93)',
        fontFamily: 'Source Sans Pro, sans-serif',
        overflowX: 'hidden',
        color: 'white',
        lineHeight: 25,
      },
      popupcompContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal : '3vw',
        color : 'white'
        
      },
      coverDiv: {
        width: '100vw',
        height : '160vw',
        backgroundColor : 'red'
      },

      cover: {
       marginTop : 30, 
       height : '320px',
       width : '100vw',
       resizeMode : "cover"

      },


      right: {
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        alignSelf: 'stretch',
      },
      top: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
      },
      titleDiv: {
        
        height: 100,
        width: '100%',
        resizeMode: "contain",
        
      },
      title: {
        height: '50%',
        width: '100%',
        
      },
      authorDateGenre: {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 'bold',
        color : 'white',
        fontSize: 13,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 30,
      },
      author: {
        fontStyle: 'italic',
        color : 'white',
        fontSize : 11
      },
      dateGenre: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '90%',
        flexWrap: 'wrap',
        color : 'white',
        fontSize : 11
      },
      icon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginBottom: 30,
      },
      iconLeft: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
      },
      stars: {
        display: 'flex',
        flexDirection : 'row',
        gap: 5,
      },
      heart: {
        width: 20,
        height: 20,
        resizeMode : 'contain'
      },
      star: {
        width: 20,
        height: 20,
      },
      sommaire: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        fontSize : 'white'
      },
      desc: {
        fontSize: 16,
        fontWeight: '200',
        color : 'white',
        marginVertical: 10,
        
        height: '100%',
        overflowY: 'auto',
        textAlign : 'justify'
      //overflow: 'auto',
      },
      buttons: {
        display: 'flex',
        flexDirection: 'column',
        gap : 10,
        marginBottom : 10
        
      },
      active: {
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
      },
      tabContent: {
        height: 200,
        paddingBottom: 10,
      },
      similarBooks: {
        height: 200,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 20,
        flexWrap: 'wrap',
      },
      chapters: {
        height: '100%',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        paddingVertical : 10,
        marginVertical : 10
      },
      chapter: {
        borderRadius: 6,
        paddingLeft: 10,
        paddingRight: 10,
      },
      chapterTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color : 'white',
      },
      chapterContent: {
        fontSize: 16,
        color : 'white'
      },
      bookImage: {
        height: 172,
        width: 129,
      },
      bookTitle: {
        fontWeight: 'bold',
        color : 'white'
      },
});

export default popUpStyles;