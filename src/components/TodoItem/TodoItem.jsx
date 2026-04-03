import styles from "./TodoItem.module.scss";

const TodoItem = ({ todo, onComplete, onDelete }) => {
	return (
		<div>
			{todo.title} {todo.completed && <span>Done</span>}
			<button
				className={styles.btn}
				onClick={() => onComplete(todo.id)}>
				Complete
			</button>
			<button
				className={styles.btn}
				onClick={() => onDelete(todo.id)}>
				Delete
			</button>
		</div>
	);
};

export default TodoItem;
