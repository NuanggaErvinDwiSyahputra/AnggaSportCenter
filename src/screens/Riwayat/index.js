import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ArrowCircleLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {BlogList} from '../../../data';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../../theme';

const Riwayat = ({route}) => {
  const {blogId} = route.params;
  const [iconStates, setIconStates] = useState({
    liked: {variant: 'Linear', color: colors.grey(0.6)},
    bookmarked: {variant: 'Linear', color: colors.grey(0.6)},
  });
  const selectedBlog = BlogList.find(blog => blog.id === blogId);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowCircleLeft
            color={colors.black()}
            variant="Linear"
            size={28}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 62,
        }}>
        <FastImage
          style={styles.image}
          source={{
            uri: selectedBlog.image,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}>
        </FastImage>
        <View>
          <Text style={styles.arrow}>---------------------------------------------------------------</Text>
          <Text style={styles.category}>{selectedBlog.title}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop:10,
          }}>
          <Text style={{...styles.order1,color:colors.black(),}}>ID Order</Text>
          <Text style={{...styles.order2,color:colors.black(),}}>{selectedBlog.idorder}</Text>          
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop:10,
          }}>
          <Text style={{...styles.order1,color:colors.black(),}}>{selectedBlog.choose}</Text>
          <Text style={{...styles.order2,color:colors.black(),}}>{selectedBlog.lapangan}</Text>          
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop:10,
          }}>
          <Text style={{...styles.order1,color:colors.black(),}}>Date</Text>
          <Text style={{...styles.order2,color:colors.black(),}}>{selectedBlog.tanggal}</Text>          
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop:10,
          }}>
          <Text style={{...styles.order1,color:colors.black(),}}>Time</Text>
          <Text style={{...styles.order2,color:colors.black(),}}>{selectedBlog.jam}</Text>          
        </View>
        <View>
          <Text style={styles.arrow}>---------------------------------------------------------------</Text>
        </View>
        <FastImage
          style={styles.barcode}
          source={{
            uri: selectedBlog.barcode,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}>
        </FastImage>
      </ScrollView>
    </View>
    
  );
};
export default Riwayat;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  category: {
    color: colors.black(),
    fontFamily: fontType['Pjs-ExtraBold'],
    fontSize: 18,
    marginTop:10,
  },
  arrow: {
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 10,
    marginTop:15,
  },
  order1: {
    colors: colors.black(),
    fontFamily:fontType['Pjs-SemiBold'],
    fontSize:15,    
    marginTop:10,
  },
  order2: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 15,
    marginTop:10,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 0,
    zIndex: 1000,
    top: 30,
    right: 0,
    left: 20,
    backgroundColor: colors.white(),
  },
  image: {
    height: 200,
    width: 'auto',
    borderRadius: 15,
  },
  barcode: {
    height: 100,
    marginTop: 15,
    
  }
  
});