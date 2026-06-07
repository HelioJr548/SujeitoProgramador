import { Component } from 'react';

class Membro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: props.nome,
		};

		this.entrar = this.entrar.bind(this);
		this.sair = this.sair.bind(this);
	}

	entrar() {
		this.setState({ nome: 'Helio' });
	}
	sair() {
		this.setState({ nome: 'Visitante' });
	}

	entrarPorProps(nome) {
		this.setState({ nome: nome });
	}

	render() {
		return (
			<div>
				<h2>Bem-vindo(a) {this.state.nome}</h2>
				<button onClick={this.entrar}>Entrar como Helio</button>
				<button onClick={this.sair}>Sair</button>
				<hr />
				<button onClick={() => this.entrarPorProps('Helio')}>
					Entrar como Helio por Props
				</button>
				<button onClick={() => this.setState({ nome: '' })}>
					Sair
				</button>
			</div>
		);
	}
}

export default Membro;
