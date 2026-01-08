import styled from 'styled-components/native';

export const RegisterContainer = styled.View`
	flex-direction: row;
	width: 100%;
	padding: 0 8%;
	justify-content: space-between;
	align-items: center;
	height: 70px;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
	flex: 1;
	height: 60px;
	border-radius: 16px;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	padding: 0 20px;
	margin: 0 8px;

	background-color: ${(props) =>
		props.checked ? '#ffffff' : 'rgba(248, 250, 252, 0.6)'};

	border-width: 2px;
	border-color: ${(props) =>
		props.checked ? '#6366f1' : 'rgba(99, 102, 241, 0.2)'};
`;

export const RegisterLabel = styled.Text`
	margin-left: 12px;
	font-size: 16px;
	font-weight: ${(props) => (props.checked ? '700' : '500')};
	color: ${(props) => (props.checked ? '#1e293b' : '#64748b')};
`;
