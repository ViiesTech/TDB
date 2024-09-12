import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
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


const Explore = ({navigation}) => {
  const arry = [
    {id: 1, image: require('../../assets/images/1.png')},
    {id: 2, image: require('../../assets/images/2.png')},
    {id: 3, image: require('../../assets/images/3.png')},
    {id: 4, image: require('../../assets/images/4.png')},
    {id: 5, image: require('../../assets/images/5.png')},
    {id: 6, image: require('../../assets/images/3.png')},
    {id: 7, image: require('../../assets/images/4.png')},
    {id: 8, image: require('../../assets/images/5.png')},
    // {id: 6, image : require('../../assets/images/6.png')},
  ];

  return (
    <ImageBackground
      source={images.bgExplore}
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
          Explore
        </Text>

        <View style={{alignItems: 'center'}}>
          <MaterialCommunityIcons
            name={'thought-bubble'}
            size={40}
            color={colors.primary}
          />
          <Entypo
            name={'dots-three-horizontal'}
            size={20}
            color={'white'}
            style={{position: 'absolute', top: 5}}
          />
        </View>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={arry}
          numColumns={2}
          contentContainerStyle={{alignSelf:'center'}}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={{borderRadius: 200}} onPress={() => navigation.navigate('CreateAvatar')}>
                <Image source={item.image} resizeMode='contain' style={{height:200, width:200}} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Explore;

const styles = StyleSheet.create({});
