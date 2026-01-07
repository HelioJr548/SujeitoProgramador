import {
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from '@react-navigation/drawer';
import { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Icon from 'react-native-vector-icons/Feather';

export default function CustomDrawer(props) {
	const { user, signOut } = useContext(AuthContext);

	return (
		<DrawerContentScrollView {...props}>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					// marginTop: 25,
				}}
			>
				<Image
					source={require('../../assets/Logo.png')}
					style={{ height: 90, width: 90 }}
					resizeMode="contain"
				/>

				<Text style={{ fontSize: 18, marginTop: 14 }}>Bem-Vindo</Text>
				<Text
					numberOfLines={1}
					style={{
						fontSize: 17,
						fontWeight: 'bold',
						marginBottom: 14,
						paddingHorizontal: 20,
					}}
				>
					{user && user.name}
				</Text>
			</View>
			<DrawerItemList {...props} />

			<DrawerItem
				{...props}
				label="Sair"
				style={{ marginTop: '110%' }}
				onPress={() => signOut()}
				labelStyle={{ fontSize: 16, fontWeight: 'bold', color: 'red' }}
				icon={() => <Icon name="log-out" size={25} color="red" />}
			/>
		</DrawerContentScrollView>
	);
}
