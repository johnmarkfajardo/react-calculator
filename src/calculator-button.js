import React from 'react';

/**
 * CalculatorButton
 * @param {String} title
 * @param {boolean} isSpecial
 * @param {boolean} isLarge
 * @param {Function} onClick
 * @returns <Function Component>
 */
function CalculatorButton({title = '', isSpecial = false, isLarge = false, onClick}) {
	let classes = 'calculator__button';

	classes += isSpecial ? ' calculator__button_special' : '';
	classes += isLarge ? ' calculator__button_large' : '';

	const handler = () => {
		onClick(title);
	};

	return <button className={classes} onClick={handler}>{title}</button>;
}

export default CalculatorButton;
