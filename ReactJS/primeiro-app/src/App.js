import { useState } from 'react';

function App() {
	const [tarefas, setTarefas] = useState(['Pagar conta', 'Estudar']);
	const [input, setInput] = useState('');

	function addTarefa() {
		setTarefas([...tarefas, input]);
		setInput('');
	}

	return (
		<div>
			<ul>
				{tarefas.map((tarefa) => (
					<li key={tarefa}>{tarefa}</li>
				))}
			</ul>

			<form action={addTarefa}>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button type="submit">Add tarefa</button>
			</form>
		</div>
	);
}

export default App;
