import { fireEvent, render, waitFor } from '@testing-library/react-native';
import Home from '../../src/Home';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TStackParamList } from '../../App';

beforeEach(() => {
	jest.clearAllMocks();
});

describe('Test component Home', () => {
	it('should render text at home component', () => {
		const { getByText } = render(<Home />);

		expect(getByText('Página Home')).toBeTruthy();
	});

	it('should navigate to Profile screen when button is pressed', async () => {
		const { getByText } = render(<Home />);

		const button = getByText('Perfil');
		fireEvent.press(button);

		const { navigate } =
			useNavigation<NativeStackNavigationProp<TStackParamList>>();

		await waitFor(() => {
			expect(navigate).toHaveBeenLastCalledWith('Profile');
		});
	});
});
