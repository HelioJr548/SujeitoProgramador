import { fireEvent, render, waitFor } from '@testing-library/react-native';
import Profile from '../../src/Profile';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TStackParamList } from '../../App';

beforeEach(() => {
	jest.clearAllMocks();
});

describe('Profile Component tests', () => {
	it('should check render text', () => {
		const { getByText } = render(<Profile />);

		expect(getByText('Página Perfil')).toBeTruthy();
	});

	it('should navigate some when click back button', async () => {
		const { getByText } = render(<Profile />);

		const backButton = getByText('Voltar');
		fireEvent.press(backButton);

		const { goBack } =
			useNavigation<NativeStackNavigationProp<TStackParamList>>();

		await waitFor(() => {
			expect(goBack).toHaveBeenCalledTimes(1);
		});
	});
});
