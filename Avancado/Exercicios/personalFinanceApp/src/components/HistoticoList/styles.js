import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: #f0f3ff;
	border-radius: 8px;
	margin: 0 10px 14px;
	padding: 12px;
`;

export const Tipo = styled.View`
	flex-direction: row;
`;

export const TipoText = styled.Text`
	color: #fff;
	font-size: 16px;
	font-style: italic;
`;
export const Description = styled.Text`
	align-self: center;
	color: #121212;
	font-size: 12px;
	font-style: italic;
	margin-left: 8px;
`;

export const IconView = styled.View`
	flex-direction: row;
	background-color: ${(props) =>
		props.tipo === 'receita' ? '#049301' : '#c62c36'};
	padding: 4px 8px;
	border-radius: 4px;
	margin-bottom: 4px;
`;

export const ValorText = styled.Text`
	color: #121212;
	font-size: 22px;
`;
