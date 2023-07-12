import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import ButtonPopUp from '../ButtonPopUp';
import { BookChapter } from '../models/ChapterBook';
import { Book } from '../models/Book';
import  popUpStyles  from '../styles/PopUpStyles'; // Assurez-vous d'importer correctement les styles

interface PopUpCompProps {
  trigger: boolean;
  image: string;
  title: string;
  author: string;
  date: string;
  genre: string[];
  description: string;
  chapters: BookChapter[];
  similarBooks: Book[];
}

const PopUpComp:React.FC<PopUpCompProps> = ({
  trigger,
  image,
  title,
  author,
  date,
  genre,
  description,
  chapters,
  similarBooks,
}) => {
  const [selectedTab, setSelectedTab] = useState('description');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return trigger ? (
    <View style={popUpStyles.popupcomp}>
      <View style={popUpStyles.popupcompContent}>
       
          <Image source={{ uri: image }} style={popUpStyles.cover} />
        
        <View style={popUpStyles.right}>
          <View style={popUpStyles.top}>
            
              <Image source={{ uri: title }} style={popUpStyles.titleDiv} />
            
            <View style={popUpStyles.authorDateGenre}>
              <Text style={popUpStyles.author}>Auteur: {author}</Text>
              
                <Text style ={{color : 'white', fontSize : 12}} >{date} | {genre.join(' | ')}</Text>
                
              
            </View>
            
            <View style={popUpStyles.icon}>
              <View style={popUpStyles.iconLeft}>
                <Image source={require('../../assets/images/coeur-blanc.png')} style={popUpStyles.heart} />
                <View style={popUpStyles.stars}>
                  <Image source={require('../../assets/images/étoile-avis.png')} style={popUpStyles.star} />
                  <Image source={require('../../assets/images/étoile-avis.png')} style={popUpStyles.star} />
                  <Image source={require('../../assets/images/étoile-avis.png')} style={popUpStyles.star} />
                  <Image source={require('../../assets/images/étoile-avis.png')} style={popUpStyles.star} />
                  <Image source={require('../../assets/images/étoile-avis.png')} style={popUpStyles.star} />
                </View>
              </View>
              <View >
                <Image source={require('../../assets/images/étoile-avis.png')} style={popUpStyles.star} />
              </View>
            </View>
            <View style={popUpStyles.buttons}>
            <ButtonPopUp style={{width : '90vw'}} backgroundColor="white" textColor="black" icon={require('../../assets/images/LIVRE.png')}>
              LECTURE
            </ButtonPopUp>
            <ButtonPopUp  style={{width : '90vw'}} backgroundColor="white" textColor="black" icon={require('../../assets/images/plus.png')}>
              LIBRARY
            </ButtonPopUp>
          </View>
          </View>
          <View style={popUpStyles.sommaire}>
            <Text
              style={[
                //popUpStyles.somDesc,
                { fontWeight: selectedTab === 'description' ? 'bold' : 'normal' ,color : 'white' },
              ]}
              onPress={() => handleTabClick('description')}
            >
              DESCRIPTION
            </Text>
            <Text
              style={[
                //popUpStyles.somChap,
                { fontWeight: selectedTab === 'chapters' ? 'bold' : 'normal',color : 'white' },
              ]}
              onPress={() => handleTabClick('chapters')}
            >
              CHAPITRES
            </Text>
            <Text
              style={[
                //popUpStyles.somLiv,
                { fontWeight: selectedTab === 'similarBooks' ? 'bold' : 'normal',color : 'white'  },
              ]}
              onPress={() => handleTabClick('similarBooks')}
            >
              LIVRES SIMILAIRES
            </Text>
          </View>
          <View style={popUpStyles.tabContent}>
            {selectedTab === 'description' && <Text style={popUpStyles.desc}>{description}</Text>}
            {selectedTab === 'chapters' && (
              <View style={popUpStyles.chapters}>
                {chapters.map((chapter, index) => (
                  <View key={index} style={popUpStyles.chapter}>
                    <Text style={popUpStyles.chapterTitle}>{chapter.title}</Text>
                    <Text style={popUpStyles.chapterContent}>{chapter.description}</Text>
                  </View>
                ))}
              </View>
            )}
            {selectedTab === 'similarBooks' && (
              <View style={popUpStyles.similarBooks}>
                {similarBooks.map((book, index) => (
                  <View key={index} //style={popUpStyles.bookContainer}
                  >
                    <Image source={{ uri: book.image }} style={popUpStyles.bookImage} />
                    <Text style={popUpStyles.bookTitle}>{book.title}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
          
        </View>
      </View>
    </View>
  ): null;
};

export default PopUpComp;
