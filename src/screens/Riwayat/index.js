import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {
  Like1,
  Share,
  ArrowCircleLeft,
  More,
  Message,
  Receipt21,
} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {BlogList} from '../../../data';
import {ProfileData} from '../../../data';
import FastImage from 'react-native-fast-image';
import {fontType, colors} from '../../theme';
import {formatNumber} from '../../utils/formatNumber';
import {formatDate} from '../../utils/formatDate';
import axios from 'axios';
import ActionSheet from 'react-native-actions-sheet';
import itemBooking from '../../components/itemBooking';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const Riwayat = ({route}) => {
  const {blogId} = route.params;
  const [iconStates, setIconStates] = useState({
    liked: {variant: 'Linear', color: colors.grey(0.6)},
    bookmarked: {variant: 'Linear', color: colors.grey(0.6)},
  });
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const actionSheetRef = useRef(null);

  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };

  useEffect(() => {
    getBlogById();
  }, [blogId]);

  const getBlogById = async () => {
    try {
      const response = await axios.get(
        `https://656dedccbcc5618d3c243f7e.mockapi.io/anggasportcenter/sport/${blogId}`,
      );
      setSelectedBlog(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const navigateEdit = () => {
    closeActionSheet();
    navigation.navigate('EditBlog', {blogId});
  };
  const handleDelete = async () => {
    await axios
      .delete(
        `https://656dedccbcc5618d3c243f7e.mockapi.io/anggasportcenter/sport/${blogId}`,
      )
      .then(() => {
        closeActionSheet();
        navigation.navigate('Booking');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 52);
  const headerY = diffClampY.interpolate({
    inputRange: [0, 52],
    outputRange: [0, -52],
  });
  const bottomBarY = diffClampY.interpolate({
    inputRange: [0, 52],
    outputRange: [0, 52],
  });

  const toggleIcon = iconName => {
    setIconStates(prevStates => ({
      ...prevStates,
      [iconName]: {
        variant: prevStates[iconName].variant === 'Linear' ? 'Bold' : 'Linear',
        color:
          prevStates[iconName].variant === 'Linear'
            ? colors.blue()
            : colors.grey(0.6),
      },
    }));
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.header, {transform: [{translateY: headerY}]}]}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}} >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowCircleLeft
              color={colors.black()}
              variant="Linear"
              size={28}
            />
          </TouchableOpacity>
            <TouchableOpacity style={{marginStart: 300}} onPress={openActionSheet}>
              <More
                color={colors.grey(0.6)}
                variant="Linear"
                style={{transform: [{rotate: '90deg'}]}}
              />
            </TouchableOpacity>  
        </View>
      </Animated.View>
      {loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size={'large'} color={colors.blue()} />
        </View>
      ) : (
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingTop: 62,
            paddingBottom: 54,
          }}>
          <FastImage
            style={styles.image}
            source={{
              uri: selectedBlog?.image,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}></FastImage>
          <View
            style={{
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.arrow}>
              ---------------------------------------------------------------
            </Text>
            <Text style={styles.category}>{selectedBlog?.title}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={{...styles.order1, color: colors.black()}}>
              ID Order
            </Text>
            <Text style={{...styles.order2,color:colors.black(),}}>{selectedBlog?.idorder}</Text>          
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={{...styles.order1, color: colors.black()}}>Field</Text>
            <Text style={{...styles.order2, color:colors.black()}}>{selectedBlog?.lapangan}</Text>
          </View>        
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={{...styles.order1, color: colors.black()}}>Time</Text>
            <Text style={{...styles.order2,color:colors.black(),}}>{selectedBlog?.jam}</Text>          
          </View>
          <View>
            <Text style={styles.arrow}>
              ---------------------------------------------------------------
            </Text>
          </View>
        </Animated.ScrollView>
      )}
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
        indicatorStyle={{
          width: 100,
        }}
        gestureEnabled={true}
        defaultOverlayOpacity={0.3}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={navigateEdit}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: colors.black(),
              fontSize: 18,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={handleDelete}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: colors.black(),
              fontSize: 18,
            }}>
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={closeActionSheet}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: 'red',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </ActionSheet>
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
    marginTop: 10,
  },
  arrow: {
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 10,
    marginTop: 15,
  },
  order1: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 15,
    marginTop: 10,
  },
  order2: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 15,
    marginTop: 10,
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
  },
});
