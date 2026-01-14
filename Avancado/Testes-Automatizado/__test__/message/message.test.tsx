import { fireEvent, render, screen } from '@testing-library/react-native';
import Message from '../../src/Message';

describe('Component Message', () => {
	it('should render text message', () => {
		// const { getByTestId } = render(<Message />);
		// expect(getByTestId('message').props.children).toBe('Aguardando...');
		render(<Message />);
		expect(screen.getByTestId('message').props.children).toBe(
			'Aguardando...'
		);
	});

	it('should change messasge on click button', () => {
		render(<Message />);

		expect(screen.getByTestId('message').props.children).toBe(
			'Aguardando...'
		);

		fireEvent.press(screen.getByText('Acessar'));

		expect(screen.getByTestId('message').props.children).toBe(
			'Bem vindo Helio'
		);
	});
});
