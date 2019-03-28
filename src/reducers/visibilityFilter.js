import { VISIBILITY_FILTER } from '../actions'

const visibilityFilter = (state = VISIBILITY_FILTER.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case VISIBILITY_FILTER.SHOW_ALL:
			return todos;
		case VISIBILITY_FILTER.SHOW_COMPLETED:
			return todos.filter(t => t.completed);
		case VISIBILITY_FILTER.SHOW_ACTIVE:
			return todos.filter(t => !t.completed);
		default:
			throw new Error("Unknown filter: " + filter);
	}
};

export default visibilityFilter
