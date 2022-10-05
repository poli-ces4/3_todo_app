import TodoItem from './TodoItem';
const TodoList = ({ todos, setTodos, setEdit }) => {
	const completeTodo = todo => {
		const newTodos = todos.map(item => {
			if (item.id === todo.id) {
				return { ...item, completed: !item.completed };
			} else {
				return item;
			}
		});
		setTodos(newTodos);
	};

	const deleteTodo = ({ id }) => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	return (
		<div>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					deleteTodo={deleteTodo}
					completeTodo={completeTodo}
					setEdit={setEdit}
				/>
			))}
		</div>
	);
};

export default TodoList;
