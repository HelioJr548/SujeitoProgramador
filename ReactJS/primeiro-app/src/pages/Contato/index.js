import { Link } from 'react-router-dom';

function Contato() {
	return (
		<div>
			<h1>Pagina Contato</h1>
			<p>Contato da empresa (dd) xxxx-xxxxx</p>
			<Link to="/">Home</Link> <br />
			<Link to="/sobre">Sobre</Link>
		</div>
	);
}

export default Contato;
