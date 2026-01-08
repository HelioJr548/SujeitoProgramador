import { Calendar, LocaleConfig } from 'react-native-calendars';
import { TouchableWithoutFeedback, View } from 'react-native';
import {
	ButtonFilter,
	ButtonFilterText,
	Container,
	ModalContent,
	Header,
	Title,
	CloseButton,
	CloseButtonText,
} from './styles';
import { useState, useMemo } from 'react';
import { ptBR } from './localeCalendar';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({ setVisible, handleFilter }) {
	const [dateNow, setDateNow] = useState(new Date());
	const [markedDates, setMarkedDates] = useState({});

	function handleOnDayPress(date) {
		setDateNow(new Date(date.dateString));

		const markedDay = {
			[date.dateString]: {
				selected: true,
				selectedColor: '#3b3dbf',
				selectedTextColor: '#fff',
				customStyles: {
					container: {
						borderRadius: 12,
						borderWidth: 2,
						borderColor: 'rgba(59, 61, 191, 0.3)',
					},
				},
			},
		};
		setMarkedDates(markedDay);
	}

	function handleFilterDate() {
		handleFilter(dateNow);
		setVisible(false);
	}

	return (
		<Container>
			<TouchableWithoutFeedback onPress={() => setVisible(false)}>
				<View style={{ flex: 1 }} />
			</TouchableWithoutFeedback>

			<ModalContent>
				<Header>
					<Title>Selecionar Data</Title>
					<CloseButton onPress={() => setVisible(false)}>
						<CloseButtonText>✕</CloseButtonText>
					</CloseButton>
				</Header>

				<Calendar
					onDayPress={handleOnDayPress}
					markedDates={markedDates}
					enableSwipeMonths={true}
					theme={{
						backgroundColor: '#f8f9ff',
						calendarBackground: '#ffffff',
						textSectionTitleColor: '#3b3dbf',
						textSectionTitleDisabledColor: '#d9e1e8',
						selectedDayBackgroundColor: '#3b3dbf',
						selectedDayTextColor: '#ffffff',
						todayTextColor: '#3b3dbf',
						dayTextColor: '#2d3748',
						textDisabledColor: '#e2e8f0',
						dotColor: '#3b3dbf',
						selectedDotColor: '#ffffff',
						arrowColor: '#3b3dbf',
						disabledArrowColor: '#d9e1e8',
						monthTextColor: '#2d3748',
						indicatorColor: 'rgba(59, 61, 191, 0.2)',
						textDayFontWeight: '500',
						textMonthFontWeight: '700',
						textDayHeaderFontWeight: '600',
					}}
					style={{
						borderRadius: 20,
						elevation: 8,
						shadowColor: '#000',
						shadowOffset: { width: 0, height: 4 },
						shadowOpacity: 0.1,
						shadowRadius: 12,
						height: 360,
					}}
				/>

				<ButtonFilter onPress={handleFilterDate}>
					<ButtonFilterText>Filtrar por esta data</ButtonFilterText>
				</ButtonFilter>
			</ModalContent>
		</Container>
	);
}
