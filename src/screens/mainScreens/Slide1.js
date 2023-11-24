import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef, useLayoutEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import images from '../../assets/images';
import Button from '../../components/Button';

const imageSources = [
  images.movie1,
  images.movie2,
  images.movie3,
  images.movie4,
  images.movie5,
];

const Slide1 = ({slider}) => {
  const [selectedImages, setSelectedImages] = useState([]);
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

      <View
        style={{
          width: wp('100%'),
          height: hp('65%'),
          position: 'absolute',
          bottom: 0,
        }}>
        <Text
          style={{
            width: wp('80%'),
            color: 'white',
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: hp('3%'),
            fontWeight: 'bold',
          }}>
          Select your three favourite movies
        </Text>
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
                source={imageSrc}
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

        <View style={{width: wp('100%'), height: 135, marginTop: 20}}>
          <ScrollView horizontal={true} ref={scrollViewRef} >
          {
            imageSources.map((eachImage, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => chooseImage(eachImage)} style={{margin: 10}}>
                  <Image source={eachImage} style={{}} />
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
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
  );
};

export default Slide1;

const styles = StyleSheet.create({});
