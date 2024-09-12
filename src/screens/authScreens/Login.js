import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import images from '../../assets/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {ScrollView} from 'react-native-gesture-handler';
import BackIcon from '../../components/BackIcon';
import BaseUrl from '../../utils/BaseUrl';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { UserLogin, makeLoadingFalse } from '../../redux/authSlice';
import { useSelector } from 'react-redux';
import Tts from 'react-native-tts';


const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.authData);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onChangeInput = (key, changedText) => {
    setForm({...form, [key]: changedText});
  };

  useEffect(() => {
    dispatch(makeLoadingFalse())
  }, [])

  const speakText = () => {
    Tts.speak('For more detail on androidParams properties, please take a look at official android documentation. Please note that there are still unsupported key with this wrapper library such as ', {
      androidParams: {
        KEY_PARAM_PAN: -1,
        KEY_PARAM_VOLUME: 0.5,
        KEY_PARAM_STREAM: 'STREAM_MUSIC',
      },
    });
  }

  const handleLogin = () => {
    let data = new FormData();
    data.append('email', form.email);
    data.append('password', form.password);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${BaseUrl}/api/login`,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: data,
    };

    if(form.email && form.password){
      dispatch(UserLogin(config))
    }
  };

  return (
    <ImageBackground source={images.background} style={{flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        translucent={true}
        barStyle={'light-content'}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{width: wp('100%'), marginTop: hp('15%')}}>
          <Text
            style={{
              color: 'white',
              fontSize: hp('4%'),
              fontWeight: 'bold',
              width: '90%',
              alignSelf: 'center',
              marginBottom: 30,
            }}>
            Sign in with email or username
          </Text>

          <Input
            placeholder={'username or email'}
            containerStyle={{marginVertical: 10}}
            value={form.email}
            onChangeText={changedText => onChangeInput('email', changedText)}
            keyboardType={'email-address'}
          />
          <Input
            placeholder={'password'}
            containerStyle={{marginVertical: 10}}
            value={form.password}
            onChangeText={changedText => onChangeInput('password', changedText)}
            password={true}
          />

          <Text
            style={{
              color: 'white',
              fontSize: hp('1.9%'),
              alignSelf: 'flex-end',
              marginRight: wp('5%'),
              paddingVertical: 5,
            }}>
            Forgot password?
          </Text>

          <Button
            btnText={isLoading ? <ActivityIndicator size={'small'} color={'white'} /> : 'Login'}
            disabled={isLoading}
            // onPress={handleLogin}
            onPress={speakText}
            containerStyle={{marginVertical: 10}}
          />

          <View
            style={{
              width: wp('60%'),
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginTop: 30,
            }}>
            <Image source={images.google_icon} style={{padding: 5}} />
            <Image
              source={images.facebook_icon}
              style={{padding: 5, marginLeft: 5}}
            />
            <Image source={images.apple_icon} style={{padding: 5}} />
          </View>
        </View>

        <View style={{width: wp('85%'), alignSelf: 'center', marginTop: 30}}>
          <Text style={{color: 'white', fontSize: hp('2.4%')}}>
            Or create a new account...
          </Text>
          <Button
            btnText={'Sign up'}
            onPress={() => navigation.navigate('Signup')}
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderColor: 'white',
              marginTop: hp('3%'),
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({});
