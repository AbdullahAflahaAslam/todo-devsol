import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import styled from "styled-components";

const AddTodoWrapper = styled.div`
	position: fixed;
  top: 0;
  z-index:2;
  background-color: white;
`;

const Input = styled.input`
	margin: 0.5em 1em;
	padding: 0.25em 1em;
	box-sizing: border-box;
	border: none;
	border-bottom: 2px solid palevioletred;
	outline: none;
  font-size: 20px;
  text-align: center;
`;

const AddTodo = ({ dispatch }) => {
	const [todo = "", setTodo] = useState();

	return (
		<AddTodoWrapper>
			<Input
				onKeyPress={({ key }) => {
					if (!todo.trim()) {
						return;
					}
					if (key === "Enter") {
						setTodo("");
						dispatch(addTodo(todo));
					}
        }}
        placeholder="Add Todo"
				autoFocus
				value={todo}
				onChange={({ target: { value } }) => setTodo(value)}
			/>
		</AddTodoWrapper>
	);
};

export default connect()(AddTodo);
