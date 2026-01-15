import { fireEvent, render } from '@testing-library/react-native';
import App from '../../App';

it('Test exemplo', () => {
	const num1 = 10;
	const num2 = 20;
	const sum = num1 + num2;

	expect(1).toBe(1);
	expect(sum).toBe(30);
	expect(sum).not.toBe(50);
	expect(sum).toBeGreaterThan(20);
	expect(sum).toBeLessThan(50);
});

describe('App Componente testes', () => {
	it('Test render App component', () => {
		const { getByText } = render(<App />);

		expect(getByText('App Contador')).toBeTruthy();
	});

	/* 
		padrão AAA (Arrange, Act, Assert) :
		Arrange (preparar o ambiente, como mocks),
		Act (executar a ação testada) 
		e Assert (verificar o resultado esperado)
	*/

	it('should increase counter on press button', () => {
		const { getByText, getByTestId } = render(<App />);

		const button = getByText('+');
		fireEvent.press(button);
		fireEvent.press(button);

		const counterText = getByTestId('counter');

		expect(counterText.props.children).toBe(2);
	});

	it('should decrease counter on press button', () => {
		const { getByText, getByTestId } = render(<App />);

		const button = getByText('-');
		fireEvent.press(button);

		const counterText = getByTestId('counter');
		expect(counterText.props.children).toBe(-1);
	});

	it('should render the welcome component', () => {
		const { getByPlaceholderText, getByText } = render(<App />);

		const input = getByPlaceholderText('Digite seu nome...');
		const loginButton = getByText(/login/i);

		fireEvent.changeText(input, 'Helio');
		fireEvent.press(loginButton);

		expect(input).toBeTruthy();
		expect(loginButton).toBeTruthy();
	});
});
