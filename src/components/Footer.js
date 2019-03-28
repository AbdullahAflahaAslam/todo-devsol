import React from "react";
import { VISIBILITY_FILTER } from "../actions";
import FilterLink from "../container/FilterLink";
import styled from "styled-components";
const FooterWrapper = styled.div`
	position: fixed;
	bottom: 0;
  background-color: white;
  width: 100vw;
  @media  (max-width: 992px): {
    width: 30vw;
  }
  @media (min-width: 1200px) {
    width: 30vw;
  }
  display: flex;
  justify-content: space-between;
`;

const Footer = ({ active, completed, all }) => (
	<FooterWrapper>
		<FilterLink filter={VISIBILITY_FILTER.SHOW_ALL}>
			All - {all.length}
		</FilterLink>
		<FilterLink filter={VISIBILITY_FILTER.SHOW_ACTIVE}>
			Active {active.length}
		</FilterLink>
		<FilterLink filter={VISIBILITY_FILTER.SHOW_COMPLETED}>
			Completed {completed.length}
		</FilterLink>
	</FooterWrapper>
);

export default Footer;
