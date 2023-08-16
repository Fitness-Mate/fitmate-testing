// < 홈 페이지 >

import React from "react";
import * as S from "./StyledHome";
import { ScrollContainer } from "../../Layout/ScrollContainer";
import HomeSecondImg1 from "../../assets/images/HomeSecondImg1.png";
import HomeSecondImg2 from "../../assets/images/HomeSecondImg2.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	return (
		<ScrollContainer>
			<S.Home>
				<S.HomeContent>
					<S.FirstContent>
						<div className="FirstTop">AI 운동 큐레이션 서비스</div>
						<div className="FirstMiddle">
							<p>운동과 보조제를</p>
							<p>가장 빠르게 추천 받는 방법</p>
						</div>
						<div className="FirstBottom">FITMATE에서 제대로 운동하는 법을 알아보세요!</div>
						<S.ShortcutButton>바로 추천받기</S.ShortcutButton>
					</S.FirstContent>
				</S.HomeContent>
				<S.HomeContent>
					<S.SecondContent>
						<S.SecondText>
							<div className="SecondTop">
								운동<p>해보고 싶은데</p>
							</div>
							<div className="SecondTop">
								어떻게 해야하는지 모를 때
							</div>
							<div className="SecondMiddle">
								<p>운동의 시작을 어떻게 해야할지 고민하지마세요.</p>
								<p>AI가 여러분의 정보를 바탕으로 추천해줘요</p>
							</div>
							<div className="SecondBottom">
								<div className="ClickFrame">
									<p>운동 추천 바로 받기</p>
									<svg viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g id="fluent:ios-arrow-24-filled">
											<path id="Vector" d="M13.6215 5.36786C13.5125 5.2525 13.4273 5.1168 13.3707 4.9685C13.3142 4.8202 13.2874 4.66222 13.2919 4.50356C13.2963 4.3449 13.332 4.18868 13.3969 4.04382C13.4618 3.89896 13.5545 3.76829 13.6699 3.65928C13.7852 3.55026 13.9209 3.46504 14.0692 3.40847C14.2175 3.3519 14.3755 3.3251 14.5342 3.32958C14.6928 3.33407 14.8491 3.36977 14.9939 3.43463C15.1388 3.49949 15.2694 3.59225 15.3785 3.70761L25.6493 14.5826C25.8614 14.807 25.9796 15.104 25.9796 15.4127C25.9796 15.7215 25.8614 16.0185 25.6493 16.2429L15.3785 27.1191C15.2702 27.237 15.1395 27.3321 14.9941 27.3991C14.8487 27.4661 14.6915 27.5035 14.5315 27.5092C14.3715 27.5149 14.212 27.4887 14.0622 27.4322C13.9125 27.3757 13.7754 27.2901 13.659 27.1802C13.5426 27.0703 13.4492 26.9383 13.3843 26.792C13.3193 26.6457 13.284 26.488 13.2806 26.3279C13.2771 26.1679 13.3054 26.0088 13.364 25.8598C13.4225 25.7108 13.5101 25.5749 13.6215 25.46L23.1094 15.4127L13.6215 5.36786Z" />
										</g>
									</svg>
								</div>
							</div>
						</S.SecondText>
						<S.SecondImg1>
							<img className="HomeSecondImg" src={HomeSecondImg1} alt="An athletic woman" />
						</S.SecondImg1>
					</S.SecondContent>
				</ S.HomeContent>
				<S.HomeContent>
					<S.SecondContent>
						<S.SecondImg2>
							<img className="HomeSecondImg" src={HomeSecondImg2} alt="An athletic woman" />
						</S.SecondImg2>
						<S.SecondText>
							<div id="right" className="SecondTop">
								보조제<p>먹고 싶은데</p>
							</div>
							<div id="right" className="SecondTop">
								뭘 먹어야 할 지 모를 때
							</div>
							<div className="SecondMiddle">
								<p id="right">운동의 시작을 어떻게 해야할지 고민하지마세요.</p>
								<p id="right">AI가 여러분의 정보를 바탕으로 추천해줘요</p>
							</div>
							<div id="right" className="SecondBottom">
								<div className="ClickFrame">
									<p>보조제 추천 바로 받기</p>
									<svg viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g id="fluent:ios-arrow-24-filled">
											<path id="Vector" d="M13.6215 5.36786C13.5125 5.2525 13.4273 5.1168 13.3707 4.9685C13.3142 4.8202 13.2874 4.66222 13.2919 4.50356C13.2963 4.3449 13.332 4.18868 13.3969 4.04382C13.4618 3.89896 13.5545 3.76829 13.6699 3.65928C13.7852 3.55026 13.9209 3.46504 14.0692 3.40847C14.2175 3.3519 14.3755 3.3251 14.5342 3.32958C14.6928 3.33407 14.8491 3.36977 14.9939 3.43463C15.1388 3.49949 15.2694 3.59225 15.3785 3.70761L25.6493 14.5826C25.8614 14.807 25.9796 15.104 25.9796 15.4127C25.9796 15.7215 25.8614 16.0185 25.6493 16.2429L15.3785 27.1191C15.2702 27.237 15.1395 27.3321 14.9941 27.3991C14.8487 27.4661 14.6915 27.5035 14.5315 27.5092C14.3715 27.5149 14.212 27.4887 14.0622 27.4322C13.9125 27.3757 13.7754 27.2901 13.659 27.1802C13.5426 27.0703 13.4492 26.9383 13.3843 26.792C13.3193 26.6457 13.284 26.488 13.2806 26.3279C13.2771 26.1679 13.3054 26.0088 13.364 25.8598C13.4225 25.7108 13.5101 25.5749 13.6215 25.46L23.1094 15.4127L13.6215 5.36786Z" />
										</g>
									</svg>
								</div>
							</div>
						</S.SecondText>
					</S.SecondContent>
				</S.HomeContent>
				<S.HomeContent>
					<S.ThirdContent>
						<p className="Thirdtitle">FITMATE 유저들의 생생한 이용 후기</p>
						<S.ThirdText>
							<S.ThirdFrame>
								<S.FrameTop>
									<div className="PlofileImg"></div>
									<div className="PlofileContent">
										<h1>최시현</h1>
										<div>헬린이 20세 (여자)</div>
									</div>
								</S.FrameTop>
								<S.FrameBottom>
									수능 끝나고 운동 처음 해보는 거라 막막 했는데 FITMATE가 제 체형에 맞는 운동 을 분석해서 추천해 줬어요. 1대 1 피티 받는 기분 들고 좋았습니다!! 프로틴 정보까지 너무 감사합니다~~
								</S.FrameBottom>
							</S.ThirdFrame>
							<S.ThirdFrame>
								<S.FrameTop>
									<div className="PlofileImg"></div>
									<div className="PlofileContent">
										<h1>강민정</h1>
										<div>헬린이 20세 (여자)</div>
									</div>
								</S.FrameTop>
								<S.FrameBottom>
									수능 끝나고 운동 처음 해보는 거라 막막 했는데 FITMATE가 제 체형에 맞는 운동 을 분석해서 추천해 줬어요. 1대 1 피티 받는 기분 들고 좋았습니다!! 프로틴 정보까지 너무 감사합니다~~
								</S.FrameBottom>
							</S.ThirdFrame>
							<S.ThirdFrame>
								<S.FrameTop>
									<div className="PlofileImg"></div>
									<div className="PlofileContent">
										<h1>최시현</h1>
										<div>헬린이 20세 (여자)</div>
									</div>
								</S.FrameTop>
								<S.FrameBottom>
									수능 끝나고 운동 처음 해보는 거라 막막 했는데 FITMATE가 제 체형에 맞는 운동 을 분석해서 추천해 줬어요. 1대 1 피티 받는 기분 들고 좋았습니다!! 프로틴 정보까지 너무 감사합니다~~
								</S.FrameBottom>
							</S.ThirdFrame>
						</S.ThirdText>
					</S.ThirdContent>
				</S.HomeContent>
			</S.Home>
		</ScrollContainer>
	);
};

export default Home;
