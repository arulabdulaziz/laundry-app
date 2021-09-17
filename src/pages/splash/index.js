import React, {useEffect} from 'react'
import {StyleSheet, View, Text} from 'react-native';

const Splash = (props) => {
    const {navigation} =props
    useEffect(() => {
      setTimeout(()=> {
        navigation.replace("MainPage")
      }, 2000)
    }, [navigation]);
    return (
        <View>
            <Text>Splash</Text>
        </View>
    )
}
const styles = StyleSheet.create({});
export default Splash
