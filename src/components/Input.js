import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';

const Input = ({
  placeholder,
  value,
  onChangeText,
  containerStyle,
  inputStyle,
  password = false,
  keyboardType,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[containerStyle, styles.container]}>
      <TextInput
        style={[inputStyle, styles.input]}
        placeholder={placeholder}
        placeholderTextColor={'lightgrey'}
        value={value}
        onChangeText={onChangeText}
        cursorColor={'white'}
        secureTextEntry={password ? !showPassword : null}
        keyboardType={keyboardType}
      />
      {password ? (
        showPassword ? (
          <Entypo
            onPress={() => setShowPassword(false)}
            name="eye-with-line"
            size={25}
            color="white"
          />
        ) : (
          <Entypo
            onPress={() => setShowPassword(true)}
            name="eye"
            size={25}
            color="white"
          />
        )
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: wp('90%'),
    borderRadius: 8,
    padding: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: 'white',
    fontSize: hp('2%'),
    width: '90%',
  },
});
