import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {GRAY_COLOR, YELLOW_COLOR, PRIMARY_COLOR} from '../../utils/constant';
import Icon from '../icon';
const Status = ({status}) => {
  switch (status) {
    case 2:
      return <Text style={styles.doneWashed}>Sudah Selesai</Text>;

    default:
      return <Text style={styles.stillWashed}>Masih Dicuci</Text>;
  }
};
const ActviveOrder = () => {
  const activeOrders = [
    {
      order_number: '5672520',
      status: 1,
    },
    {
      order_number: '2723829',
      status: 2,
    },
    {
      order_number: '997657',
      status: 2,
    },
    {
      order_number: '62785',
      status: 1,
    },
  ];
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Pesanan Aktif</Text>
      <View style={styles.container}>
        <View style={styles.statusContainer}>
          {activeOrders.map((e, i) => (
            <View style={styles.status} key={i}>
              <Icon label="Washing Machine" />
              <View style={styles.textStatus}>
                <Text style={styles.textStatusTitle}>
                  Pesanan No. {e.order_number}
                </Text>
                <Status status={e.status} />
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ActviveOrder;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  page: {
    backgroundColor: GRAY_COLOR,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
    marginLeft: 30,
  },
  container: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  doneWashed: {
    fontFamily: 'TitilliumWeb-Regular',
    color: PRIMARY_COLOR,
  },
  stillWashed: {
    fontFamily: 'TitilliumWeb-Regular',
    color: YELLOW_COLOR,
  },
  statusContainer: {
    width: windowWidth * 0.85,
  },
  status: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    height: 68,
    alignItems: 'center',
    paddingLeft: 15,
    marginBottom: 20,
  },
  textStatus: {
    marginLeft: 15,
  },
  textStatusTitle: {
    fontFamily: 'TitilliumWeb-SemiBold',
    fontSize: 18,
  },
});
