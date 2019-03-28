import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const TodoListWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const TodoList = ({ todos, toggleTodo, removeTodo, updateTodo }) => (
	<TodoListWrapper>
		{todos.map(todo => (
			<Todo
				key={todo.id}
				{...todo}
				onClick={() => toggleTodo(todo.id)}
        onRemove={() => removeTodo(todo.id)}
        onUpdate={updateTodo}
			/>
		))}
	</TodoListWrapper>
);

export default TodoList;
