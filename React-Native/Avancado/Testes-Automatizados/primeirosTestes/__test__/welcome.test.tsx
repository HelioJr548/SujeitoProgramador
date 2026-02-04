import {
	fireEvent,
	fireEventAsync,
	render,
} from '@testing-library/react-native';
import Welcome from '../src/Welcome';

describe('Welcome Component tests', () => {
	it('should display welcome messageon login button press', () => {
		const handleGetUserMock = jest.fn();

		const { getByPlaceholderText, getByText } = render(
			<Welcome handleGetUser={handleGetUserMock} />
		);

		const input = getByPlaceholderText('Digite seu nome...');
		fireEvent.changeText(input, 'Helio');

		const button = getByText(/login/i); // regex: case-insensitive
		fireEvent.press(button);

		expect(getByText('Bem vindo Helio')).toBeTruthy();
		expect(handleGetUserMock).toHaveBeenCalled();
	});

	it('should not display welcome message when input is empty and login button is pressed', () => {
		const handleGetUserMock = jest.fn();
		const { getByText, queryByText } = render(
			<Welcome handleGetUser={handleGetUserMock} />
		);

		const loginButton = getByText(/login/i);
		fireEvent.press(loginButton);

		const message = queryByText(/Bem vindo/);
		expect(message).toBeNull();

		expect(handleGetUserMock).not.toHaveBeenCalled();
	});
});
