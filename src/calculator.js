import React, { useState } from 'react';
import CalculatorButton from './calculator-button';
import CalculatorDisplay from './calculator-display';

/**
 * Calculator
 * - main component
 * @returns <Function Component>
 */
function Calculator() {
	const [output, setOutput] = useState('0');
	const [input, setInput] = useState(null);
	const [hasOperator, setHasOperator] = useState(false);
	const [operator, setOperator] = useState(null);

	const maxLength = 14; // maximum character length we can enter

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

		// it's for language-sensitive date and time formatting but it can be used for numbers I guess
		// well it works, it's the best solution I guess
		// parts of the code were copied from AutoScalingText React Component
		// obtained from https://codepen.io/mjijackson/pen/xOzyGX by Michael Jackson
		setOutput(answer.toLocaleString(navigator.language || 'en-US', {
			useGrouping: true,
			maximumFractionDigits: 6
		}));
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
		let newOperator = null;

		switch (key) {
			case '×':
				newOperator = '*';
				break;
			case '÷':
				newOperator = '/';
				break;
			case '+':
				newOperator = '+';
				break;
			case '-':
				newOperator = '-';
				break;
			default:
				// nothing to do
				break;
		}

		if (input === null) {
			setInput(parseFloat(output));
		}

		setOperator(newOperator);
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
		<div className="calculator">
			<div className="calculator__screen">
				<div className="calculator__screen__inner">
					<CalculatorDisplay value={output} />
				</div>
			</div>
			<div className="calculator__row">
				<CalculatorButton title='AC' isSpecial={true} onClick={clearAll} />
				<CalculatorButton title='±' isSpecial={true} onClick={toggleSign} />
				<CalculatorButton title='%' isSpecial={true} onClick={setPercent} />
				<CalculatorButton title='÷' isSpecial={true} onClick={addOperator} />
			</div>
			<div className="calculator__row">
				<CalculatorButton title='7' onClick={addDigit} />
				<CalculatorButton title='8' onClick={addDigit} />
				<CalculatorButton title='9' onClick={addDigit} />
				<CalculatorButton title='×' isSpecial={true} onClick={addOperator} />
			</div>
			<div className="calculator__row">
				<CalculatorButton title='4' onClick={addDigit} />
				<CalculatorButton title='5' onClick={addDigit} />
				<CalculatorButton title='6' onClick={addDigit} />
				<CalculatorButton title='-' isSpecial={true} onClick={addOperator} />
			</div>
			<div className="calculator__row">
				<CalculatorButton title='1' onClick={addDigit} />
				<CalculatorButton title='2' onClick={addDigit} />
				<CalculatorButton title='3' onClick={addDigit} />
				<CalculatorButton title='+' isSpecial={true} onClick={addOperator} />
			</div>
			<div className="calculator__row">
				<CalculatorButton title='0' onClick={addDigit} />
				<CalculatorButton title='.' onClick={addDot} />
				<CalculatorButton title='⇤' isSpecial={true} onClick={removeLast} />
				<CalculatorButton title='=' isSpecial={true} onClick={calculate} />
			</div>
		</div>
	);
}

export default Calculator;
