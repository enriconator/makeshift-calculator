import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Operator from '../components/Operator';
import VarInputs from '../components/VarInputs';
import ExtraBtns from '../components/ExtraBtns';

const CalculatorScreen = () => {
    const [operator, setOperator] = useState('');
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [answer, setAnswer] = useState();

    const setSolve = () => {
        if (operator == '+') {
            setAnswer(parseInt(x) + parseInt(y));
        } else if (operator == '-') {
            setAnswer(parseInt(x) - parseInt(y));
        } else if (operator == '*') {
            setAnswer(parseInt(x) * parseInt(y));
        } else {
            setAnswer(parseInt(x) / parseInt(y));
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.answer}>{answer}</Text>
            <View style={styles.secondRow}>
                <VarInputs
                    value={x}
                    onChange={(value) => setX(value)}
                />
                <Text style={styles.sign}>{operator}</Text>
                <VarInputs
                    value={y}
                    onChange={(value) => setY(value)}
                />
            </View>
            <View style={styles.thirdRow}>
                <Operator
                    op="+"
                    onPressed={() => setOperator('+')}
                />
                <Operator
                    op="-"
                    onPressed={() => setOperator('-')}
                />
                <Operator
                    op="*"
                    onPressed={() => setOperator('*')}
                />
                <Operator
                    op="/"
                    onPressed={() => setOperator('/')}
                />
            </View>
            <View style={styles.fourthRow}>
                <ExtraBtns
                    value="C"
                    onPressed={() => {
                        setX()
                        setY()
                        setAnswer()
                        setOperator()
                    }}
                />
                <ExtraBtns
                    value="="
                    onPressed={() => setSolve()}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#121212',
        flex: 1,
    },
    secondRow: {
        flexDirection: 'row'
    },
    thirdRow: {
        flexDirection: 'row'
    },
    fourthRow: {
        flexDirection: 'row'
    },
    answer: {
        backgroundColor: 'white',
        borderColor: 'black',
        marginTop: 80,
        margin: 20,
        marginVertical: 40,
        height: 110,
        width: 350,
        borderRadius: 15,
        fontSize: 50,
        textAlign: "right",
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    sign: {
        fontSize: 50,
        color: 'white',
        marginVertical: 20
    }
});

export default CalculatorScreen;