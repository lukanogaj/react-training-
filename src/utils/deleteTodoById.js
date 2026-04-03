export const deleteTodoById = (todos, id) => {
	return todos.filter((todo) => todo.id !== id);
};
