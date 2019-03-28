const todos = (state = [], { type, id, text }) => {
	switch (type) {
		case "ADD_TODO":
			return [...state, { id, text, completed: false }];
		case "REMOVE_TODO":
			return state.filter(item => item.id !== id);
		case "UPDATE_TODO":
			return state.map(todo => (todo.id === id ? { ...todo, text } : todo));
		case "TOGGLE_TODO":
			return state.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			);
		default:
			return state;
	}
};

export default todos;
