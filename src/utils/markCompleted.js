/// markCompleted
export const markCompleted = (todos, id) => {
	return todos.map((todo) =>
		todo.id === id ? { ...todo, completed: true } : todo,
	);
};
