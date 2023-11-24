import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import images from '../../assets/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';
import BackIcon from '../../components/BackIcon';

const Login = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onChangeInput = (key, changedText) => {
    setForm({...form, [key]: changedText});
  };

  return (
    <ImageBackground
      source={images.background}
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
        style={{width: wp('100%'), height: hp('65%'), alignSelf: 'flex-end'}}>
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

        <Button btnText={'Login'} onPress={() => navigation.navigate('MainStack')} containerStyle={{marginVertical: 10}} />

        <View style={{width: wp('60%'), flexDirection:'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 30}}>
          <Image source={images.google_icon} style={{padding: 5}} />
          <Image source={images.facebook_icon} style={{padding: 5, marginLeft: 5}} />
          <Image source={images.apple_icon} style={{padding: 5}} />
        </View>
      </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({});
