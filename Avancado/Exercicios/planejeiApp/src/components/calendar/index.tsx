import colors from '@/src/constants/colors';
import { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

interface IDatePickerInputProps {
	label: string;
	minDate?: string;
	value: string;
	onChange: (date: string) => void;
}

export function DatePickerInput({
	label,
	minDate,
	value,
	onChange,
}: IDatePickerInputProps) {
	const [modalVisible, setModalVisible] = useState(false);

	function handleDayPress(day: { dateString: string }) {
		onChange(day.dateString);
		setModalVisible(false);
	}

	const date = new Date(value);

	return (
		<View style={styles.safeArea}>
			<Text style={styles.label}>{label}</Text>
			<TouchableOpacity
				style={styles.input}
				onPress={() => setModalVisible(true)}
			>
				<Text style={{ color: value ? colors.orange : colors.gray50 }}>
					{value
						? new Intl.DateTimeFormat('pt-BR', {
								timeZone: 'UTC',
							}).format(date)
						: 'Selecione uma data...'}
				</Text>
			</TouchableOpacity>

			<Modal
				visible={modalVisible}
				transparent={true}
				animationType="fade"
			>
				<View style={styles.modalOverlay}>
					<View style={styles.modalContainer}>
						<Calendar
							onDayPress={handleDayPress}
							minDate={
								minDate ??
								new Date().toISOString().split('T')[0]
							}
							markedDates={
								value
									? {
											[value]: {
												selected: true,
												selectedColor: colors.orange,
												marked: true,
											},
										}
									: {}
							}
						/>

						<TouchableOpacity
							style={styles.closeButton}
							onPress={() => setModalVisible(false)}
						>
							<Text
								style={{ fontWeight: '500', color: colors.red }}
							>
								Cancelar
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	safeArea: { marginBottom: 16 },
	label: { color: colors.white, marginBottom: 4, fontWeight: '600' },
	input: {
		backgroundColor: colors.white,
		padding: 12,
		borderRadius: 4,
		justifyContent: 'center',
	},
	modalOverlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'center',
		padding: 24,
	},
	modalContainer: {
		backgroundColor: colors.white,
		padding: 16,
		borderRadius: 16,
	},
	closeButton: {
		marginTop: 16,
		marginBottom: 8,
		alignItems: 'center',
	},
});
