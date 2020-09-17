import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { onChange } from 'react-native-reanimated';

const Operator = ({op, onPressed}) => {
  return (
    
      <TouchableOpacity style={styles.operatorBtn} onPress={() => onPressed()}>
        <Text style={styles.btnStyle}>{op}</Text>
      </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  operatorBtn: {
    borderRadius: 20,
    backgroundColor: 'orange',
    width: 80,
    height: 80,
    marginHorizontal: 5
  },
  btnStyle: {
    fontSize: 50,
    color: 'white',
    alignSelf: 'center',
  }
});

export default Operator;