import React from "react";
import {Dimensions, StyleSheet, Text, TouchableOpacity} from "react-native";

class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            orientation: Dimensions.get('window').width < Dimensions.get('window').height,
        }
    }

    onChange = ({window, screen}) => {
        this.setState({orientation: window.height > window.width});
    };

    componentDidMount() {
        Dimensions.addEventListener("change", this.onChange);
    }
    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.onChange);
    }

    render() {
        const {children, disabled, double, orange, gray, hidePortrait, operation} = this.props;
        return (
            <TouchableOpacity
                style={[styles.button,
                    double ? styles.doubleButton : '',
                    gray ? styles.firstColButton : '',
                    orange ? styles.lastRowButton : '',
                    hidePortrait && this.state.orientation ? styles.hidePortrait : '',
                    !this.state.orientation ? styles.landscape : '',
                ]}
                disabled={!!disabled}
                onPress={() => {
                    operation && operation()
                }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </TouchableOpacity>
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
    landscape: {
        height: 50,
    },
    hidePortrait: {
        display: 'none',
    },
    doubleButton: {
        flexBasis: 2,
        flex: 2,
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
