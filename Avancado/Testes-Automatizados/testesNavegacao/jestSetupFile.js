import { useRoute } from '@react-navigation/native';

export const mockNavigate = jest.fn();
export const mockGoBack = jest.fn();

global.mockedRouteName = 'User';

// Mock do Navigation
jest.mock('@react-navigation/native', () => {
	const actualNav = jest.requireActual('@react-navigation/native');
	return {
		...actualNav,
		useNavigation: () => ({
			navigate: mockNavigate,
			goBack: mockGoBack,
		}),
		NavigationContainer: ({ children }) => <>{children}</>,
		useRoute: () => {
			if (global.mockedRouteName === 'User') {
				return { params: { name: 'Helio' } };
			}
			if (global.mockedRouteName === 'Contato') {
				return { params: { telefone: '99999999' } };
			}
		},
	};
});

jest.mock('@react-navigation/native-stack', () => {
	return {
		createNativeStackNavigator: () => ({
			Navigator: ({ children }) => <>{children}</>,
			Screen: ({ children }) => <>{children}</>,
		}),
	};
});
