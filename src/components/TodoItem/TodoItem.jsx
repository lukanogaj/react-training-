import styles from "./TodoItem.module.scss";

const TodoItem = ({ todo, onComplete, onDelete }) => {
	return (
		<div className={styles.container}>
			<div className={styles.titleRow}>
				<span
					className={`${styles.title} ${todo.completed ? styles.titleCompleted : ""}`}>
					{todo.title}
				</span>
				<span className={`${todo.completed ? styles.status : ""} `}>
					{todo.completed && "Done"}
				</span>
			</div>
			<div className={styles.actions}>
				{!todo.completed && (
					<button
						className={styles.completedButton}
						onClick={() => onComplete(todo.id)}>
						Complete
					</button>
				)}
				<button
					className={styles.deleteButton}
					onClick={() => onDelete(todo.id)}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
