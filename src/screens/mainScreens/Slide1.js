import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import React, {useState, useRef, useLayoutEffect, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';
import images from '../../assets/images';
import Button from '../../components/Button';
import { FlatList} from 'react-native-gesture-handler';

const imageSources = [
  images.movie1,
  images.movie2,
  images.movie3,
  images.movie4,
  images.movie5,
];

const Slide1 = ({slider, popularMovies}) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [searchInputText, setSearchInputText] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [screenIndex, setScreenIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const chooseImage = src => {
    if (selectedImages.includes(src)) {
      console.log('Hello World');
    } else if (selectedImages.length < 3) {
      setSelectedImages([...selectedImages, src]);
    } else {
      let newArray = selectedImages.slice(0, -1);
      setSelectedImages([...newArray, src]);
    }
  };

  const toPreviousPage = theIndex => {
    scrollViewRef.current?.scrollTo({
        x: null,
        animated: true,
    });
    setScreenIndex(Dimensions.get('window').width)
  };
  const toNextPage = theIndex => {
    setScreenIndex(screenIndex + Dimensions.get('window').width)
    scrollViewRef.current?.scrollTo({
      x: screenIndex,
      animated: true,
    });
  };

  useEffect(() => {
    let filterResult = popularMovies.filter(eachMovie => {
      return eachMovie.title.toLowerCase().includes(searchInputText.toLowerCase());
    })
    setFilteredMovies(filterResult)
  }, [searchInputText])


  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: colors.bg}}>
      <Image
        source={images.bgSlide1}
        style={{
          width: wp('100%'),
          height: hp('100%'),
          position: 'absolute',
          top: 0,
          zIndex: -1,
        }}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          width: wp('100%'),
          marginTop: hp('30%')
        }}>
        <Text
          style={{
            width: wp('85%'),
            color: 'white',
            alignSelf: 'center',
            textAlign: 'left',
            fontSize: hp('2.5%'),
            fontWeight: 'bold',
          }}>
          Select your three favourite movies
        </Text>

        <View style={{flexDirection: 'row', width: wp('90%'), alignSelf: 'center', alignItems: 'center', borderWidth: 1, marginTop: 10, borderColor: 'white', borderRadius: 250, padding: 5, paddingHorizontal: 15}}>
          <TextInput value={searchInputText} onChangeText={changedText => setSearchInputText(changedText)} placeholder='Search Here...' placeholderTextColor={'white'} style={{width: '90%', color: 'white'}}  />
          <Ionicons name='search' size={25} color={'white'} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: wp('78%'),
            alignSelf: 'center',
            justifyContent: 'space-around',
            marginTop: 25,
          }}>
          {selectedImages.map((imageSrc, index) => {
            return (
              <Image
                key={index}
                source={{uri: imageSrc}}
                style={{
                  width: 100,
                  height: 100,
                  objectFit: 'contain',
                  borderRadius: 8,
                  borderWidth: 3,
                  borderColor: colors.primary,
                }}
              />
            );
          })}
        </View>

        <View style={{width: wp('100%'), height: 160, marginTop: 20}}>
        <FlatList
          ref={scrollViewRef}
          data={filteredMovies.length <= 0 ? popularMovies : filteredMovies}
          horizontal={true}
          key={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => chooseImage(item.image.url)} style={{margin: 10, width: 150, height: 150, overflow:'hidden', borderRadius: 8}}>
                <Image source={{uri: item.image.url}} style={{width: '100%', height: '100%', backgroundColor: 'lightgrey', objectFit: 'cover'}} />
              </TouchableOpacity>
            )
          }}

        />
          <View
            style={{
              width: wp('90%'),
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'space-between',
              position: 'absolute',
              top: '40%',
            }}>
            <TouchableOpacity
              onPress={() => toPreviousPage(1)}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderRadius: 120,
                width: 35,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="left" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => toNextPage(1)}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderRadius: 120,
                width: 35,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="right" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <Button
          btnText={'Next'}
          containerStyle={{marginTop: 40}}
          onPress={() => slider.current.goToSlide(1, true)}
        />
      </View>
      </ScrollView>
    </ScrollView>
  );
};

export default Slide1;

const styles = StyleSheet.create({});
