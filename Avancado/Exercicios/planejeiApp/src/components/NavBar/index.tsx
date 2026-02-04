import colors from '@/src/constants/colors';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface NavBarProps {
	title: string;
}

export function NavBar({ title }: NavBarProps) {
	return (
		<View style={styles.container}>
			<Link href={'/(panel)/home/page'}>
				<Feather name="arrow-left" color={colors.white} size={40} />
			</Link>

			<Text style={styles.title}>{title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 14,
		marginBottom: 16,
	},
	title: {
		fontSize: 30,
		color: colors.orange,
		fontWeight: '600',
	},
});
