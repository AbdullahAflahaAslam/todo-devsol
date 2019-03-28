import React, { Component } from "react";
import AddTodo from "./container/AddTodo";
import VisibleTodoList from "./container/VisibleTodoList";
import styled from "styled-components";
import FooterTodoList from "./container/FooterTodoList";

const AppWrapper = styled.div`
  display: flex;
  margin: 4em auto 4em;
  flex-direction: column;
  align-items: center;
`;
class App extends Component {
	render() {
		return (
			<AppWrapper>
				<AddTodo />
				<VisibleTodoList />
				<FooterTodoList />
			</AppWrapper>
		);
	}
}

export default App;
