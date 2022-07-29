import React, { useEffect, useRef, useState } from "react";
import CalcContext from './calculator-context';

/**
 * CalculatorDisplay
 * - Parts of the code were copied from AutoScalingText React Component
 * - Obtained from https://codepen.io/mjijackson/pen/xOzyGX by Michael Jackson
 * - I got stuck making my own solution, time is running out :s
 * - The best solution is out there so no need to re-invent the wheel
 * @param {String} text 
 * @returns <Function Component>
 */
function CalcDisplay() {
	const [scale, setScale] = useState(1);
	const ref = useRef(null);

	// eslint-disable-next-line
	useEffect(() => {
		const node = ref.current;
		const parent = node.parentNode;
		const availableWidth = parent.offsetWidth
		const actualWidth = node.offsetWidth
		const actualScale = availableWidth / actualWidth

		if (scale === actualScale) {
			return;
		}

		if (actualScale < 1) {
			setScale(actualScale);
		} else if (scale < 1) {
			setScale(1);
		}
	});

	return (
		<CalcContext.Consumer>
			{ctx => (
				<div style={{ transform: `scale(${scale},${scale})` }} ref={ref} className="calculator__output">
					{ctx.screenText}
				</div>
			)}
		</CalcContext.Consumer>
	);
}

export default CalcDisplay;
