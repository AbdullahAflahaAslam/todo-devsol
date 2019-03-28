import React, { useState } from "react";
import styled from "styled-components";

const TodoText = styled.label`
	text-decoration: ${props => (props.completed ? "line-through" : "none")};
`;

const TodoWrapper = styled.div`
	margin: 5px 10px 5px;
	display: flex;
	border: 2px solid palevioletred;
	width: 15em;
	padding: 1em 1em;
	justify-content: space-between;
`;

const TodoRemove = styled.div`
	cursor: pointer;
	color: palevioletred;
`;

const Todo = ({ onClick, completed, text, onRemove, onUpdate, id }) => {
	const [edit = false, setEdit] = useState();
	const [editText, seteditText] = useState();
	return (
		<TodoWrapper>
			<div hidden={edit}>
				<div className="pretty p-icon p-round p-jelly" onClick={onClick}>
					<input type="checkbox" checked={completed} readOnly />
					<div className="state p-primary">
						<i className="icon mdi mdi-check" />
						<TodoText completed={completed}>{text}</TodoText>
					</div>
				</div>
			</div>
			{edit && (
				<input
					type="text"
					placeholder={text}
					defaultValue={text}
					onChange={({ target: { value } }) => onUpdate(id, value)}
					onBlur={() => setEdit(!edit)}
					autoFocus
				/>
			)}
			<TodoRemove>
				<i className="icon mdi mdi-pencil" onClick={() => setEdit(!edit)} />
				<i className="icon mdi mdi-delete" onClick={onRemove} />
			</TodoRemove>
		</TodoWrapper>
	);
};

export default Todo;
