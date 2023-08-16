// < 로그인 페이지 >

import { React, useState } from "react";
import * as S from "./StyledLogin";
import { NoneScrollContainer } from "../../Layout/NoneScrollContainer";
import { BigButton } from "../../components/index";
import { useNavigate } from "react-router-dom";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";
import { loginPostAPI, userAPI, bodyDataAPI } from "../../apis/API";

const Login = (props) => {

	// placeholder
	let [isEmailClicked, setIsEmailClicked] = useState(false);
	let [isPWClicked, setIsPWClicked] = useState(false);

	const navigate = useNavigate();

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("");

	const onClickLogin = (e) => {
		e.preventDefault();

		const submission = {
			loginEmail: email,
			password: password,
		}
		console.log(submission);

		loginPostAPI.post("", submission)
		.then((res) => {
			console.log(res.status);
			if (res.status === 200) {
				userAPI.get("", submission)
				.then((data) => {
					console.log(data.data)
					if (submission.loginEmail === data.data.loginEmail) {
						// 유저 bodydata 가져오기 시도
						// const r = bodyDataAPI.get("/1", submission)
						// console.log(r)
						localStorage.setItem("Jwt", "tmp")
						alert(`로그인 성공`);
						navigate('/')
					} else {
							alert("입력하신 회원정보는 존재하지 않습니다.");
						}
				})
			}
		})
		.catch(error => {
		if (error.response.status === 401) {
			alert(`로그인 실패! 권한이 없습니다.`);
		}
		else {
			alert(`로그인 실패! 정보를 다시 확인해주세요.`);
		}
		})

	}

	return (
		<NoneScrollContainer>
			<S.LoginContainer>
				<S.Title>로그인</S.Title>
				<form onSubmit={onClickLogin}>
					<S.InputFrame>
						<S.LoginInput
							type='text' name="email"
							value={email} onChange={(e) => setEmail(e.target.value)}
							onFocus={() => {
								setIsEmailClicked(true);
							}}
							onBlur={() => {
								setIsEmailClicked(false);
							}}
							placeholder={isEmailClicked === true ? "" : "이메일"}
							pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
							title="fit@mate.com와 같은 형식을 준수해주세요"
							required />
						<S.LoginInput 
							type='password' name='password' 
							value={password} onChange={(e) => setPassword(e.target.value)}
							onFocus={() => {
								setIsPWClicked(true);
							}}
							onBlur={() => {
								setIsPWClicked(false);
							}}
							placeholder={isPWClicked === true ? "" : "비밀번호"}
							autocomplete='on'
							required />
					</S.InputFrame>
					<S.AutomaticLogin>
						<input type="checkbox" />
						로그인 유지
					</S.AutomaticLogin>
					<BigButton email={props.email} type="submit">로그인</BigButton>
				</form>
				<Link to="/signUp">
					<BigButton backcolor={theme.White} fontcolor={theme.Brand}>
						회원가입
					</BigButton>
				</Link>
			</S.LoginContainer>
		</NoneScrollContainer>

	);
};


export default Login;
