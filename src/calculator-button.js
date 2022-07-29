import React from 'react';
import CalcContext from './calculator-context';

/**
 * CalcButton
 * @param {String} type
 * @param {String} operator
 * @param {String} children
 * @param {Function} onClick
 * @returns <Function Component>
 */
function CalcButton({type = "digit", operator, children}) {
	let btnClasses = 'calculator__button';

	btnClasses += type !== 'digit' ? ' calculator__button_special' : '';

	return (
		<CalcContext.Consumer>
			{ctx => {
				let handler = () => console.log('No handle');

				if (type === "digit") {
					handler = () => ctx.addDigit(children);
				}
				else if (type === "operator") {
					handler = () => ctx.addOperator(operator);
				}
				else if (type === "percent") {
					handler = ctx.setPercent;
				}
				else if (type === "clear") {
					handler = ctx.clearAll;
				}
				else if (type === "toggle") {
					handler = ctx.toggleSign;
				}
				else if (type === "dot") {
					handler = ctx.addDot;
				}
				else if (type === "equals") {
					handler = ctx.calculate;
				}
				else if (type === "remove") {
					handler = ctx.removeLast;
				}

				return (
					<button className={btnClasses} onClick={handler}>{children}</button>
				);
			}}
		</CalcContext.Consumer>
	);
}

export default CalcButton;
