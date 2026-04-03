import { useState } from "react";
import { todos } from "../data/data";
import { markCompleted } from "../utils/markCompleted";
import { deleteTodoById } from "../utils/deleteTodoById";
import { getTodoStats } from "../utils/getTodoStats";
import styles from "./ReactTraining.module.scss";
const ReactTraining = () => {
	const [todosList, setTodosList] = useState(todos);

	const stats = getTodoStats(todosList);

	const handleComplete = (id) => {
		const updated = markCompleted(todosList, id);
		setTodosList(updated);
	};

	const handleDelete = (id) => {
		const deleted = deleteTodoById(todosList, id);
		setTodosList(deleted);
	};
	return (
		<div className={styles.container}>
			<h1>React Training</h1>
			<div className={styles.stats}>
				<div className={styles.statsItem}>Total: {stats.total}</div>
				<div className={styles.statsItem}>Completed: {stats.completed}</div>
				<div className={styles.statsItem}>Active: {stats.active}</div>
				<div className={styles.statsItem}>Overdue: {stats.overdue}</div>
			</div>
			{todosList.map((todo) => (
				<div key={todo.id}>
					{todo.title} {todo.completed && <span>Done</span>}
					<button
						className={styles.btn}
						onClick={() => handleComplete(todo.id)}>
						Complete
					</button>
					<button
						className={styles.btn}
						onClick={() => handleDelete(todo.id)}>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default ReactTraining;
