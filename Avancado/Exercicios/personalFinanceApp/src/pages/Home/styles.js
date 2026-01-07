import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Background = styled(SafeAreaView)`
	flex: 1;
	background-color: #f0f4ff;
`;

export const ListBalance = styled.FlatList`
	max-height: 190px;
`;
export const Area = styled.View`
	background-color: #fff;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	flex-direction: row;
	padding: 0 14px;
	justify-content: center;
	align-items: center;
	margin-top: 22px;
`;
export const Title = styled.Text`
	margin: 14px 0 14px 4px;
	color: #121212;
	font-weight: bold;
	font-size: 18px;
`;
export const List = styled.FlatList`
	flex: 1;
	background-color: #fff;
`;
