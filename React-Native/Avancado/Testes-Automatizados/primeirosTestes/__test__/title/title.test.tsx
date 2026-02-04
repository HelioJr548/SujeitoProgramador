import { render } from '@testing-library/react-native';
import Title from '../../src/Title';

describe('Tests Title component', () => {
	it('should render title correctly', () => {
		const { getByText } = render(<Title title="Teste" />);

		const text = getByText('Teste');
		expect(text).toBeTruthy();
	});

	it('should check style', () => {
		const { getByText } = render(<Title title="Teste" />);

		const titleElement = getByText('Teste');

		expect(titleElement.props.style).toMatchObject({
			fontSize: 30,
			color: '#ff0000',
			marginBottom: 20,
		});
	});
});
