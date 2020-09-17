import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const varInputs = ({value, onChange}) => {
  return (
    
      <TextInput style={styles.input} onChangeText={onChange} value={value}/>
    
  );
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        backgroundColor:'white',
        borderWidth: 1,
        height: 110,
        width: 150,
        fontSize: 40,
        marginHorizontal: 15,
        marginBottom: 40,
        borderRadius: 15,
        textAlign: 'center'
    },
});

export default varInputs;