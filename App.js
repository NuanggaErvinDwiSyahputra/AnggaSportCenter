import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, TextInput, TouchableOpacity, handleSearchPress} from 'react-native';
import {Notification, Receipt21, Clock, Message, Menu, SearchNormal, searchText, Star1, Add, Home, Book, ProfileCircle, } from 'iconsax-react-native';
import { fontType, colors } from './src/theme';

const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <Text style={{fontSize:27, marginLeft:25,fontWeight:'bold',color:colors.black(), fontFamily: fontType['Raleway-Bold'],marginTop:15}}>
            Find Your Favorite{"\n"}Sport Center
        </Text>
      </View>
      <View style={{paddingHorizontal: 24, marginTop: 10}}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Find your best"
            onChangeText={handleSearchPress}
            value={searchText}
            placeholderTextColor="black"
          />
          <View style={styles.searchButtonContainer}>
            <TouchableOpacity style={styles.searchButton}>
              <SearchNormal
                color={colors.black()}
                variant="Linear"
                size={24}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{marginLeft:25, marginRight:25, marginBottom:8, marginTop:15,flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Text style={{fontSize:18,fontWeight:'600', color:colors.black()}}>Choose Your Sport Center</Text>
        <Text style={{fontSize:13, color:colors.blue()}}>See All</Text>
      </View>
      <View style={styles.listBlog}>
        <ScrollView
        showsHorizontalScrollIndicator={true}
        horizontal
        contentContainerStyle={{gap: 15}}>
            <View style={{...itemHorizontal.cardItem, marginLeft: 25}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://i.pinimg.com/564x/80/f4/ab/80f4ab1dc9552bfe159a7d527e36e33f.jpg',
              }}>
             
            </ImageBackground>
            <View style={{padding:10}}>
              <Text style={itemHorizontal.cardTitle}>Badminton</Text>
              <View style={{marginVertical:8, flexDirection:'row', gap:10, alignItems:'center'}}>
                <Star1 color='#FFB000' size={15}/>
                <View style={{flexDirection:'row', alignItems:'center', gap: 5}}>
                  <Text style={{color: colors.black(), fontWeight:'bold'}}>4.9</Text>
                  <Text>(10k reviews)</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',gap:2}}>
                <Text style={{fontWeight:'bold', color: colors.black(), fontSize:14}}>$2,5</Text>
                <Text style={{fontWeight:'bold', fontSize:14}}>/hr</Text>  
              </View>  
            </View>
          </View>
          <View style={{...itemHorizontal.cardItem, marginLeft: 5}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://i.pinimg.com/474x/02/56/44/0256443cf406ba2f28b9f4d812b70c5f.jpg',
              }}>
             
            </ImageBackground>
            <View style={{padding:10}}>
              <Text style={itemHorizontal.cardTitle}>Football</Text>
              <View style={{marginVertical:8, flexDirection:'row', gap:10, alignItems:'center'}}>
                <Star1 color='#FFB000' size={15}/>
                <View style={{flexDirection:'row', alignItems:'center', gap: 5}}>
                  <Text style={{color: colors.black(), fontWeight:'bold'}}>4.2</Text>
                  <Text>(10k reviews)</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',gap:2}}>
                <Text style={{fontWeight:'bold', color: colors.black(), fontSize:14}}>$135,5</Text>
                <Text style={{fontWeight:'bold', fontSize:14}}>/hr</Text>  
              </View>  
            </View>
          </View>
          <View style={{...itemHorizontal.cardItem, marginLeft: 5}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://i.pinimg.com/474x/86/a8/32/86a832d631b6efee9276539d1cef1fcf.jpg',
              }}>
             
            </ImageBackground>
            <View style={{padding:10}}>
              <Text style={itemHorizontal.cardTitle}>Futsal</Text>
              <View style={{marginVertical:8, flexDirection:'row', gap:10, alignItems:'center'}}>
                <Star1 color='#FFB000' size={15}/>
                <View style={{flexDirection:'row', alignItems:'center', gap: 5}}>
                  <Text style={{color: colors.black(), fontWeight:'bold'}}>4.4</Text>
                  <Text>(10k reviews)</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',gap:2}}>
                <Text style={{fontWeight:'bold', color: colors.black(), fontSize:14}}>$10</Text>
                <Text style={{fontWeight:'bold', fontSize:14}}>/hr</Text>  
              </View>  
            </View>
          </View>
          <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://i.pinimg.com/474x/e2/43/a0/e243a080fddeea991c172e0c8827d084.jpg',
              }}>          
            </ImageBackground>
            <View style={{padding:10}}>
              <Text style={itemHorizontal.cardTitle}>Basketball</Text>
              <View style={{marginVertical:8, flexDirection:'row', gap:10, alignItems:'center'}}>
                <Star1 color='#FFB000' size={15}/>
                <View style={{flexDirection:'row', alignItems:'center', gap: 5}}>
                  <Text style={{color: colors.black(), fontWeight:'bold'}}>5.0</Text>
                  <Text>(10k reviews)</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',gap:2}}>
                <Text style={{fontWeight:'bold', color: colors.black(), fontSize:14}}>$40</Text>
                <Text style={{fontWeight:'bold', fontSize:14}}>/hr</Text>  
              </View>  
            </View>
          </View>
          <View style={{...itemHorizontal.cardItem, marginLeft: 24, marginRight:24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://i.pinimg.com/474x/78/e7/0a/78e70a1ce50c01aa0c8abb36d8788d8f.jpg',
              }}>          
            </ImageBackground>
            <View style={{padding:10}}>
              <Text style={itemHorizontal.cardTitle}>Volleyball</Text>
              <View style={{marginVertical:8, flexDirection:'row', gap:10, alignItems:'center'}}>
                <Star1 color='#FFB000' size={15}/>
                <View style={{flexDirection:'row', alignItems:'center', gap: 5}}>
                  <Text style={{color: colors.black(), fontWeight:'bold'}}>4.7</Text>
                  <Text>(10k reviews)</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',gap:2}}>
                <Text style={{fontWeight:'bold', color: colors.black(), fontSize:14}}>$28</Text>
                <Text style={{fontWeight:'bold', fontSize:14}}>/hr</Text>  
              </View>  
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{marginLeft:25, marginRight:25, marginTop:15,flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Text style={{fontSize:18,fontWeight:'600', color:colors.black()}}>Choose Your Sport Class</Text>
      </View>
      <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.pinimg.com/474x/80/c7/f2/80c7f2083cf012318b17a67433d50e13.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                <Text style={{...itemVertical.cardTitle, fontSize:15}}>Badminton CLub</Text>
                  <View style={{ flexDirection:'row', gap:10, alignItems:'center'}}>
                    <Star1 color='#FFB000' size={15}/>
                    <View style={{flexDirection:'row', alignItems:'center', gap: 5}}>
                      <Text style={{color: colors.black(), fontWeight:'bold'}}>4.9</Text>
                      <Text>(10k reviews)</Text>
                    </View>  
                  </View>
                  <View style={{flexDirection:'row',gap:2}}>
                      <Text style={{fontWeight:'bold', color: colors.black(), fontSize:14}}>$26,8</Text>
                      <Text style={{fontWeight:'bold', fontSize:14}}>/month</Text>  
                  </View>  
                  <View style={{...itemVertical.cardItem, flexDirection: 'row', justifyContent:'center', marginLeft:150,padding:5}}>
                <View style={{backgroundColor: '#000000', padding:3, borderRadius: 10}}>
                <Add size={30} color={colors.white()}/>
                </View>
              </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.pinimg.com/474x/8a/93/16/8a9316bae750d282ae0fe02034bee097.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                <Text style={{...itemVertical.cardTitle, fontSize:15}}>Football CLub</Text>
                  <View style={{flexDirection:'row', gap:10, alignItems:'center'}}>
                    <Star1 color='#FFB000' size={15}/>
                    <View style={{flexDirection:'row', alignItems:'center', gap: 5}}>
                      <Text style={{color: colors.black(), fontWeight:'bold'}}>4,9</Text>
                      <Text>(10k reviews)</Text>
                    </View>  
                  </View>
                  <View style={{flexDirection:'row',gap:2}}>
                      <Text style={{fontWeight:'bold', color: colors.black(), fontSize:14}}>$100</Text>
                      <Text style={{fontWeight:'bold', fontSize:14}}>/month</Text>  
                  </View>  
                  <View style={{...itemVertical.cardItem, flexDirection: 'row', justifyContent:'center', marginLeft:150,padding:5}}>
                <View style={{backgroundColor: '#000000', padding:3, borderRadius: 10}}>
                <Add size={30} color={colors.white()}/>
                </View>
                </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.pinimg.com/474x/82/79/0e/82790ed282d1dd883636ff42b169e88b.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                <Text style={{...itemVertical.cardTitle, fontSize:15}}>Futsal CLub</Text>
                  <View style={{flexDirection:'row', gap:10, alignItems:'center'}}>
                    <Star1 color='#FFB000' size={15}/>
                    <View style={{flexDirection:'row', alignItems:'center', gap: 5}}>
                      <Text style={{color: colors.black(), fontWeight:'bold'}}>4,9</Text>
                      <Text>(10k reviews)</Text>
                    </View>  
                  </View>
                  <View style={{flexDirection:'row',gap:2}}>
                      <Text style={{fontWeight:'bold', color: colors.black(), fontSize:14}}>$40,3</Text>
                      <Text style={{fontWeight:'bold', fontSize:14}}>/month</Text>  
                  </View>  
                  <View style={{...itemVertical.cardItem, flexDirection: 'row', justifyContent:'center', marginLeft:150,padding:5}}>
                <View style={{backgroundColor: '#000000', padding:3, borderRadius: 10}}>
                <Add size={30} color={colors.white()}/>
                </View>
                </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.pinimg.com/474x/a0/90/1d/a0901d347acca02afa337a919986b7a5.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                <Text style={{...itemVertical.cardTitle, fontSize:15}}>Basketball CLub</Text>
                  <View style={{flexDirection:'row', gap:10, alignItems:'center'}}>
                    <Star1 color='#FFB000' size={15}/>
                    <View style={{flexDirection:'row', alignItems:'center', gap: 5}}>
                      <Text style={{color: colors.black(), fontWeight:'bold'}}>4,9</Text>
                      <Text>(10k reviews)</Text>
                    </View>  
                  </View>
                  <View style={{flexDirection:'row',gap:2}}>
                      <Text style={{fontWeight:'bold', color: colors.black(), fontSize:14}}>$68,5</Text>
                      <Text style={{fontWeight:'bold', fontSize:14}}>/month</Text>  
                  </View>  
                  <View style={{...itemVertical.cardItem, flexDirection: 'row', justifyContent:'center', marginLeft:150,padding:5}}>
                <View style={{backgroundColor: '#000000', padding:3, borderRadius: 10}}>
                <Add size={30} color={colors.white()}/>
                </View>
                </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.pinimg.com/474x/82/b8/7a/82b87a592f0f6081cd42f00bf2395fc1.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                <Text style={{...itemVertical.cardTitle, fontSize:15}}>Volley CLub</Text>
                  <View style={{flexDirection:'row', gap:10, alignItems:'center'}}>
                    <Star1 color='#FFB000' size={15}/>
                    <View style={{flexDirection:'row', alignItems:'center', gap: 5}}>
                      <Text style={{color: colors.black(), fontWeight:'bold'}}>4,9</Text>
                      <Text>(10k reviews)</Text>
                    </View>  
                  </View>
                  <View style={{flexDirection:'row',gap:2}}>
                      <Text style={{fontWeight:'bold', color: colors.black(), fontSize:14}}>$57</Text>
                      <Text style={{fontWeight:'bold', fontSize:14}}>/month</Text>  
                  </View>  
                  <View style={{...itemVertical.cardItem, flexDirection: 'row', justifyContent:'center', marginLeft:150,padding:5}}>
                <View style={{backgroundColor: '#000000', padding:3, borderRadius: 10}}>
                <Add size={30} color={colors.white()}/>
                </View>
                </View>
                </View>
              </View>
            </View>
          </View>
        </View>
    </ScrollView>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={{flexDirection: 'row', alignItems:'center', gap:15, justifyContent:'center', fontFamily: fontType['RalewayB']}}>
        <Menu size="24" color={colors.black()}/>
      </View>
      <Image
      style={{width:50, height:50, borderRadius:100,}}
              source={{
                uri: 'https://i.pinimg.com/474x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
              }}
            />
      </View>
      <ListBlog/>  
      <View style= {styles.footer}>
        <TouchableOpacity onPress={() => 'home'} style={styles.startbottom}>
        <Home style={{marginLeft:30,marginRight:25}} color={colors.darkModeBlack()} variant='linear' size={25}/>
        <Book style={{marginLeft:30,marginRight:25}} color={colors.darkModeBlack()} variant='linear' size={25}/>
        <Message style={{marginLeft:30,marginRight:25}} color={colors.darkModeBlack()} variant='linear' size={25}/>
        <ProfileCircle style={{marginLeft:30,marginRight:25}} color={colors.darkModeBlack()} variant='linear' size={25}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginHorizontal: 3,
    
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
    color: '#000000',
    
  },
});
const styles = StyleSheet.create({
  searchButtonContainer: {
    paddingLeft: 14,
    paddingRight:20,
  },
  
  footer: {
    height: 40,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  startbottom: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 25,
    color : 'black'
  },

  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 2,
    color: 'black',
    height: 45,
  },

  searchContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(248, 246, 244)',
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 8,
    paddingTop:8,
    paddingBottom:4
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    gap: 10,
  },
});
const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    paddingLeft:25,
    paddingRight:25,
    gap: 154,
  },
  cardItem: {
    backgroundColor: colors.white(),
    flexDirection: 'row',
    borderWidth:3,
    borderColor: colors.black(),
    borderRadius: 10,
    borderRadius:15,
    padding:10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 17,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 310,
    flexDirection:'column',
    backgroundColor: 'white',
    borderRadius:15,
    padding:10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 17,
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
});