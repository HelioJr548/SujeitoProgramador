import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {
	const [time, setTime] = useState(0);
	const [btn, setBtn] = useState('INICIAR');
	const [lastTime, setLastTime] = useState(null);

	const start = () => {
		if (timer !== null) {
			// PAUSAR o timer
			clearInterval(timer);
			timer = null;
			setBtn('INICIAR');
		} else {
			// iniciar o timer
			timer = setInterval(() => {
				ss++;
				if (ss == 60) {
					ss = 0;
					mm++;
				}
				if (mm == 60) {
					mm = 0;
					hh++;
				}

				let format =
					(hh < 10 ? `0${hh}` : hh) +
					':' +
					(mm < 10 ? `0${mm}` : mm) +
					':' +
					(ss < 10 ? `0${ss}` : ss);
				setTime(format);
			}, 100);
			setBtn('PAUSAR');
		}
	};
	const clear = () => {
		if (timer !== null) {
			clearInterval(timer);
			timer = null;
		}

		setLastTime(time);
		setTime('00:00:00');
		ss = 0;
		mm = 0;
		hh = 0;
		setBtn('INICIAR');
	};
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Image source={require('./src/crono.png')} />

			<Text style={styles.timer}>{time ? time : '00:00:00'}</Text>
			<View style={styles.btnArea}>
				<CustomPressable
					text={btn}
					styleBtn={styles.btn}
					styleBtnTxt={styles.btnTxt}
					onPress={start}
				/>
				<CustomPressable
					text="LIMPAR"
					styleBtn={styles.btn}
					styleBtnTxt={styles.btnTxt}
					onPress={clear}
				/>
			</View>

			<View style={styles.lastTimeArea}>
				<Text style={styles.lastTimeTxt}>
					{lastTime ? `Ultimo tempo ${lastTime}` : ''}
				</Text>
			</View>
		</View>
	);
}

const CustomPressable = ({ text, onPress, styleBtn, styleBtnTxt }) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [styleBtn, pressed && { opacity: 0.5 }]}
		>
			<Text style={styleBtnTxt}>{text}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'hsla(196, 100%, 47%, 1.00)',
		alignItems: 'center',
		justifyContent: 'center',
	},
	timer: {
		marginTop: -160,
		fontSize: 45,
		fontWeight: 'bold',
		color: 'hsla(0, 0%, 100%, 1.00)',
	},
	btnArea: {
		flexDirection: 'row',
		marginTop: 130,
		height: 40,
	},
	btn: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'hsla(0, 0%, 100%, 1.00)',
		height: 40,
		margin: 17,
		borderRadius: 9,
	},
	btnTxt: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'hsla(196, 100%, 47%, 1.00)',
	},
	lastTimeArea: {
		marginTop: 40,
	},
	lastTimeTxt: {
		fontSize: 25,
		color: 'hsla(0, 0%, 100%, 1.00)',
		fontStyle: 'italic',
	},
});
