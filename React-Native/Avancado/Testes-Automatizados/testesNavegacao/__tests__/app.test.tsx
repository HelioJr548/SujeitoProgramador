import { render, waitFor } from '@testing-library/react-native';
import App from '../App';
import { NavigationContainer } from '@react-navigation/native';

describe('App component test', () => {
	it('should check render app component', async () => {
		await waitFor(() => {
			render(
				<NavigationContainer>
					<App />
				</NavigationContainer>
			);
		});
	});
});
