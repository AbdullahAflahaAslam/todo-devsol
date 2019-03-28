import React from "react";
import styled, { css } from "styled-components";

const ButtonLink = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0.5em 1em;
  padding: 0.25em 1em;
  outline: none;

	${props =>
		props.active &&
		css`
			background: palevioletred;
			color: white;
		`}
`;

const Link = ({ active, children, onClick }) => (
	<ButtonLink onClick={onClick} active={active}>
		{children}
	</ButtonLink>
);

export default Link;
