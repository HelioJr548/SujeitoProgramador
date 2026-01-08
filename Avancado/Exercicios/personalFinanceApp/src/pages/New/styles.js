import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Background = styled(SafeAreaView)`
	flex: 1;
	background-color: #f8fafc;
`;

export const Input = styled.TextInput`
	height: 60px;
	width: 92%;
	background-color: #ffffff;
	font-size: 17px;
	padding: 0 20px;
	margin-bottom: 20px;
	border-radius: 16px;
	border-width: 1px;
	border-color: rgba(99, 102, 241, 0.2);
`;

export const SubmitButton = styled.TouchableOpacity`
	width: 92%;
	height: 60px;
	align-items: center;
	justify-content: center;
	background-color: #6366f1;
	border-radius: 20px;
	margin-top: 24px;
`;

export const SubmitText = styled.Text`
	color: #ffffff;
	font-size: 18px;
	font-weight: 700;
	letter-spacing: 0.3px;
`;
