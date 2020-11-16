const mexp = require('math-expression-evaluator');

let currentValue = '';
const operators = ['+', '-', '*', '/'];
export const initialState = {
    value: 0,
    operation: '',
};

const calculator = (type, value, state) => {
    switch (type) {
        case 'number':
            return updateValue(value, state);
        case 'dot':
            return dot(state);
        case 'operator':
            currentValue = '';
            if (state.value.length > 0) {
                if ((isNumber(state.value.slice(-1))) || (!operators.includes(state.value.slice(-1)))) {
                    return {value: `${state.value}` + `${value}`};
                }
            }
            return {value: `${state.value}`};
        case 'result':
            currentValue = '';
            return result(state);
        case 'PI':
            return constant(state, 'pi');
        case 'pow3':
            return pow(state, currentValue, 3);
        case 'exp':
            return constant(state, 'e');
        case 'pow2':
            return pow(state, currentValue, 2);
        case 'ln':
            return operationByTag(state, 'ln');
        case 'log':
            return operationByTag(state, 'log');
        case 'expPow':
            return pow(state, 'e', currentValue);
        case '10x':
            return pow(state, 10, currentValue);
        case '√x':
            return operationByTag(state, 'root');
        case 'factor':
            return factor(state);
        case 'clear':
            currentValue = '';
            return initialState;
        default:
            return state;
    }
};

const updateValue = (value, state) => {
    if (state.value == 0) {
        currentValue = `${value}`;
        return {value: `${value}`};
    }

    currentValue = `${currentValue}` + `${value}`;
    return {value: `${state.value}${value}`};
};

const result = (state) => {
    if ((operators.includes(state.value.slice(-1)))) {
        state.value = state.value.substring(0, state.value.length - 1);
    }
    return {value: mexp.eval(state.value)};
};

const dot = (state) => {
    if (!isNaN(currentValue) && currentValue.toString().indexOf('.') != -1) {
        return {value: `${state.value}`};
    }

    currentValue = `${currentValue}.`;
    return {value: `${state.value}.`};
};

const operationByTag = (state, tag) => {
    let localValue = currentValue;
    if (currentValue.length > 0) {
        state.value = state.value.substring(0, state.value.length - currentValue.length);
        currentValue = '';
        return {value: `${state.value}` + `${tag}(${localValue})`};
    }
    return {value: `${state.value}`};
};

const pow = (state, x, y) => {
    if (currentValue.length > 0) {
        state.value = state.value.substring(0, state.value.length - currentValue.length);
        currentValue = '';
        return {value: `${state.value}` + `pow(${x},${y})`};
    }
    return {value: `${state.value}`};
};

const constant = (state, name) => {
    if (state.value == 0) {
        return {value: `${name}`};
    }
    return {value: `${state.value}` + `${name}`};
};

const factor = (state) => {
    if (currentValue.slice(-1) === '!') {
        return {value: `${state.value}`};
    }

    currentValue = `${currentValue}!`;
    return {value: `${state.value}!`};
};

function isNumber(n) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}

export default calculator;
