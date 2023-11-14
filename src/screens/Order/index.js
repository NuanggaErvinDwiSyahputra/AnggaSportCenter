import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';
import {fontType, colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import ItemHome from '../../components/itemOrder';
import { BlogList } from '../../../data';

const Order = () => {
  const verticalData = BlogList.slice(1);
  
  return (
    <ScrollView>
    <View>
      {verticalData.map((item, index) => (
        <ItemHome  item={item} key={index} />
      ))}
    </View>
    </ScrollView>
  );
};

const navigation = useNavigation();

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
    backgroundColor: colors.black(),
    height: 300,
  },
  cover: {},
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: colors.backgroundColor(),
    borderWidth: 1,
    borderColor: colors.black(),
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
    resizeMode: 'center',
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
    fontWeight: 'bold',
    fontFamily: fontType['Pjs-Bold'],
    color: colors.white(),
  },
  cardProfile: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 150,
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 80,
    backgroundColor: colors.white(),
  },
  text: {
    fontSize: 18,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
    textAlign: 'center',
  },
});
const Jam = StyleSheet.create({
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: colors.backgroundColor(),
    borderWidth: 1,
    borderColor: colors.black(),
  },
  text: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
    textAlign: 'center',
  },
});
