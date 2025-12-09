import { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class App extends Component {
	render() {
		return (
			<View>
				<Text>Hello, World!</Text>
				<Text style={{ color: '#ff0000', fontSize: 25, margin: 15 }}>
					Olá, Mundo!
				</Text>

				<Image
					source={{
						uri: 'http://sujeitoprogramador.com/reactlogo.png',
					}}
					style={{ width: 200, height: 200 }}
				/>
			</View>
		);
	}
}
