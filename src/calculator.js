import React, { useState, useEffect } from 'react';
import CalcButton from './calculator-button';
import CalcDisplay from './calculator-display';
import CalcContext from './calculator-context';

/**
 * Calculator
 * - main component
 * @returns <Function Component>
 */
function Calculator() {
	const maxLength = 14; // maximum character length we can enter
	const [output, setOutput] = useState('0');
	const [input, setInput] = useState(null);
	const [hasOperator, setHasOperator] = useState(false);
	const [operator, setOperator] = useState(null);
	const [screenText, setScreenText] = useState('0');;

	useEffect(() => {
		// it's for language-sensitive date and time formatting but it can be used for numbers I guess
		// well it works, it's the best solution I guess
		// parts of the code were copied from AutoScalingText React Component
		// obtained from https://codepen.io/mjijackson/pen/xOzyGX by Michael Jackson
		setScreenText(output.toLocaleString(navigator.language || 'en-US', {
			useGrouping: true,
			maximumFractionDigits: 6
		}));
	}, [output]);

	const calculate = () => {
		if (input === null) {
			return;
		}

		let answer = 0;
		let outputValue = parseFloat(output);

		switch (operator) {
			case '*':
				answer = input * outputValue;
				break;
			case '/':
				if (outputValue === 0) {
					answer = 'Cannot divide by zero';
				} else {
					answer = input / outputValue;
				}
				break;
			case '+':
				answer = input + outputValue;
				break;
			case '-':
				answer = input - outputValue;
				break;
			default:
				// nothing to do
				break;
		}

		setOutput(answer);
		setInput(null);
	};

	const addDigit = digit => {
		if ((output.length + 1) > maxLength) {
			return;
		}

		if (hasOperator) {
			setHasOperator(false);
			setOutput(digit);
		} else {
			setOutput(output === '0' ? digit : output + digit);
		}
	};

	const setPercent = () => {
		if (output === '0') {
			return;
		} else {
			if (input === null) {
				setOutput(parseFloat(output) / 100);
			} else {
				// if it's the second input get the percentage of first input instead
				// based on how windows calculator works XD
				setOutput(input * (parseFloat(output) / 100));
			}
		}
	};

	const addDot = () => {
		// check if dot already exists
		if ((/\./).test(output) || output.length > maxLength) {
			return;
		}

		if (hasOperator) {
			setHasOperator(false);
			setOutput('0.');
			return;
		}

		setOutput(output + '.');
	};

	const toggleSign = () => {
		if (output === '0') {
			return;
		}

		setOutput(String(parseFloat(output) * -1));
	};

	const addOperator = key => {
		if (input === null) {
			setInput(parseFloat(output));
		}

		setOperator(key);
		setHasOperator(true);
	};

	const removeLast = () => {
		if (output === '0') {
			return;
		}

		if (output.length === 1) {
			setOutput('0');
		} else {
			setOutput(output.substring(0, output.length - 1));
		}
	};

	const clearAll = () => {
		setOutput('0');
		setHasOperator(false);
		setInput(null);
		setOperator(null);
	};

	return (
		<CalcContext.Provider value={
			{
				screenText: screenText,
				calculate: calculate,
				addDigit: addDigit,
				setPercent: setPercent,
				addDot: addDot,
				toggleSign: toggleSign,
				addOperator: addOperator,
				removeLast: removeLast,
				clearAll: clearAll
			}
		}>
			<div className="calculator">
				<div className="calculator__screen">
					<div className="calculator__screen__inner">
						<CalcDisplay />
					</div>
				</div>
				<div className="calculator__row">
					<CalcButton type="clear">AC</CalcButton>
					<CalcButton type="toggle">±</CalcButton>
					<CalcButton type="percent">%</CalcButton>
					<CalcButton type="operator" operator="/">÷</CalcButton>
				</div>
				<div className="calculator__row">
					<CalcButton type="digit">7</CalcButton>
					<CalcButton type="digit">8</CalcButton>
					<CalcButton type="digit">9</CalcButton>
					<CalcButton type="operator" operator="*">×</CalcButton>
				</div>
				<div className="calculator__row">
					<CalcButton type="digit">4</CalcButton>
					<CalcButton type="digit">5</CalcButton>
					<CalcButton type="digit">6</CalcButton>
					<CalcButton type="operator" operator="-">-</CalcButton>
				</div>
				<div className="calculator__row">
					<CalcButton type="digit">1</CalcButton>
					<CalcButton type="digit">2</CalcButton>
					<CalcButton type="digit">3</CalcButton>
					<CalcButton type="operator" operator="+">+</CalcButton>
				</div>
				<div className="calculator__row">
					<CalcButton type="digit">0</CalcButton>
					<CalcButton type="dot">.</CalcButton>
					<CalcButton type="remove">⇤</CalcButton>
					<CalcButton type="equals">=</CalcButton>
				</div>
			</div>
		</CalcContext.Provider>
	);
}

export default Calculator;
