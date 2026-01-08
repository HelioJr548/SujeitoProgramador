// styles.js - VERSÃO CORRIGIDA E ELEGANTE
import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: #${(props) => props.bg};
	margin: 12px 16px;
	border-radius: 20px;
	justify-content: center;
	align-items: flex-start;
	min-height: 110px;
	padding: 28px 24px 24px 28px;

	/* Sombras elegantes para iOS/Android */
	shadow-color: #000;
	shadow-offset: 0px 8px;
	shadow-opacity: 0.25;
	shadow-radius: 24px;
	elevation: 5;

	/* Borda sutil de brilho */
	border: 1px solid rgba(255, 255, 255, 0.18);

	/* Animação suave de entrada */
`;

export const Label = styled.Text`
	color: rgba(255, 255, 255, 0.95);
	font-size: 16px;
	font-weight: 600;
	letter-spacing: 0.4px;
	line-height: 22px;
	margin-bottom: 6px;
	text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
`;

export const Balance = styled.Text`
	font-size: 34px;
	font-weight: 800;
	color: #fff;
	letter-spacing: -0.8px;
	text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
`;
