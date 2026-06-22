import { useCallback, useEffect, useMemo, useState } from 'react';

function App() {
	const [tarefas, setTarefas] = useState(() => {
		const tarefasStorage = localStorage.getItem('tarefas');
		return tarefasStorage ? JSON.parse(tarefasStorage) : [];
	});
	const [input, setInput] = useState('');
	const [erro, setErro] = useState('');

	const addTarefa = useCallback(() => {
		if (!input.trim()) {
			setErro('Digite uma tarefa');
			return;
		}

		if (tarefas.includes(input)) {
			setErro('Tarefa já existente');
			return;
		}

		setErro('');
		setTarefas([...tarefas, input]);
		setInput('');
	}, [input, tarefas]);

	useEffect(() => {
		localStorage.setItem('tarefas', JSON.stringify(tarefas));
	}, [tarefas]);

	const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

	return (
		<div>
			<ul>
				{tarefas.map((tarefa, index) => (
					<li key={index}>{tarefa}</li>
				))}
			</ul>

			{erro && <p style={{ color: 'red' }}>{erro}</p>}

			<form
				onSubmit={(e) => {
					e.preventDefault();
					addTarefa();
				}}
			>
				<input
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
						setErro(''); // ← Limpa erro ao digitar
					}}
				/>
				<button type="submit">Add tarefa</button>
			</form>
			<strong>
				{() => {
					let mensagem;
					if (totalTarefas === 0) {
						mensagem = 'Não há tarefas';
					} else {
						mensagem = `Voce tem ${totalTarefas} tarefa${totalTarefas > 1 ? 's' : ''}`;
					}
					return mensagem;
				}}
			</strong>
		</div>
	);
}

export default App;
