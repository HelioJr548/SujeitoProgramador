import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
	border-radius: 20px;
	background-color: #ffffff;
`;

export const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 24px 24px 16px;
	border-bottom-width: 1px;
	border-bottom-color: #e0e0e0;
`;

export const Title = styled.Text`
	font-size: 22px;
	font-weight: bold;
	color: #1a1a1a;
`;

export const CloseButton = styled.TouchableOpacity`
	width: 36px;
	height: 36px;
	border-radius: 18px;
	background-color: #f0f0f0;
	justify-content: center;
	align-items: center;
`;

export const CloseButtonText = styled.Text`
	font-size: 18px;
	color: #3b3dbf;
	font-weight: bold;
`;

export const ButtonFilter = styled.TouchableOpacity`
	margin: 24px;
	border-radius: 12px;
	background-color: #3b3dbf;
	height: 52px;
	align-items: center;
	justify-content: center;
`;

export const ButtonFilterText = styled.Text`
	color: #ffffff;
	font-size: 17px;
	font-weight: bold;
`;
