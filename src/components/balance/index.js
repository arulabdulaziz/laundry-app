import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../../utils/constant';
import Icon from '../icon';
const Balance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.balanceInformation}>
        <View style={styles.text}>
          <Text style={styles.labelBalance}>Saldo:</Text>
          <Text style={styles.balance}>Rp. 100.000</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.labelPoint}>Antar Points:</Text>
          <Text style={styles.point}>100 points</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.buttonIcon}>
          <View style={styles.icon}>
            <Icon label={'Add Balance'} />
          </View>
          <Text style={styles.textIcon}>Add Saldo</Text>
        </TouchableOpacity>
        <View style={{width: 10}} />
        <TouchableOpacity style={styles.buttonIcon}>
          <View style={styles.icon}>
            <Icon label={'Add Coin'} />
          </View>
          <Text style={styles.textIcon}>Get Point</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Balance;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 17,
    // marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: -windowHeight * 0.07,
    flexDirection: 'row',
  },
  balanceInformation: {
    width: '60%',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelBalance: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 20,
  },
  labelPoint: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 12,
  },
  balance: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 20,
  },
  point: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 12,
    color: PRIMARY_COLOR,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    backgroundColor: SECONDARY_COLOR,
    padding: 5,
    borderRadius: 10,
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textIcon: {
    fontFamily: 'TitilliumWeb-Regular',
    textAlign: 'center',
  },
});
