import { useState } from "react";
import { todos } from "../../data/data";
import { markCompleted } from "../../utils/markCompleted";
import { deleteTodoById } from "../../utils/deleteTodoById";
import { getTodoStats } from "../../utils/getTodoStats";
import TodoItem from "../TodoItem/TodoItem";
import Stats from "../Stats/Stats";
import styles from "./ReactTraining.module.scss";
const ReactTraining = () => {
	const [todosList, setTodosList] = useState(todos);

	const stats = getTodoStats(todosList);

	const onComplete = (id) => {
		const updated = markCompleted(todosList, id);
		setTodosList(updated);
	};

	const onDelete = (id) => {
		const deleted = deleteTodoById(todosList, id);
		setTodosList(deleted);
	};
	return (
		<div className={styles.container}>
			<h1>React Training</h1>

			<Stats stats={stats} />
			{todosList.map((todo) => (
				<TodoItem
					key={todo.id}
					onComplete={onComplete}
					onDelete={onDelete}
					todo={todo}
				/>
			))}
		</div>
	);
};

export default ReactTraining;
