// https://sujeitoprogramador.com/rn-api/?api=posts

import { useEffect, useState } from 'react';

function App() {
	const [nutri, setNutri] = useState([]);

	useEffect(() => {
		function loadApi() {
			let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
			fetch(url)
				.then((res) => res.json())
				.then((json) => {
					setNutri(json);
				});
		}

		loadApi();
	}, []);

	return (
		<div className="container">
			<header>
				<strong>React Nutri</strong>
			</header>

			{nutri.map((item) => {
				return (
					<article key={item.id} className="post">
						<strong className="titulo">{item.titulo}</strong>
						<img
							src={item.capa}
							alt={item.titulo}
							className="capa"
						/>
						<p className="subtitulo">{item.subtitulo}</p>

						<a href={item.categoria} className="botao">
							Acessar
						</a>
					</article>
				);
			})}
		</div>
	);
}

export default App;
