// < 네브바 포함 레이아웃 >

import React, { useEffect } from "react";
import * as S from "./StyledLayoutContainer";
import { Link, Outlet } from "react-router-dom";


export const LayoutContainer = () => {
	return (
		<S.LayoutContainer>
			<div class="navigation">
				<S.NavLogo>
					<Link to="/">
						<div class="nav-logo"></div>
					</Link>
				</S.NavLogo>

				<S.NavLink>
					<Link to="/">
						<S.NavText>검색하기</S.NavText>
					</Link>
					<Link to="/">
						<S.NavText>추천받기</S.NavText>
					</Link>
					<Link to="/">
						<S.NavText>내 운동</S.NavText>
					</Link>
					<Link to="/login">
						<S.NavText className="login">로그인</S.NavText>
					</Link>
				</S.NavLink>
			</div>
			<Outlet />
		</S.LayoutContainer>
	);
}

export default LayoutContainer;