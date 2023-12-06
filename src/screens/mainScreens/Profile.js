import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import images from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Profile = ({navigation}) => {
  return (
    <ImageBackground
      source={images.bgProfile}
      style={{
        flex: 1,
        backgroundColor: colors.secondary,
      }}>
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
          Profile
        </Text>

        <View/>
      </View>

      <View style={{}}>
        <View
          style={{
            height: 150,
            width: 150,
            backgroundColor: colors.primary,
            alignSelf: 'center',
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Image
            source={require('../../assets/images/2.png')}
            style={{height: 150, width: 150}}
          />
        </View>
      </View>

      <TextInput
        style={{
          backgroundColor: colors.primary,
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 10,
          height: 60,
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
          paddingHorizontal: 20,
          color:"white"
        }}
        placeholder="Email"
        placeholderTextColor={'white'}
      />

      <TextInput
        style={{
          backgroundColor: colors.primary,
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 10,
          height: 60,
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
          paddingHorizontal: 20,
          color:"white"
        }}
        placeholder="Name"
        placeholderTextColor={'white'}
      />

      <TextInput
        style={{
          backgroundColor: colors.primary,
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 10,
          height: 60,
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
          paddingHorizontal: 20,
          color:"white"
        }}
        placeholder="Change Password"
        placeholderTextColor={'white'}
      />

      <TouchableOpacity
      onPress={()=> navigation.navigate("AuthStack")}
        style={{
          backgroundColor: colors.primary,
          borderRadius: 10,
          height: 60,
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
          paddingHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>

<Text style={{color:'white', fontSize:20}}>Logout</Text>

        </TouchableOpacity>
    </ImageBackground>
  );
};

export default Profile;

const styles = StyleSheet.create({});
