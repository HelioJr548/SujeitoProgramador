import { render } from '@testing-library/react-native';
import User from '../../src/User';

describe('User Component tests', () => {
	it('should check ctender text', () => {
		const { getByText } = render(<User />);

		expect(getByText('Página Usuario')).toBeTruthy();
		expect(getByText('Helio')).toBeTruthy();
	});
});
