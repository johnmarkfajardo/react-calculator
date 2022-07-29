import { render, screen } from '@testing-library/react';
import Calculator from './calculator';

test('renders "AC" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/AC/i);
	expect(element).toBeInTheDocument();
});

test('renders "1" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/1/i);
	expect(element).toBeInTheDocument();
});

test('renders "2" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/2/i);
	expect(element).toBeInTheDocument();
});

test('renders "3" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/3/i);
	expect(element).toBeInTheDocument();
});

test('renders "4" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/4/i);
	expect(element).toBeInTheDocument();
});

test('renders "5" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/5/i);
	expect(element).toBeInTheDocument();
});

test('renders "6" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/6/i);
	expect(element).toBeInTheDocument();
});

test('renders "7" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/7/i);
	expect(element).toBeInTheDocument();
});

test('renders "8" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/8/i);
	expect(element).toBeInTheDocument();
});

test('renders "9" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/9/i);
	expect(element).toBeInTheDocument();
});

test('renders "=" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/=/i);
	expect(element).toBeInTheDocument();
});

test('renders "±" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/±/i);
	expect(element).toBeInTheDocument();
});

test('renders "%" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/%/i);
	expect(element).toBeInTheDocument();
});

test('renders "÷" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/÷/i);
	expect(element).toBeInTheDocument();
});

test('renders "×" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/×/i);
	expect(element).toBeInTheDocument();
});

test('renders "-" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/-/i);
	expect(element).toBeInTheDocument();
});

test('renders "+" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/\+/i);
	expect(element).toBeInTheDocument();
});

test('renders "⇤" button', () => {
	render(<Calculator />);
	const element = screen.getByText(/⇤/i);
	expect(element).toBeInTheDocument();
});

test('renders "." button', () => {
	render(<Calculator />);
	const element = screen.getByText(/\./i);
	expect(element).toBeInTheDocument();
});
