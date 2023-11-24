import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'
import images from '../../assets/images'

const Home = () => {
  return (
    <ImageBackground source={images.bgHome} style={{flex: 1, backgroundColor: colors.secondary}}>
      <Text>Home</Text>
    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({})