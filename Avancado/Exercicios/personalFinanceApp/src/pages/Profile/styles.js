import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: #f0f4ff;
	align-items: center;
`;

export const Message = styled.Text`
	font-size: 18px;
	font-weight: bold;
	margin-top: 20px;
`;

export const Name = styled.Text`
	font-size: 24px;
	margin: 8px 0 24px;
	padding: 0 14px;
	color: #121212;
`;

export const NewLink = styled.TouchableOpacity`
	background-color: #3b3dbf;
	width: 90%;
	height: 45px;
	border-radius: 8px;
	justify-content: center;
	align-items: center;
	margin-bottom: 14px;
`;

export const NewText = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: #fff;
`;

export const LogoutButton = styled.TouchableOpacity`
	width: 90%;
	height: 45px;
	border-radius: 8px;
	justify-content: center;
	align-items: center;
	border: 1px solid #c62c36;
`;

export const LogoutText = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: #c62c36;
`;
