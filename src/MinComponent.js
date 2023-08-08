import React from "react";
import {
  BigButton,
  MiddleButton,
  SmallButton,
  BeforeButton,
	ListButton,
} from "./components/Button/index";
import styled from 'styled-components';

const Min = styled.div``;

function MinComponent() {
	return (
		<Min>
			<BigButton>다음으로</BigButton>
			<br />
			<br />
			<MiddleButton>다음</MiddleButton>
			<br />
			<br />
			<SmallButton>다음</SmallButton>
			<br />
			<br />
			<BeforeButton />
			<br />
			<br />
			<ListButton>Protein</ListButton>
			<br />
			<br />
		</Min>
	);
}

export default MinComponent;