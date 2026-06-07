import { Component } from 'react';
import Feed from './components/Feed';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feed: [
				{ id: 1, username: 'Helio', curtidas: 10, comentarios: 5 },
				{ id: 2, username: 'Joao', curtidas: 102, comentarios: 25 },
				{ id: 3, username: 'Lucas', curtidas: 20, comentarios: 14 },
				{ id: 4, username: 'Amanda', curtidas: 0, comentarios: 0 },
			],
		};
	}

	render() {
		return (
			<div>
				{this.state.feed.map((item) => {
					return (
						<Feed
							key={item.id}
							username={item.username}
							curtidas={item.curtidas}
							comentarios={item.comentarios}
						/>
					);
				})}
			</div>
		);
	}
}

export default App;
