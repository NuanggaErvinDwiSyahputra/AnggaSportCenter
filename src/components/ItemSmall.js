import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Receipt21, Clock, Message, Star1, Add} from 'iconsax-react-native';
import React from 'react';
import { fontType, colors } from '../theme';

const ItemSmall = ({item}) => {
  return (
    <View style={styles.cardItem}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.cardContent}>
        <View>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View>
                <TouchableOpacity style={styles.cardTitle} onPress={()=>{}}>
                 <View style={{backgroundColor: '#000000', borderRadius: 10}}>
                    <Add size={30} color={colors.white()}/>
                 </View>
                 </TouchableOpacity>
                </View>
            </View>
        <View style={{flexDirection:'row', gap:5, alignItems:'center'}}>
            <Star1 color='#FFB000' size={20}/>
            <Text style={styles.cardRate}>{item.rating}</Text>
            <Text style={styles.cardCategory}>{item.views}</Text>
        </View>
        <View style={{flexDirection:'row',gap:2,alignItems:'center'}}>
            <Text style={styles.cardRate}>{item.harga}</Text>
            <Text style={styles.cardCategory}>{item.bulan}</Text>
        </View>  
        </View>
        </View>
       
      </View>
 
  );
};

export default ItemSmall;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    paddingLeft:25,
    paddingRight:25,
    gap: 154,
  },
  cardItem: {
    backgroundColor: colors.backgroundColor(),
    flexDirection: 'row',
    borderWidth:3,
    borderColor: colors.black(),
    borderRadius: 10,
    borderRadius:15,
    marginLeft:25,
    marginRight:25,
    marginBottom:10,
    padding:10,
  },
  cardCategory: {
    color: colors.black(),
    fontSize: 12,
    fontWeight:'300',
    fontFamily: fontType['Pjs-Regular'],
  },
  cardTitle: {
    fontSize: 17,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardRate: {
    fontSize: 15,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
    fontWeight:'bold'
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