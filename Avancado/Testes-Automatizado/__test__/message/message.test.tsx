import { act, fireEvent, render, screen } from '@testing-library/react-native';
import Message from '../../src/Message';

describe('Component Message', () => {
	// afterAll(() => {
	// 	jest.clearAllTimers();
	// });

	it('should render text message', () => {
		// const { getByTestId } = render(<Message />);
		// expect(getByTestId('message').props.children).toBe('Aguardando...');
		render(<Message />);
		expect(screen.getByTestId('message').props.children).toBe(
			'Aguardando...'
		);
	});

	it('should change messasge on click button', async () => {
		jest.useFakeTimers();
		render(<Message />);

		expect(screen.getByTestId('message').props.children).toBe(
			'Aguardando...'
		);

		act(() => {
			jest.runAllTimers();
			fireEvent.press(screen.getByText('Acessar'));
		});

		// expect(screen.getByTestId('message').props.children).toBe(
		// 	'Bem vindo Helio'
		// );

		const text = await screen.findByText('Bem vindo Helio');
		expect(text.props.children).toBe('Bem vindo Helio');
	});
});
