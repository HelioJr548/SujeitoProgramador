import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: #f8fafc;
	align-items: center;
	padding-bottom: 40px;
`;

export const Message = styled.Text`
	font-size: 18px;
	font-weight: 600;
	color: #64748b;
	margin-top: 32px;
	letter-spacing: 0.5px;
`;

export const Name = styled.Text`
	font-size: 32px;
	font-weight: bold;
	color: #1e293b;
	margin: 12px 0 40px;
	text-align: center;
	padding: 0 24px;
`;

export const NewLink = styled.TouchableOpacity`
	background-color: #6366f1;
	width: 92%;
	height: 60px;
	border-radius: 20px;
	justify-content: center;
	align-items: center;
	margin-bottom: 24px;
`;

export const NewText = styled.Text`
	font-size: 18px;
	font-weight: 700;
	color: #ffffff;
	letter-spacing: 0.3px;
`;

export const LogoutButton = styled.TouchableOpacity`
	width: 92%;
	height: 56px;
	border-radius: 16px;
	justify-content: center;
	align-items: center;
	background-color: #fef2f2;
	border-left-width: 4px;
	border-left-color: #ef4444;
`;

export const LogoutText = styled.Text`
	font-size: 17px;
	font-weight: 600;
	color: #dc2626;
`;
