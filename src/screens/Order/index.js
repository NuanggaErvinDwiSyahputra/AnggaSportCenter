import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {fontType, colors} from '../../theme';
import {Calendar} from 'react-native-calendars'
import {useNavigation} from '@react-navigation/native';
import {ArrowCircleLeft} from 'iconsax-react-native';
import { BlogList } from '../../../data';

const Order = ({route}) => {
  const {id} = route.params;
  const selectedBlog = BlogList.find(blog => blog.id === id);

  const [selected, setSelected] = useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <FastImage
              style={Background.cover}
              source={{
                uri: selectedBlog?.image1,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
          <View style={{position: 'absolute', left: 20, top: 30}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowCircleLeft
                color={colors.white()}
                variant="Linear"
                size={28}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Calendar
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
        />
        <View
          style={{
            marginLeft: 20,
            marginRight: 25,
            marginBottom: 8,
            marginTop: 5,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{fontSize: 18, fontWeight: '400', color: colors.black()}}>
            Choose a Field
          </Text>
        </View>
        <View style={styles.cardItem}>
          <TouchableOpacity style={styles.cardContent}>
            <Text style={ButtonOrder.text}>{selectedBlog?.choose1}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardContent}>
            <Text style={ButtonOrder.text}>{selectedBlog?.choose2}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardContent}>
            <Text style={ButtonOrder.text}>{selectedBlog?.choose3}</Text>
          </TouchableOpacity>
          
        </View>
        <View
          style={{
            marginLeft: 20,
            marginRight: 25,
            marginBottom: 8,
            marginTop: 10,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{fontSize: 18, fontWeight: '400', color: colors.black()}}>
            Choose a Clock
          </Text>
        </View>
        <View style={Jam.cardItem}>
          <TouchableOpacity style={Jam.cardContent}>
            <Text style={Jam.text}>{selectedBlog?.time1}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Jam.cardContent}>
            <Text style={Jam.text}>{selectedBlog?.time2}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Jam.cardContent}>
            <Text style={Jam.text}>{selectedBlog?.time3}</Text>
          </TouchableOpacity>
        </View>
        <View style={Jam.cardItem}>
          <TouchableOpacity style={Jam.cardContent}>
            <Text style={Jam.text}>{selectedBlog?.time4}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Jam.cardContent}>
            <Text style={Jam.text}>{selectedBlog?.time5}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Jam.cardContent}>
            <Text style={Jam.text}>{selectedBlog?.time6}</Text>
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
