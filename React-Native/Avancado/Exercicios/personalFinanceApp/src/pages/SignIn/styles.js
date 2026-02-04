import styled from 'styled-components/native';

export const Background = styled.View`
	flex: 1;
	background-color: #2861ffff;
	padding-top: 35px;
`;

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Logo = styled.Image`
	margin-bottom: 40px;
`;

export const AreaInput = styled.View`
	align-items: center;
	gap: 18px;
	width: 100%;
	margin-bottom: 32px;
`;

export const Input = styled.TextInput`
	background-color: rgba(255, 255, 255, 0.95);
	width: 90%;
	height: 56px;
	font-size: 17px;
	padding: 0 20px;
	border-radius: 16px;
	color: #1e293b;
	border-width: 1px;
	border-color: rgba(255, 255, 255, 0.3);
`;

export const SubmitButton = styled.TouchableOpacity`
	width: 90%;
	height: 56px;
	border-radius: 20px;
	background-color: #ffffff;
	margin-top: 16px;
	align-items: center;
	justify-content: center;
`;

export const SubmitText = styled.Text`
	color: #6366f1;
	font-size: 18px;
	font-weight: 700;
`;

export const Link = styled.TouchableOpacity`
	margin: 24px 0;
`;

export const LinkText = styled.Text`
	color: #ffffff;
	font-size: 16px;
	font-weight: 500;
`;
