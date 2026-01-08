import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: #f0f4ff;
	border-radius: 20px;
	margin: 12px 16px;
	padding: 24px;
	min-height: 90px;
	border-width: 1px;
	border-color: rgba(99, 102, 241, 0.15);
`;

export const Tipo = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 12px;
`;

export const IconView = styled.View`
	flex-direction: row;
	background-color: ${(props) =>
		props.tipo === 'receita' ? '#10b981' : '#ef4444'};
	padding: 12px 16px;
	border-radius: 16px;
	align-items: center;
`;

export const TipoText = styled.Text`
	color: #ffffff;
	font-size: 15px;
	font-weight: bold;
	margin-left: 10px;
	text-transform: uppercase;
`;

export const Description = styled.Text`
	flex: 1;
	color: #64748b;
	font-size: 17px;
	font-weight: 600;
	line-height: 24px;
	margin-left: 16px;
`;

export const ValorText = styled.Text`
	font-size: 28px;
	font-weight: bold;
	color: #1e293b;
	text-align: right;
`;
