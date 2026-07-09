import { Link } from 'react-router-dom';

function Home() {
	return (
		<div>
			<h1>Pagina Home</h1>
			<p>Seja bem-vindo</p>
			<Link to="/sobre">Sobre</Link> <br />
			<Link to="/contato">Contato</Link>
		</div>
	);
}

export default Home;
