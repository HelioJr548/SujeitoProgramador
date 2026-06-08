import { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: '',
			email: '',
			senha: '',
			erro: '',
		};

		this.cadastrar = this.cadastrar.bind(this);
	}

	cadastrar(e) {
		const { nome, email, senha } = this.state;

		if (nome !== '' && email !== '' && senha !== '') {
			alert(`Nome: ${nome}\nEmail: ${email}\nSenha: ${senha}`);
		} else {
			this.setState({ error: 'Ops! Parece que esta faltando algo' });
		}

		e.preventDefault();
	}

	render() {
		return (
			<div>
				<h1>Novo Usuario</h1>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.cadastrar}>
					<label htmlFor="nome">Nome:</label>
					<input
						id="nome"
						type="text"
						value={this.state.nome}
						onChange={(e) =>
							this.setState({ nome: e.target.value })
						}
					/>
					<br />
					<label htmlFor="email">Email:</label>
					<input
						id="email"
						type="email"
						value={this.state.email}
						onChange={(e) =>
							this.setState({ email: e.target.value })
						}
					/>
					<br />
					<label htmlFor="senha">Senha:</label>
					<input
						id="senha"
						type="password"
						value={this.state.senha}
						onChange={(e) =>
							this.setState({ senha: e.target.value })
						}
					/>
					<br />
					<button type="submit">Cadastrar</button>
				</form>
			</div>
		);
	}
}

export default App;
