import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './components/Button';
import calculator, {initialState} from './utilities/operations'
import {ButtonsArray} from './assets/ButtosArray'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = initialState;
    }

    handleTap = (type, value) => {
        this.setState(state => calculator(type, value, state));
    };

    render() {
        const {value} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.resultText}>{value}</Text>
                <View style={styles.keyBoard}>
                    {ButtonsArray.map((row, number) => (
                            <View style={{flexDirection: "row"}} key={number}>
                                {row.map((item, index) =>
                                    <Button gray={item.gray} hidePortrait={item.hidePortrait}
                                            double={item.double} orange={item.orange}
                                            key={(number.toString() + index.toString())}
                                            operation={() => {
                                                this.handleTap(item.operation, item.value)
                                            }}
                                    >{item.name}</Button>
                                )}
                            </View>
                        )
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#545557",
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        height: '100%',
    },
    resultText: {
        color: '#FFF',
        fontSize: 80,
    },
    keyBoard: {
        backgroundColor: "#545557",
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
});
