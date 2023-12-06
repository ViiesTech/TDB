import {Image, ImageBackground, StyleSheet, Text, View, Keyboard, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import React, { useState, useRef } from 'react';
import colors from '../../theme/colors';
import images from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Home = () => {

  const [isKeyBoardShowing, setKeyBoardShowing] = useState(false)
  const KeyboardRef = useRef(null)

  const HandleKeyBoardOpener =() => {
    KeyboardRef.current.focus()
  }

  return (
    <ImageBackground
      source={images.bgHome}
      style={{
        flex: 1,
        backgroundColor: colors.secondary,
        justifyContent: 'space-between',
      }}>
        <ScrollView contentContainerStyle={{flexGrow:1,      justifyContent: 'space-between',}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
          paddingVertical: 40,
          alignItems: 'center',
        }}>
        <AntDesign name={'setting'} color={'white'} size={20} />
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>
          Home
        </Text>

        <View style={{alignItems:'center', }}>
          <MaterialCommunityIcons
            name={'thought-bubble'}
            size={40}
            color={colors.primary}
          />
          <Entypo name={'dots-three-horizontal'} size={20} color={'white'} style={{position:'absolute', top:5}} />
        </View>
      </View>

      <View/>

      <View style={{justifyContent:'flex-end',  }}>
        <View
          style={{

            height: 500,

            width: '90%',
            alignSelf: 'center',
          }}>
          <Image
            source={require('../../assets/images/human.png')}
            style={{
              height: 500,
              width: '90%',
              alignSelf: 'center',
            }}
          />
        </View>

        <View

          style={{
            height: 100,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            backgroundColor: colors.primary,
            borderWidth: 0,
            borderColor: colors.primary,
            alignItems: 'center',
            justifyContent: 'center',

          }}>
            <TextInput
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  fontSize: 25,
                }}
                placeholder='Ask any thing?'
                placeholderTextColor={'white'}
            />
         
        </View>
      </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({});
