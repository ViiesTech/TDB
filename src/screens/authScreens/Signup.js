import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
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

const Signup = ({navigation}) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChangeInput = (key, changedText) => {
    setForm({...form, [key]: changedText});
  };

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false);
    }, 1500);
  }, []);

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
      {showWelcome ? (
        <View
          style={{
            width: wp('100%'),
            height: hp('100%'),
            backgroundColor: colors.secondary,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 100,
          }}>
          <Image source={images.logo} />
        </View>
      ) : null}
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
                position:'absolute',
                bottom: 120
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
            btnText={'Sign up'}
            onPress={() => navigation.navigate('Login')}
            containerStyle={{marginTop: 30}}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({});
