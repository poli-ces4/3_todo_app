import { FaTrash, FaEdit, FaCheckCircle } from 'react-icons/fa';

const TodoItem = ({ todo, deleteTodo, completeTodo, setEdit }) => {
	return (
		<li className='list'>
			<div className={`listItem ${todo.completed ? 'completed' : ''}`}>
				{todo.title}
			</div>
			<div>
				<button onClick={() => completeTodo(todo)}>
					<FaCheckCircle />
				</button>
				<button onClick={() => setEdit(todo)}>
					<FaEdit />
				</button>
				<button onClick={() => deleteTodo(todo)}>
					<FaTrash />
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
