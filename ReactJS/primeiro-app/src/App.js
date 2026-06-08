import { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				nome: '',
				email: '',
				senha: '',
				sexo: '',
			},
		};

		this.trocaEmail = this.trocaEmail.bind(this);
		this.trocaSexo = this.trocaSexo.bind(this);
		this.dadosForm = this.dadosForm.bind(this);
	}

	trocaEmail(e) {
		let valorDigitado = e.target.value;
		this.setState({ email: valorDigitado });
	}

	trocaSexo(e) {
		let valorEscolhido = e.target.value;
		this.setState({ sexo: valorEscolhido });
	}

	dadosForm(e) {
		let form = this.state.form;
		form[e.target.name] = e.target.value;
		this.setState({ form: form });
	}

	render() {
		return (
			<div>
				<label htmlFor="nome">Nome:</label>
				<input
					id="nome"
					type="text"
					name="nome"
					value={this.state.form.nome}
					onChange={this.dadosForm}
				/>
				<br />
				<label htmlFor="email">Email:</label>
				<input
					id="email"
					type="email"
					name="email"
					value={this.state.form.email}
					onChange={this.dadosForm}
				/>
				<br />
				<label htmlFor="senha">Senha:</label>
				<input
					id="senha"
					type="password"
					name="senha"
					value={this.state.form.senha}
					onChange={this.dadosForm}
				/>
				<br />
				<label htmlFor="sexo">Sexo:</label>
				<select
					id="sexo"
					name="sexo"
					value={this.state.form.sexo}
					onChange={this.dadosForm}
				>
					<option value="masculino">Masculino</option>
					<option value="feminino">Feminino</option>
				</select>
				<div>
					.<h3>{this.state.form.nome}</h3>
					<h3>{this.state.form.email}</h3>
					<h3>{this.state.form.senha}</h3>
					<h3>{this.state.form.sexo}</h3>
				</div>
			</div>
		);
	}
}

export default App;
