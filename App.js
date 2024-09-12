import {SafeAreaView, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Routes from './src/navigation';
import {persistStore} from 'redux-persist';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import colors from './src/theme/colors';
import images from './src/assets/images';

let persistor = persistStore(store);

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false);
    }, 1500);
  }, []);

  if (showWelcome) {
    return (
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
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <Routes />
          <Toast />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
