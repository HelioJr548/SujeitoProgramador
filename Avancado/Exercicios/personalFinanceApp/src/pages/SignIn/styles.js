import styled from 'styled-components/native';

export const Background = styled.View`
	flex: 1;
	background-color: #567adbff;
	padding-top: 35px;
`;

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Logo = styled.Image`
	margin-bottom: 25px;
`;

export const AreaInput = styled.View`
	/* flex-direction: row; */
	align-items: center;
	gap: 15px;
	width: 100%;
	margin-bottom: 20px;
`;

export const Input = styled.TextInput`
	background-color: #fff;
	width: 90%;
	font-size: 16px;
	padding: 10px;
	border-radius: 5px;
	color: #121212;
	/* margin-bottom: 15px */
`;

export const SubmitButton = styled.TouchableOpacity`
	width: 90%;
	height: 45;
	border-radius: 8px;
	background-color: #3b3dbf;
	margin-top: 10px;
	align-items: center;
	justify-content: center;
`;

export const SubmitText = styled.Text`
	color: #fff;
	font-size: 20px;
`;

export const Link = styled.TouchableOpacity`
	margin: 10px 0;
`;

export const LinkText = styled.Text`
	color: #ffffffff;
	font-size: 14px;
`;
