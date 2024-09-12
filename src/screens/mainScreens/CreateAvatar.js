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
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import Entypo from 'react-native-vector-icons/Entypo';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


  const CreateAvatar = ({navigation}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.secondary,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            paddingVertical: 50,
            alignItems: 'center',
          }}>
          <AntDesign name={'left'} color={'white'} size={20} style={{padding: 5}} onPress={() => navigation.goBack()} />
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>
            Create
          </Text>
          <View  style={{padding: 5}} />
        </View>
  
        <Image
            source={require('../../assets/images/2.png')}
            style={{width: wp('80%'), height: hp('30%'), objectFit: 'contain', alignSelf: 'center'}}
        />

        <Text style={{color: 'white', fontSize: hp('2.2%'), width: wp('90%'), alignSelf: 'center', marginVertical: 15}}>Select the editing area of your avatar</Text>

        <View style={{width: wp('90%'), alignSelf: 'center', flexWrap: 'wrap', flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: '23%', height: hp('12%'), backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 10, margin: '1%', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={images.iconFace} style={{width: '50%', height: '50%', objectFit: 'contain', marginTop: 10}} />
            <Text style={{color: 'white', fontSize: hp('1.8%'), marginVertical:10}}>Face</Text>
          </View>
          <View style={{width: '23%', height: hp('12%'), backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 10, margin: '1%', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={images.iconEye} style={{width: '50%', height: '50%', objectFit: 'contain', marginTop: 10}} />
            <Text style={{color: 'white', fontSize: hp('1.8%'), marginVertical:10}}>Eyes</Text>
          </View>
          <View style={{width: '23%', height: hp('12%'), backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 10, margin: '1%', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={images.iconHair} style={{width: '50%', height: '50%', objectFit: 'contain', marginTop: 10}} />
            <Text style={{color: 'white', fontSize: hp('1.8%'), marginVertical:10}}>Hairs</Text>
          </View>
          <View style={{width: '23%', height: hp('12%'), backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 10, margin: '1%', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={images.iconClothes} style={{width: '50%', height: '50%', objectFit: 'contain', marginTop: 10}} />
            <Text style={{color: 'white', fontSize: hp('1.8%'), marginVertical:10}}>Clothes</Text>
          </View>
          <View style={{width: '23%', height: hp('12%'), backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 10, margin: '1%', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={images.iconGlasses} style={{width: '50%', height: '50%', objectFit: 'contain', marginTop: 10}} />
            <Text style={{color: 'white', fontSize: hp('1.8%'), marginVertical:10}}>Glasses</Text>
          </View>
          <View style={{width: '23%', height: hp('12%'), backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 10, margin: '1%', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={images.iconFootwear} style={{width: '50%', height: '50%', objectFit: 'contain', marginTop: 10}} />
            <Text style={{color: 'white', fontSize: hp('1.8%'), marginVertical:10}}>Footwear</Text>
          </View>
        </View>


        <View style={{flexDirection: 'row', alignItems: 'center', width: wp('95%'), alignSelf:'center', marginTop: hp('5%')}}>
          <TouchableOpacity style={{backgroundColor: 'rgba(255, 255, 255, 0.25)', flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 10, alignItems: 'center', borderRadius: 10, marginRight: 5}}>
            <FontAwesome name="random" size={16} color={'white'}  />
            <Text style={{color: 'white', fontSize: hp('1.8%'), marginLeft: 10}}>Random</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'rgba(255, 255, 255, 0.25)', flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 10, alignItems: 'center', borderRadius: 10, marginRight: 5}}>
            <FontAwesome name="undo" size={16} color={'white'}  />
            <Text style={{color: 'white', fontSize: hp('1.8%'), marginLeft: 10}}>Undo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'rgba(255, 255, 255, 0.25)', flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 10, alignItems: 'center', borderRadius: 10, marginRight: 5}}>
            <FontAwesome name="refresh" size={16} color={'white'}  />
            <Text style={{color: 'white', fontSize: hp('1.8%'), marginLeft: 10}}>Reset</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', alignItems: 'center', position: 'absolute', right: 0}}>
            <TouchableOpacity style={{backgroundColor: 'rgba(255, 255, 255, 0.25)', flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 10, alignItems: 'center', borderRadius: 10, marginRight: 5}}>
                <MaterialCommunityIcons name="export-variant" size={16} color={'white'}  />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: 'rgba(255, 255, 255, 0.25)', flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 10, alignItems: 'center', borderRadius: 10, marginRight: 5}}>
                <AntDesign name="download" size={16} color={'white'}  />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  
  export default CreateAvatar;
  
  const styles = StyleSheet.create({});
  