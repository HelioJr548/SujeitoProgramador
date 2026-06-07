import { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: false,
		};

		this.entrar = this.entrar.bind(this);
		this.sair = this.sair.bind(this);
	}

	entrar() {
		this.setState({ status: true });
	}

	sair() {
		this.setState({ status: false });
	}

	render() {
		return (
			<div>
				{this.state.status ? (
					<div>
						<h2>Bem-vindo ao sistema</h2>
						<button onClick={this.sair}>Sair</button>
					</div>
				) : (
					<div>
						<h2>Olá visitante, faça o login!</h2>
						<button onClick={this.entrar}>entrar</button>
					</div>
				)}
			</div>
		);
	}
}

export default App;
