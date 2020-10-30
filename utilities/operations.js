export const initialState = {
    value: 0,
    operation: '',
    tempValue: 0,
}

const calculator = (type, value, state) => {
    switch (type) {
        case "number":
            return updateValue(value, state);
        case "dot":
            return dot(state);
        case "operator":
            return {
                operation: value,
                tempValue: state.value,
                value: 0,
            };
        case "result":
            return result(state);
        case "PI":
            return pi();
        case "pow3":
            return pow(state.value, 3);
        case "exp":
            return exp();
        case "pow2":
            return pow(state.value, 2);
        case "ln":
            return ln(state);
        case "log":
            return log(state);
        case "expPow":
            return expPow(state);
        case "10x":
            return pow( 10, state.value);
        case "strong":
            return strong(state);
        case "clear":
            return initialState;
        default:
            return state;
    }
};

export default calculator;

const updateValue = (value, state) => {
    if (state.value === 0) {return {value: `${value}`}}
    return {value: `${state.value}${value}`};
};

const result = (state) => {
    let result;
    switch (state.operation) {
        case "/":
            result = parseFloat(state.tempValue) / parseFloat(state.value);
            break;
        case "X":
            result = parseFloat(state.tempValue) * parseFloat(state.value);
            break;
        case "-":
            result = parseFloat(state.tempValue) - parseFloat(state.value);
            break;
        case "+":
            result = parseFloat(state.tempValue) + parseFloat(state.value);
            break;
        case "y√x":
            result = Math.pow(state.value, 1 / state.tempValue)
            break;
        default:
            result = 0;
            break;
    }
    return {value: result}
};

const strong = (state) => {
    let result = 1;
    while (state.value > 0) {
        result = result * state.value;
        state.value--;
    }
    return {value: result}
}

const dot = (state) => {return {value: `${state.value}.`}}
const pow = (x, y) => {return {value: Math.pow(x, y)}}
const ln = (state) => {return {value: Math.log(state.value)}}
const log = (state) => {return {value: Math.log10(state.value)}}
const expPow = (state) => {return {value: Math.pow(Math.E, state.value)}}
const exp = () => {return {value: Math.E}}
const pi = () => {return {value: Math.PI,}}
