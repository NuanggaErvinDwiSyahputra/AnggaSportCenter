import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, TouchableOpacity, ImageBackground,Text} from 'react-native';
import { fontType, colors } from '../../theme';
import {Calendar} from 'react-native-calendars';
import FastImage from 'react-native-fast-image';
import {ArrowCircleLeft,MessageQuestion} from 'iconsax-react-native';

const Order = () => {
  const [selected, setSelected] = useState('');
  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={{flex: 1, justifyContent:'center'}}>
                <ImageBackground  style={Background.cover} 
                    source={{
                    uri: 'https://i.pinimg.com/564x/e2/68/f1/e268f19340244f33a2d9dbfa77482f27.jpg',
                    headers: {Authorization: 'someAuthToken'},
                    priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover} /> 
            </View>
            <View style={{position:'absolute', left: 20, top: 30}}>
                <TouchableOpacity>
                <ArrowCircleLeft color={colors.white()} variant="Linear" size={28} />
                </TouchableOpacity>
            </View>
        </View>    
        <Calendar
            onDayPress={day => {
                setSelected(day.dateString);
            }}
                markedDates={{
                [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
            }} />
        <View style={{marginLeft:20, marginRight:25, marginBottom:8, marginTop:5, justifyContent:'space-between'}}>
            <Text style={{fontSize:18,fontWeight:'400', color:colors.black()}}>Choose a Field</Text>
        </View>
        <View style={styles.cardItem}>
            <TouchableOpacity style={styles.cardContent}>
              <Text style={ButtonOrder.text}>Field 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContent}>
              <Text style={ButtonOrder.text}>Field 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContent}>
              <Text style={ButtonOrder.text}>Field 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContent}>
              <Text style={ButtonOrder.text}>Field 4</Text>
            </TouchableOpacity>
        </View>
        <View style={{marginLeft:20, marginRight:25, marginBottom:8, marginTop:10, justifyContent:'space-between'}}>
            <Text style={{fontSize:18,fontWeight:'400', color:colors.black()}}>Choose a Clock</Text>
        </View>
        <View style={Jam.cardItem}>
            <TouchableOpacity style={Jam.cardContent}>
              <Text style={Jam.text}>08.00 - 09.00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Jam.cardContent}>
              <Text style={Jam.text}>09.00 - 10.00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Jam.cardContent}>
              <Text style={Jam.text}>11.00 - 12.00</Text>
            </TouchableOpacity>
        </View>
        <View style={Jam.cardItem}>
            <TouchableOpacity style={Jam.cardContent}>
              <Text style={Jam.text}>12.00 - 13.00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Jam.cardContent}>
              <Text style={Jam.text}>13.00 - 14.00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Jam.cardContent}>
              <Text style={Jam.text}>14.00 - 15.00</Text>
            </TouchableOpacity>
        </View>
        <View style={Jam.cardItem}>
            <TouchableOpacity style={Jam.cardContent}>
              <Text style={Jam.text}>15.00 - 16.00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Jam.cardContent}>
              <Text style={Jam.text}>16.00 - 17.00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Jam.cardContent}>
              <Text style={Jam.text}>17.00 - 18.00</Text>
            </TouchableOpacity>
        </View>
        <View style={Jam.cardItem}>
            <TouchableOpacity style={Jam.cardContent}>
              <Text style={Jam.text}>18.00 - 19.00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Jam.cardContent}>
              <Text style={Jam.text}>19.00 - 20.00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Jam.cardContent}>
              <Text style={Jam.text}>20.00 - 21.00</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={ButtonOrder.editProfile}>
            <Text style={ButtonOrder.textEdit}>Booking</Text>
            </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
    
  );
};

export default Order;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white(),
    },
    header: {
        flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor:colors.black(),
      height:300,
    },
    cover:{     
    },
    cardItem: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal: 5,
      paddingVertical: 5,
      marginLeft:15,
      marginRight:15,
    },
    cardContent: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderRadius:15,
      backgroundColor:colors.backgroundColor(),
      borderWidth: 1,
      borderColor: colors.black()
    },
  });
  const Background = StyleSheet.create({
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
  });
  const ButtonOrder = StyleSheet.create({
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
        fontSize: 20,
        fontWeight:'bold',
        fontFamily: fontType['Pjs-Bold'],
        color: colors.white(),
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
      text: {
        fontSize: 18,
        fontFamily: fontType['Pjs-Regular'],
        color: colors.black(),
        textAlign:'center',
      },
  });
  const Jam = StyleSheet.create({
    cardItem: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal: 5,
      paddingVertical: 5,
      marginLeft:10,
      marginRight:10,
    },
    cardContent: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderRadius:15,
      backgroundColor:colors.backgroundColor(),
      borderWidth: 1,
      borderColor: colors.black()
    },
    text: {
      fontSize: 14,
      fontFamily: fontType['Pjs-Regular'],
      color: colors.black(),
      textAlign:'center',
    },
  }); 