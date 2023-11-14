import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react';
import {fontType, colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const itemBooking = ({item}) => {
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Text style={styles.cardRate}>{item.tanggal}</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 2, alignItems: 'center'}}>
            <Text style={styles.cardRate}>{item.jam}</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 2, alignItems: 'center'}}>
            <Text style={styles.cardRate}>{item.lapangan}</Text>
          </View>
        </View>
      </View>
  );
};

const navigation = useNavigation();

export default itemBooking;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    paddingLeft: 25,
    paddingRight: 25,
    gap: 154,
  },
  cardItem: {
    backgroundColor: colors.backgroundColor(),
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: colors.black(),
    borderRadius: 10,
    borderRadius: 15,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 10,
    padding: 10,
  },
  cardCategory: {
    color: colors.black(),
    fontSize: 12,
    fontWeight: '300',
    fontFamily: fontType['Pjs-Regular'],
  },
  cardTitle: {
    fontSize: 17,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardRate: {
    fontSize: 15,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
    fontWeight: '500',
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 90,
    height: 130,
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
