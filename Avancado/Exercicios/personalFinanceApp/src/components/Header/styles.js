import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
	flex-direction: row;
	align-items: center;
	justify-content: ;
	padding-top: 30px;
	padding-left: 15px;
	padding-bottom: 15px;
	width: 100%;
`;

export const Title = styled.Text`
	font-size: 22px;
	margin-left: 8px;
`;

export const ButtonMenu = styled.TouchableOpacity`
	justify-content: center;
	align-iems: center;
`;
