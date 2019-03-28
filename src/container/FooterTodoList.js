import { connect } from "react-redux";
import { VISIBILITY_FILTER } from "../actions";
import { getVisibleTodos } from "../reducers/visibilityFilter";
import Footer from "../components/Footer";

const mapStateToProps = state => ({
	active: getVisibleTodos(state.todos, VISIBILITY_FILTER.SHOW_ACTIVE),
	completed: getVisibleTodos(state.todos, VISIBILITY_FILTER.SHOW_COMPLETED),
	all: getVisibleTodos(state.todos, VISIBILITY_FILTER.SHOW_ALL)
});

export default connect(
	mapStateToProps,
	null
)(Footer);
