import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../theme/colors';

const Button = ({btnText, onPress, fontStyle, disabled=false, containerStyle}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} activeOpacity={0.6} style={[styles.btnCont, containerStyle]}>
        <Text style={[styles.fontStyle, fontStyle]}>{btnText}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btnCont: {
        backgroundColor: colors.primary,
        width: wp('90%'),
        alignSelf: 'center',
        justifyContent: 'center', alignItems:'center',
        borderRadius: 8,
        paddingVertical: 20
    },
    fontStyle: {
        fontSize: hp('2.2%'),
        color: 'white',
    }
})