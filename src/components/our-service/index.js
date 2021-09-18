import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SECONDARY_COLOR} from '../../utils/constant';
import Icon from '../icon';
const OurService = () => {
  const services = [
    {
      label: 'Kilo',
      text: 'Kiloan',
    },
    {
      label: 'Unit',
      text: 'Satuan',
    },
    {
      label: 'VIP',
      text: 'VIP',
    },
    {
      label: 'Carpet',
      text: 'Karpet',
    },
    {
      label: 'Ironing',
      text: 'Setrika Saja',
    },
    {
      label: 'Express',
      text: 'Express',
    },
  ];
  return (
    <View>
      <Text style={styles.title}>Layanan Kami</Text>
      <View style={styles.container}>
        {services.map((e, i) => (
          <TouchableOpacity style={styles.buttonIcon} key={i}>
            <View style={styles.icon}>
              <Icon label={e.label} />
            </View>
            <Text style={styles.textIcon}>{e.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default OurService;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
    marginLeft: 30,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonIcon: {
    marginBottom: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: (windowWidth - 40) * 0.25,
  },
  icon: {
    borderRadius: 10,
    backgroundColor: SECONDARY_COLOR,
    padding: 15,
  },
  textIcon: {
    fontFamily: 'TitilliumWeb-Light',
    textAlign: 'center',
    fontSize: 15,
  },
});
