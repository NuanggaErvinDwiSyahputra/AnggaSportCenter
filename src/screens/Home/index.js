import React, {useRef,useSlide} from 'react';
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  handleSearchPress,
  searchText,
  Animated,
} from 'react-native';
import {
  SearchNormal,
  Menu,
  ProfileCircle,
} from 'iconsax-react-native';
import {BlogList} from '../../../data';
import {fontType, colors} from '../../theme';
import {ListHorizontal, ItemSmall} from '../../components';

const ItemCategory = ({item, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ListBlog = () => {
  const navigation = useNavigation();
  const horizontalData = BlogList.slice(0, 5);
  const verticalData = BlogList.slice(5);
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 20],
    outputRange: [0, -20],
    extrapolate: 'clamp',
  });
  return (
    <Animated.ScrollView showsVerticalScrollIndicator={false}
    onScroll=
    {Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
      useNativeDriver: true,
    })}contentContainerStyle={{paddingTop: 15}}>
      <View style={styles.listBlog}>
        <Text
          style={{
            fontSize: 27,
            marginLeft: 25,
            fontWeight: 'bold',
            color: colors.black(),
            fontFamily: fontType['Raleway-Bold'],
          }}>
          Find Your Favorite{'\n'}Sport Center
        </Text>
      </View>
      
      <View style={{paddingHorizontal: 24, marginTop: 10}}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("SearchPage")}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Find your best"
            onChangeText={handleSearchPress}
            value={searchText}
            placeholderTextColor="black"
          />
          <View style={styles.searchButtonContainer}>
            <TouchableOpacity style={styles.searchButton} >
              <SearchNormal
                color={colors.black()}
                variant="Linear"
                size={24}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        </TouchableWithoutFeedback>
      </View>
      
      <View
        style={{
          marginLeft: 25,
          marginRight: 25,
          marginBottom: 8,
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: '600', color: colors.black()}}>
          Choose Your Sport Center
        </Text>
        <Text style={{fontSize: 13, color: colors.blue()}}>See All</Text>
      </View>
      <Animated.View style={[
              styles.listBlog,
              {transform: [{translateY: recentY}]},
            ]}>
        <ListHorizontal data={horizontalData} />
        <View
          style={{
            marginLeft: 25,
            marginRight: 25,
            marginBottom: 5,
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 18, fontWeight: '600', color: colors.black()}}>
            Choose Your Sport Class
          </Text>
          <Text style={{fontSize: 13, color: colors.blue()}}>See All</Text>
        </View>
        <View style={styles.listCard}>
          {verticalData.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </Animated.View>
    </Animated.ScrollView>
  );
};

export default function Home() {
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
