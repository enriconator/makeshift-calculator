import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ExtraBtns = ({ value, onPressed }) => {
    return (
        <TouchableOpacity style={styles.operatorBtn} onPress={() => onPressed()}>
            <Text style={styles.btnStyle}>{value}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    operatorBtn: {
        borderRadius: 20,
        backgroundColor: 'red',
        width: 160,
        height: 70,
        marginVertical: 30,
        marginHorizontal: 10
    },
    btnStyle: {
        fontSize: 40,
        color: 'white',
        alignSelf: 'center',
        margin: 5
    }

});

export default ExtraBtns;