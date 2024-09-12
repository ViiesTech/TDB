import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import Entypo from 'react-native-vector-icons/Entypo'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import colors from '../../theme/colors';
import Toast from 'react-native-toast-message';
import axios from 'axios';

const StartingSlider = ({navigation}) => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [popularShows, setPopularShows] = useState([]);
    const slider = useRef();
    const slides = [
        {
        key: 1,
        screen: <Slide1 slider={slider} popularMovies={popularMovies} />,
        },
        {
        key: 2,
        screen: <Slide2 slider={slider} />,
        },
        {
        key: 3,
        screen: <Slide3 slider={slider} />,
        },
        {
        key: 4,
        screen: <Slide4 slider={slider} popularShows={popularShows} navigation={navigation} />,
        },
    ];
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchPopularMovies()
            fetchPopularShows()
        })

        return unsubscribe;
    }, [navigation])

    const fetchPopularMovies = async () => {
        const options = {
          method: 'GET',
          url: 'https://online-movie-database.p.rapidapi.com/title/get-most-popular-movies',
          params: {
            currentCountry: 'US',
            purchaseCountry: 'US',
            homeCountry: 'US'
          },
          headers: {
            'X-RapidAPI-Key': 'e204a2ece9mshfde89624dc59b5bp176140jsn7623ed64c709',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
          }
        };
        
        try {
          const response = await axios.request(options);
          for(let eachId of response.data){
            const options = {
                method: 'GET',
                url: 'https://online-movie-database.p.rapidapi.com/title/get-details',
                params: {
                  tconst: eachId.substring(7)
                },
                headers: {
                  'X-RapidAPI-Key': 'e204a2ece9mshfde89624dc59b5bp176140jsn7623ed64c709',
                  'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  setPopularMovies(oldData =>  [...oldData, response.data]);
              } catch (error) {
                Toast.show({
                    type: 'error',
                    text1: error
                })
              }
          }
        } catch (error) {
          Toast.show({
            type: 'error',
            text1: error
          })
        }
    }

    const fetchPopularShows = async () => {
        const options = {
            method: 'GET',
            url: 'https://online-movie-database.p.rapidapi.com/title/get-most-popular-tv-shows',
            params: {
              currentCountry: 'US',
              purchaseCountry: 'US',
              homeCountry: 'US'
            },
            headers: {
              'X-RapidAPI-Key': 'e204a2ece9mshfde89624dc59b5bp176140jsn7623ed64c709',
              'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              for(let eachId of response.data){
                const options = {
                    method: 'GET',
                    url: 'https://online-movie-database.p.rapidapi.com/title/get-details',
                    params: {
                      tconst: eachId.substring(7)
                    },
                    headers: {
                      'X-RapidAPI-Key': 'e204a2ece9mshfde89624dc59b5bp176140jsn7623ed64c709',
                      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
                    }
                  };
                  
                  try {
                      const response = await axios.request(options);
                      setPopularShows(oldData =>  [...oldData, response.data]);
                  } catch (error) {
                    Toast.show({
                        type: 'error',
                        text1: error
                    })
                  }
              }
          } catch (error) {
              console.error(error);
          }
    }
    
    

    const renderItem = ({item}) => {
        return item.screen;
    };



    return (
        <View style={{flex: 1}}>
        <AppIntroSlider
            renderItem={renderItem}
            data={slides}
            onDone={() => navigation.navigate('Login')}
            scrollEnabled={false}
            activeDotStyle={{backgroundColor: '#D4615C', width: 25}}
            dotStyle={{backgroundColor: colors.primary}}
            showNextButton={false}
            showDoneButton={false}
            ref={(ref) => (slider.current = ref)}
        />
        </View>
  );
};

export default StartingSlider;

const styles = StyleSheet.create({});
