import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {HeaderBackground, Logo} from '../../assets/images';
import Balance from '../../components/balance';
import OurService from '../../components/our-service';
const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={HeaderBackground} style={styles.header}>
          <Image source={Logo} style={styles.logo} />
          <View style={{marginTop: '10%'}}>
            <Text style={{fontSize: 24, fontFamily: 'TitilliumWeb-Regular'}}>
              Selamat Datang,
            </Text>
            <Text style={{fontSize: 22, fontFamily: 'TitilliumWeb-Bold'}}>
              Arul
            </Text>
          </View>
        </ImageBackground>
        <View style={{marginHorizontal: 20}}>
          <Balance />
        </View>
        <View style={styles.service}>
          <OurService />
        </View>
      </ScrollView>
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.4,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
    marginTop: windowHeight * 0.02,
  },
  service: {marginTop: 20, 
    // marginHorizontal: 20,
  },
});
export default Home;
