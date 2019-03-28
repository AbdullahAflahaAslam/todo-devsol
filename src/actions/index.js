import uuid from "uuid/v4";

export const addTodo = text => {
	return {
		type: "ADD_TODO",
		id: uuid(),
		text
	};
};

export const removeTodo = id => ({
	type: "REMOVE_TODO",
	id
});

export const updateTodo = (id, text) => ({
	type: "UPDATE_TODO",
	id,
	text
});

export const setVisibilityFilter = filter => ({
	type: "SET_VISIBILITY_FILTER",
	filter
});

export const toggleTodo = id => ({
	type: "TOGGLE_TODO",
	id
});

export const VISIBILITY_FILTER = {
	SHOW_ALL: "SHOW_ALL",
	SHOW_COMPLETED: "SHOW_COMPLETED",
	SHOW_ACTIVE: "SHOW_ACTIVE"
};
