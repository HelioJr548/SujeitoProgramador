import { render, waitFor } from '@testing-library/react-native';
import Contato from '../../src/Contato';

describe('Contato Component Test', () => {
	afterEach(() => {
		(global as any).mockedRouteName = 'User';
	});

	it('should check phone text', async () => {
		(global as any).mockedRouteName = 'Contato';

		const { getByText } = render(<Contato />);

		await waitFor(() => {
			expect(getByText('99999999')).toBeTruthy();
		});
	});
});
