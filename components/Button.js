import React from "react";
import {Dimensions, StyleSheet, Text, TouchableOpacity} from "react-native";

const screen = Dimensions.get("window");

class Button extends React.Component {

    render() {
        const {children, disabled, firstCol, doubleButton, lastButton, updateValue, clear, dot, result, updateOperation} = this.props;

        return (
            <>
                <TouchableOpacity
                    style={[styles.button,
                        doubleButton ? styles.doubleButton : '',
                        firstCol ? styles.firstColButton : '',
                        lastButton ? styles.lastRowButton : '']}
                    disabled={!!disabled}
                    onPress={() => {
                        updateValue ? updateValue(children) : '';
                        updateOperation ? updateOperation(children) : '';
                        dot ? dot() : '';
                        clear ? clear() : '';
                        result ? result() : '';
                    }}
                >
                    <Text style={styles.buttonText}>{children}</Text>
                </TouchableOpacity>
            </>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#7d7e80",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 1,
        height: 100,
    },
    doubleButton: {
        width: screen.width / 2 - 2,
        flex: 0,
    },
    lastRowButton: {
        backgroundColor: "#f2a33c",
    },
    firstColButton: {
        backgroundColor: "#646466",
    },
    buttonText: {
        color: '#fff',
        fontSize: 30,
    }
});

export default Button;
