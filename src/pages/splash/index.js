import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import {SplashBackground, Logo} from '../../assets';
const Splash = props => {
  const {navigation} = props;
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainPage');
    }, 2000);
  }, [navigation]);
  return (
    <ImageBackground source={SplashBackground} style={styles.backgroundImage}>
      <Image source={Logo}></Image>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Splash;
