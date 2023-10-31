import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Receipt21, Star1} from 'iconsax-react-native';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../theme';
const ItemHorizontal = ({item, variant, onPress}) => {
  return (
    <TouchableOpacity style={ItemHorizontal.cardItem} onPress={()=>{}}>
    <View style={itemHorizontal.cardItem}>
      <FastImage
        style={itemHorizontal.cardImage}
        source={{
            uri: item.image,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}>
      </FastImage>
      <View style={{padding:10}}>
            <Text style={itemHorizontal.cardTitle}>{item.title}</Text>
              <View style={{marginVertical:8, flexDirection:'row', gap:10, alignItems:'center'}}>
                <Star1 color='#FFB000' size={15}/>
                <View style={{flexDirection:'row', alignItems:'center', gap: 5}}>
                    <Text style={itemHorizontal.cardRate}>{item.rating}</Text>
                    <Text style={itemHorizontal.cardCategory}>{item.views}</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',gap:2}}>
                <Text style={itemHorizontal.cardRate}>{item.harga}</Text>
                <Text style={itemHorizontal.cardCategory}>{item.bulan}</Text>
              </View>  
            </View>
    </View>
    </TouchableOpacity>
  );
};
const ListHorizontal = ({data}) => {
  const [bookmark, setBookmark] = useState([]);
  const toggleBookmark = itemId => {
    if (bookmark.includes(itemId)) {
      setBookmark(bookmark.filter(id => id !== itemId));
    } else {
      setBookmark([...bookmark, itemId]);
    }
  };
  const renderItem = ({item}) => {
    variant = bookmark.includes(item.id) ? 'Bold' : 'Linear';
    return (
      <ItemHorizontal
        item={item}
        variant={variant}
        onPress={() => toggleBookmark(item.id)}
      />
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 15}} />}
      contentContainerStyle={{paddingHorizontal: 24}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default ListHorizontal;
const itemHorizontal = StyleSheet.create({
    cardItem: {
        width: 310,
        flexDirection:'column',
        backgroundColor: colors.backgroundColor(),
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
      cardCategory: {
        color: colors.black(),
        fontSize: 15,
        fontWeight:'300',
        fontFamily: fontType['Pjs-Regular'],
      },
      cardRate: {
        fontSize: 17,
        fontFamily: fontType['Pjs-SemiBold'],
        color: colors.black(),
        fontWeight:'bold'
      },
      cardText: {
        fontSize: 10,
        color: colors.white(),
        fontFamily: fontType['Pjs-Medium'],
      },
});