import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo, removeTodo, updateTodo } from "../actions";
import { getVisibleTodos } from "../reducers/visibilityFilter";

const mapStateToProps = state => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id)),
	removeTodo: id => dispatch(removeTodo(id)),
	updateTodo: (id, text) => dispatch(updateTodo(id, text))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);
