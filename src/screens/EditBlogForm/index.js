import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {fontType, colors} from '../../theme';
import axios from 'axios';

const EditBlogForm = ({route}) => {
  const {blogId} = route.params;
  // const datalapangan = [
  //   {id: 1, name: 'Field 1'},
  //   {id: 2, name: 'Field 2'},
  //   {id: 3, name: 'Field 3'},
  //   {id: 4, name: 'Field 4'},
  // ];
  // const datajam = [
  //   {i: 1, name: '10.00 - 11.00'},
  //   {i: 2, name: '11.00 - 12.00'},
  //   {i: 3, name: '13.00 - 14.00'},
  //   {i: 4, name: '14.00 - 15.00'},
  //   {i: 5, name: '15.00 - 16.00'},
  //   {i: 6, name: '16.00 - 17.00'},
  //   {i: 7, name: '17.00 - 18.00'},
  //   {i: 8, name: '18.00 - 19.00'},
  //   {i: 9, name: '19.00 - 20.00'},
  // ];
  const [transaction, setBlogData] = useState({
    title: '',
    image,
    jam: '',
    lapangan: '',
  });
  const handleChange = (key, value) => {
    setBlogData({
      ...transaction,
      [key]: value,
    });
  };
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getBlogById();
  }, [blogId]);

  const getBlogById = async () => {
    try {
      const response = await axios.get(
        `https://656dedccbcc5618d3c243f7e.mockapi.io/anggasportcenter/sport/${blogId}`,
      );
      setBlogData({
        title: response.data.title,
        idorder: response.data.idorder,
        jam: response.data.jam,
        lapangan: response.data.lapangan,
      });
      setImage(response.data.image);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdate = async () => {
    setLoading(true);
    try {
      await axios
        .put(
          `https://656dedccbcc5618d3c243f7e.mockapi.io/anggasportcenter/sport/${blogId}`,
          {
            title: transaction.title,
            idorder: transaction.idorder,
            image,
            jam: transaction.jam,
            lapangan: transaction.lapangan,
          },
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
      navigation.navigate('Booking');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.title}>Edit blog</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}>
        <View style={textInput.borderSolid}>
          <TextInput
            placeholder="Id Order"
            value={transaction.idorder}
            onChangeText={text => handleChange('idorder', text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={textInput.title}
          />
        </View>
        <View style={textInput.borderSolid}>
          <TextInput
            placeholder="Title"
            value={transaction.title}
            onChangeText={text => handleChange('title', text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={textInput.title}
          />
        </View>
        <View style={textInput.borderSolid}>
          <TextInput
            placeholder="Image"
            value={image}
            onChangeText={text => setImage(text)}
            placeholderTextColor={colors.grey(0.6)}
            style={textInput.title}
          />
        </View>
        <View style={textInput.borderSolid}>
          <TextInput
            placeholder="Field"
            value={transaction.lapangan}
            onChangeText={text => handleChange('lapangan', text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={textInput.title}
          />
        </View>
        <View style={textInput.borderSolid}>
          <TextInput
            placeholder="Time"
            value={transaction.jam}
            onChangeText={text => handleChange('jam', text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={textInput.title}
          />
        </View>
        {/* <View style={[textInput.borderSolid]}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fontType['Pjs-Regular'],
              color: colors.grey(0.6),
            }}>
            Field
          </Text>
          <View style={category.container}>
            {datalapangan.map((item, index) => {
              const bgColor =
                item.id === transaction.lapangan.id
                  ? colors.black()
                  : colors.grey(0.08);
              const color =
                item.id === transaction.lapangan.id
                  ? colors.white()
                  : colors.grey();
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    handleChange('lapangan', {id: item.id, name: item.name})
                  }
                  style={[category.item, {backgroundColor: bgColor}]}>
                  <Text style={[category.name, {color: color}]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View> */}
        {/* <View style={[textInput.borderSolid]}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fontType['Pjs-Regular'],
              color: colors.grey(0.6),
            }}>
            Time
          </Text>
          <View style={category.container}>
            {datajam.map((item, index) => {
              const bgColor =
                item.i === transaction.jam.i
                  ? colors.black()
                  : colors.grey(0.08);
              const color =
                item.i === transaction.jam.i ? colors.white() : colors.grey();
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    handleChange('jam', {i: item.i, name: item.name})
                  }
                  style={[category.item, {backgroundColor: bgColor}]}>
                  <Text style={[category.name, {color: color}]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View> */}
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonLabel}>Update</Text>
        </TouchableOpacity>
      </View>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={colors.blue()} />
        </View>
      )}
    </View>
  );
};

export default EditBlogForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 16,
    color: colors.black(),
  },
  bottomBar: {
    backgroundColor: colors.white(),
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: colors.black(),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.blue(),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.white(),
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.black(0.4),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const textInput = StyleSheet.create({
  borderSolid: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.darkModeBlack(),
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
    padding: 0,
  },
  content: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
    padding: 0,
  },
});
const category = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(0.6),
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
  },
});
