import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from '../icon';
const TabItem = (props) => {
  const {label, onPress, onLongPress, isFocused} = props;
  return (
    <TouchableOpacity
      style={{alignItems: 'center'}}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon label={label} isFocused isFocused={isFocused}/>
      {/* <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text> */}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({});
