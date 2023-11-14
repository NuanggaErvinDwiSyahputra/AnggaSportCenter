import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  handleSearchPress,
  searchText,
} from 'react-native';
import {
  SearchNormal,
  Menu,
  Star1,
  ProfileCircle,
  Home2,
} from 'iconsax-react-native';
import {BlogList} from '../../../data';
import {fontType, colors} from '../../theme';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import Itembooking from '../../components/itemBooking';

const ItemCategory = ({item, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ListBlog = item => {
  const verticalData = BlogList.slice(0, 10);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.listBlog}>
        <Text
          style={{
            fontSize: 25,
            marginLeft: 25,
            fontWeight: '700',
            color: colors.black(),
            fontFamily: fontType['Pjs-Medium'],
            marginTop: 10,
            marginBottom: 15,
          }}>
          Transaction List
        </Text>
      </View>
      <View style={styles.listCard}>
        {verticalData.map((item, index) => (
          <Itembooking item={item} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};

const navigation = useNavigation();

export default function Booking() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Menu size="30" color={colors.black()} />
          <ProfileCircle size="30" color={colors.black()} />
        </View>
      </View>
      <ListBlog />
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
    fontWeight: 'bold',
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
  searchButtonContainer: {
    paddingLeft: 14,
    paddingRight: 20,
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
    color: 'black',
    marginLeft: 30,
  },

  input: {
    flex: 1,
    backgroundColor: colors.backgroundColor(),
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 2,
    color: 'black',
    height: 45,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',
    backgroundColor: colors.backgroundColor(),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: colors.white(),
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
