import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react'; // ✅ Adicionado useEffect
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
	const [time, setTime] = useState('00:00:00'); // ✅ String inicial correta
	const [btn, setBtn] = useState('INICIAR');
	const [lastTime, setLastTime] = useState(null);
	const [isRunning, setIsRunning] = useState(false); // ✅ Controla timer

	// ✅ useEffect gerencia o timer corretamente
	useEffect(() => {
		let interval = null;

		if (isRunning) {
			interval = setInterval(() => {
				setTime((prev) => {
					const [hh, mm, ss] = prev.split(':').map(Number);
					let newSs = ss + 1;
					let newMm = mm;
					let newHh = hh;

					if (newSs >= 60) {
						newSs = 0;
						newMm++;
					}
					if (newMm >= 60) {
						newMm = 0;
						newHh++;
					}

					return `${newHh.toString().padStart(2, '0')}:${newMm
						.toString()
						.padStart(2, '0')}:${newSs
						.toString()
						.padStart(2, '0')}`;
				});
			}, 100);
		}

		return () => {
			if (interval) clearInterval(interval); // ✅ Cleanup
		};
	}, [isRunning]);

	const start = () => {
		setIsRunning(!isRunning);
		setBtn(isRunning ? 'INICIAR' : 'PAUSAR');
	};

	const clear = () => {
		setIsRunning(false);

		// ✅ Só salva se NÃO estiver zerado
		if (time !== '00:00:00') {
			setLastTime(time);
		}

		setTime('00:00:00');
		setBtn('INICIAR');
	};

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Image source={require('./src/crono.png')} />
			<Text style={styles.timer}>{time}</Text>{' '}
			{/* ✅ Sem ternary desnecessário */}
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
					{lastTime ? `Último tempo: ${lastTime}` : ''}
				</Text>
			</View>
		</View>
	);
}

// CustomPressable e styles permanecem iguais...
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
