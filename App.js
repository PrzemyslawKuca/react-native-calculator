import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './components/Button';

export default class App extends React.Component {

    state = {
        value: 0,
        operation: '',
        tempValue: 0,
    };

    updateValue = (value) => {
        if (this.state.value === 0) {
                this.setState({
                    value: `${value}`
                })
        }
        else{
            this.setState({
                value: `${this.state.value}${value}`
            })
        }
    };

    updateOperation = (value) => {
        this.setState({
            operation: value,
            tempValue: this.state.value,
            value: 0,
        })
    };

    result = () => {
        let result;
        switch(this.state.operation){
            case "/":
                result = parseFloat(this.state.tempValue) / parseFloat(this.state.value);
                break;
            case "X":
                result = parseFloat(this.state.tempValue) * parseFloat(this.state.value);
                break;
            case "-":
                result = parseFloat(this.state.tempValue) - parseFloat(this.state.value);
                break;
            case "+":
                result = parseFloat(this.state.tempValue) + parseFloat(this.state.value);
                break;
            default:
                result = 0;
                break;
        }

        this.setState({
            value: result,
        })
    };

    dot = () => {
        this.setState({
            value: `${this.state.value}.`
        })
    };

    clear = () => {
        this.setState({
            value: 0,
            operation: '',
            tempValue: 0,
        })
    };

    render() {
        const {value} = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.resultText}>{value}</Text>
                <View style={styles.keyBoard}>
                    <View style={{flexDirection: "row"}}>
                        <Button firstRow firstCol clear={this.clear}>AC</Button>
                        <Button firstRow firstCol doubleButton disabled/>
                        <Button firstRow lastButton updateOperation={this.updateOperation}>/</Button>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Button updateValue={this.updateValue}>7</Button>
                        <Button updateValue={this.updateValue}>8</Button>
                        <Button updateValue={this.updateValue}>9</Button>
                        <Button lastButton updateOperation={this.updateOperation}>X</Button>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Button updateValue={this.updateValue}>4</Button>
                        <Button updateValue={this.updateValue}>5</Button>
                        <Button updateValue={this.updateValue}>6</Button>
                        <Button lastButton updateOperation={this.updateOperation}>-</Button>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Button updateValue={this.updateValue}>1</Button>
                        <Button updateValue={this.updateValue}>2</Button>
                        <Button updateValue={this.updateValue}>3</Button>
                        <Button lastButton updateOperation={this.updateOperation}>+</Button>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Button doubleButton updateValue={this.updateValue}>0</Button>
                        <Button dot={this.dot}>,</Button>
                        <Button lastButton result={this.result}>=</Button>
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
        justifyContent: 'space-between',
    },
});
