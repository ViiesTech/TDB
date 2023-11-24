import {TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../theme/colors';

const BackIcon = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.primary,
        alignSelf: 'flex-start',
        padding: 10,
        borderRadius: 250,
        position: 'absolute',
        top: 35,
        left: 15,
        zIndex: 1000
      }}>
      <AntDesign name="arrowleft" size={25} color={'white'} />
    </TouchableOpacity>
  );
};

export default BackIcon;