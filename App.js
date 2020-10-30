import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './components/Button';

import calculator, {initialState} from './utilities/operations'

export default class App extends React.Component {
    state = initialState;

    handleTap = (type, value) => {
        this.setState(state => calculator(type, value, state));
    };

    render() {
        const {value} = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.resultText}>{value}</Text>
                <View style={styles.keyBoard}>
                    <View style={{flexDirection: "row"}}>
                        <Button gray hidePortrait operation={() => {this.handleTap("operator", "y√x")}}>y√x</Button>
                        <Button gray hidePortrait operation={() => {this.handleTap("strong")}}>x!</Button>
                        <Button gray operation={() => {this.handleTap("clear")}}>AC</Button>
                        <Button gray double disabled/>
                        <Button orange operation={() => this.handleTap("operator", '/')}>/</Button>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Button gray hidePortrait operation={() => {this.handleTap("expPow")}}>e×</Button>
                        <Button gray hidePortrait operation={() => {this.handleTap("10x")}}>10×</Button>
                        <Button operation={() => this.handleTap("number", 7)}>7</Button>
                        <Button operation={() => this.handleTap("number", 8)}>8</Button>
                        <Button operation={() => this.handleTap("number", 9)}>9</Button>
                        <Button orange operation={() => this.handleTap("operator", 'X')}>x</Button>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Button gray hidePortrait operation={() => {this.handleTap("ln")}}>ln</Button>
                        <Button gray hidePortrait operation={() => {this.handleTap("log")}}>log</Button>
                        <Button operation={() => this.handleTap("number", 4)}>4</Button>
                        <Button operation={() => this.handleTap("number", 5)}>5</Button>
                        <Button operation={() => this.handleTap("number", 6)}>6</Button>
                        <Button orange operation={() => this.handleTap("operator", '-')}>-</Button>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Button gray hidePortrait operation={() => {this.handleTap("exp")}}>e</Button>
                        <Button gray hidePortrait operation={() => {this.handleTap("pow2")}}>x²</Button>
                        <Button operation={() => this.handleTap("number", 1)}>1</Button>
                        <Button operation={() => this.handleTap("number", 2)}>2</Button>
                        <Button operation={() => this.handleTap("number", 3)}>3</Button>
                        <Button orange operation={() => this.handleTap("operator", '+')}>+</Button>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Button gray hidePortrait operation={() => {this.handleTap("PI")}}>π</Button>
                        <Button gray hidePortrait operation={() => {this.handleTap("pow3")}}>x³</Button>
                        <Button double operation={() => this.handleTap("number", 0)}>0</Button>
                        <Button operation={() => this.handleTap("dot")}>,</Button>
                        <Button orange operation={() => this.handleTap("result")}>=</Button>
                    </View>
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
