export const getTodoStats = (todos) => {
	const today = new Date("2026-05-17");
	today.setHours(0, 0, 0, 0);
	return todos.reduce(
		(acc, todo) => {
			const todoDate = new Date(todo.dueDate);
			acc.total++;
			if (todo.completed) {
				acc.completed++;
			} else {
				acc.active++;
			}

			if (!todo.completed && todoDate < today) {
				acc.overdue++;
			}

			return acc;
		},
		{ total: 0, completed: 0, active: 0, overdue: 0 },
	);
};
