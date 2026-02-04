import { fireEvent, render } from '@testing-library/react-native';
import User from '../../src/User';
import { decrease } from '../../src/utils/math';

jest.mock('../../src/utils/math', () => {
	return { decrease: jest.fn() };
});

beforeEach(() => {
	jest.clearAllMocks();
	jest.resetAllMocks();
});

describe('User Component tests', () => {
	it('should check ctender text', () => {
		const { getByText } = render(<User />);

		expect(getByText('Página Usuario')).toBeTruthy();
		expect(getByText('Helio')).toBeTruthy();
	});

	it('should call handleCalculate function', () => {
		const logSpy = jest.spyOn(console, 'log');

		const { getByText } = render(<User />);

		const buttonCalcular = getByText('Calcular');
		fireEvent.press(buttonCalcular);

		expect(logSpy).toHaveBeenCalledWith(30);
	});

	it('should call decrease function', () => {
		const { getByText } = render(<User />);

		const buttonDecrease = getByText('Diminuir');
		fireEvent.press(buttonDecrease);

		expect(decrease).toHaveBeenCalledWith(10, 20);
	});
});
