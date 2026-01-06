import styled from 'styled-components/native';

export const RegisterContainer = styled.View`
	flex-direction: row;
	width: 100%;
	padding: 0 5%;
	justify-content: space-between;
	align-items: center;
`;
export const RegisterTypeButton = styled.TouchableOpacity`
	background-color: ${(props) => (props.checked ? '#fff' : '#e7e7e7')};
	width: 47%;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	height: 50px;
	border-radius: 4px;
	border: 1.5px solid
		${(props) => (props.checked ? '#3b3dbf' : 'transparent')};
`;
export const RegisterLabel = styled.Text`
	margin-left: 8px;
	font-size: 17px;
`;
