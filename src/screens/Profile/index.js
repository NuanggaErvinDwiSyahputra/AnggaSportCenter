import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import {InfoCircle, LogoutCurve, Setting2, MessageQuestion,Home2,Book,ProfileCircle} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import {ProfileData} from '../../../data';
import FastImage from 'react-native-fast-image';
import { Image } from 'react-native-svg';

const Profile = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flex: 1, justifyContent:'center'}}>
          <ImageBackground  style={profile.cover} 
            source={{
              uri: ProfileData.image,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover} /> 
         </View>
        </View>

        <View style={styles.cardContainer}>
        <Text style={styles.title}>Profile</Text>
          <View style={profile.cardProfile}>
            <FastImage  style={profile.pic}
            source={{
              uri: ProfileData.image2,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover} /> 
          </View>
          <View>
              <Text style={profile.username}>{ProfileData.name}</Text>
              <TouchableOpacity style={profile.editProfile}>
              <Text style={profile.textEdit}>Edit Profile</Text>
            </TouchableOpacity>
            </View>
          <View style={styles.cardItem}>
            <TouchableOpacity style={styles.cardContent}>
              <View style={{paddingRight: 16}}>
                <MessageQuestion color={colors.black()} variant="Linear" size={24} />
              </View>
              <Text style={profile.text}>Help & FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContent}>
              <View style={{paddingRight: 16}}>
                <InfoCircle color={colors.black()} variant="Linear" size={24} />
              </View>
              <Text style={profile.text}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContent}>
              <View style={{paddingRight: 16}}>
                <Setting2 color={colors.black()} variant="Linear" size={24} />
              </View>
              <Text style={profile.text}>Pengaturan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContent}>
              <View style={{paddingRight: 16}}>
                <LogoutCurve color={colors.black()} variant="Linear" size={24} />
              </View>
              <Text style={profile.text}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  export default Profile;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white(),
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
      paddingLeft: 35,
      color : 'black'
    },
    cardContainer: {
      flex: 1,
      backgroundColor: colors.backgroundColor(),
      borderRadius: 10,
      marginHorizontal: 20,
      marginTop:-95,
    },
    header: {
    
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor:colors.black(),
      height:300,
    },
    title: {
      fontSize: 22,
      fontFamily: fontType['Pjs-Medium'],
      color: colors.black(),
      textAlign:'center',
      padding:5,
      fontWeight:'bold'
    },
    cardItem: {
      paddingHorizontal: 22,
      paddingVertical: 16,
    },
    cardContent: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 30,
    },
  });
  const profile = StyleSheet.create({
    pic: {
      width: 150,
      height: 150,
      borderRadius: 100,
    },
    cover: {
      flex: 1,
      justifyContent: 'center',
      resizeMode:'center'
    },
    title: {
      fontSize: 22,
      fontFamily: fontType['Pjs-Bold'],
      color: 'rgb(148, 108, 82)',
    },
    text: {
      fontSize: 20,
      fontFamily: fontType['Pjs-Light'],
      color: colors.black(),
      textAlign:'center',
    },
    username: {
      fontSize: 20,
      fontFamily: fontType['Pjs-Light'],
      color: colors.black(),
      textAlign:'center',
      marginBottom:10
    },
    cardProfile: {
      justifyContent: 'space-between',
      alignItems: 'center',
      height:150,
      marginLeft:100,
      marginRight:100,
      borderRadius:80,
      backgroundColor:colors.white(),
    },
    name: {
      fontSize: 14,
      fontFamily: fontType['Pjs-Bold'],
      color: 'rgb(148, 108, 82)',
    },
    info: {
      fontSize: 12,
      fontFamily: fontType['Pjs-Medium'],
      color: 'rgba(22, 179, 179, 0.7)',
    },
    editProfile: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.black(),
      paddingVertical: 5,
      marginHorizontal: 16,
      marginBottom: 5,
      borderRadius: 12,
    },
    textEdit: {
      fontSize: 18,
      fontWeight:'bold',
      fontFamily: fontType['Pjs-Bold'],
      color: colors.white(),
    },
  });