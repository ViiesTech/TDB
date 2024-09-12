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
import colors from '../../theme/colors';
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
import Toast from 'react-native-toast-message';
import axios from 'axios';

const Signup = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChangeInput = (key, changedText) => {
    setForm({...form, [key]: changedText});
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validatePassword = (password) => {
    return String(password)
      .toLowerCase()
      .match(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      );
  };


  const handleSignup = () => {
    let data = new FormData();
    data.append('name', form.name);
    data.append('email', form.email);
    data.append('password', form.password);
    data.append('confirm_password', form.confirmPassword);
    data.append('type', 'user');

    let config = {
      method: 'post',
      url: `${BaseUrl}/api/register`,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: data,
    };

    if (form.password === form.confirmPassword) {
      if (form.name && form.email && form.password && form.confirmPassword) {
        if(validateEmail(form.email)){
          if(validatePassword(form.password)){
            setLoading(true)
            axios
            .request(config)
            .then(response => {
              setLoading(false)
              if (response.data.success) {
                Toast.show({
                  type: 'success',
                  text1: 'Successfully Signed up',
                  text2: 'You can now log into your account 😊',
                });
                navigation.navigate('Login');
              } else {
                Toast.show({
                  type: 'error',
                  text1: response.data.message,
                });
              }
            })
            .catch(error => {
              setLoading(false)
              Toast.show({
                type: 'error',
                text1: error.message,
              });
            });
          }else {
            Toast.show({
              type: 'error',
              text1: 'Invalid Password',
              text2: 'Atleast six characters with a letter, a symbol and a number is required!'
            })
          }
        }else {
          Toast.show({
            type: 'error',
            text1: 'Please enter a valid email and password!'
          })
        }
      } else {
        Toast.show({
          type: 'error',
          text1: "You can't leave any field empty!",
        });
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Password and Confirm Password does not match 🥲',
      });
    }
  };

  return (
    <ImageBackground
      source={images.signupBg}
      style={{flex: 1, flexDirection: 'row'}}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        translucent={true}
        barStyle={'light-content'}
      />

      <BackIcon onPress={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={{flexGrow: 1, flexDirection: 'row'}}>
        <View
          style={{width: wp('100%'), height: hp('78%'), alignSelf: 'flex-end'}}>
          <View
            style={{
              position: 'relative',
              height: 283,
              width: wp('90%'),
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: hp('4%'),
                width: '75%',
                alignSelf: 'flex-start',
                position: 'absolute',
                bottom: 120,
              }}>
              Sign up with email
            </Text>
            <Image
              source={images.person}
              style={{position: 'absolute', zIndex: 2, right: -40}}
            />
            <Input
              placeholder={'Name'}
              containerStyle={{
                marginVertical: 10,
                zIndex: 1,
                position: 'absolute',
                bottom: 0,
              }}
              value={form.name}
              onChangeText={changedText => onChangeInput('name', changedText)}
            />
          </View>

          <Input
            placeholder={'Email'}
            containerStyle={{marginVertical: 10}}
            value={form.email}
            onChangeText={changedText => onChangeInput('email', changedText)}
            keyboardType={'email-address'}
          />
          <Input
            placeholder={'Password'}
            containerStyle={{marginVertical: 10}}
            value={form.password}
            onChangeText={changedText => onChangeInput('password', changedText)}
            password={true}
          />
          <Input
            placeholder={'Confirm Password'}
            containerStyle={{marginVertical: 10}}
            value={form.confirmPassword}
            onChangeText={changedText =>
              onChangeInput('confirmPassword', changedText)
            }
            password={true}
          />

          <Button
            btnText={loading ? <ActivityIndicator size={'small'} color={'white'} /> : 'Sign up'}
            disabled={loading}
            onPress={handleSignup}
            containerStyle={{marginTop: 30}}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({});
