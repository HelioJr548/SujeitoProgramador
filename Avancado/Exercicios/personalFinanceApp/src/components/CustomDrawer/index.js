import {
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from '@react-navigation/drawer';
import { useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Icon from 'react-native-vector-icons/Feather';
export default function CustomDrawer(props) {
	const { user, signOut } = useContext(AuthContext);

	return (
		<DrawerContentScrollView {...props}>
			{/* Header */}
			<View
				style={{
					padding: 30,
					alignItems: 'center',
					borderBottomWidth: 1,
					borderBottomColor: '#e2e8f0',
				}}
			>
				<Image
					source={require('../../assets/Logo.png')}
					style={{
						height: 80,
						width: 80,
					}}
					resizeMode="contain"
				/>

				<Text
					style={{
						fontSize: 16,
						color: '#64748b',
						marginTop: 12,
						fontWeight: '500',
					}}
				>
					Bem-vindo(a)
				</Text>

				<Text
					numberOfLines={1}
					style={{
						fontSize: 20,
						fontWeight: '700',
						color: '#1e293b',
						marginTop: 4,
						marginBottom: 16,
						paddingHorizontal: 20,
						textAlign: 'center',
					}}
				>
					{user?.name}
				</Text>
			</View>

			{/* Menu Items */}
			<DrawerItemList {...props} />

			{/* Logout */}
			<View style={{ padding: 20, paddingBottom: 40 }}>
				<TouchableOpacity
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						padding: 16,
						backgroundColor: '#fef2f2',
						borderRadius: 16,
						borderLeftWidth: 4,
						borderLeftColor: '#ef4444',
					}}
					onPress={signOut}
					activeOpacity={0.7}
				>
					<Icon
						name="log-out"
						size={24}
						color="#dc2626"
						style={{ marginRight: 16 }}
					/>
					<Text
						style={{
							fontSize: 16,
							fontWeight: '600',
							color: '#dc2626',
							flex: 1,
						}}
					>
						Sair da conta
					</Text>
				</TouchableOpacity>
			</View>
		</DrawerContentScrollView>
	);
}
