// < 홈 페이지 >

import React, { useEffect, useState } from "react";
import * as S from "./StyledHome";
import HomeSecondImg1 from "../../assets/images/HomeSecondImg1.png";
import HomeSecondImg2 from "../../assets/images/HomeSecondImg2.png";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/images/arrow.svg";

export const Home = () => {
  const navigate = useNavigate();

  const handleRecommend = () => {
    navigate("recommend");
  };

  const handleRecommendWorkout = () => {
    navigate("recommend/workout");
  };

  return (
    <S.HomeContainer>
      <S.HomeContent>
        <S.FirstContent>
          <div className="firstTop">AI 운동 큐레이션 서비스</div>
          <div className="firstMiddle">
            <p>운동과 보조제를</p>
            <p>가장 빠르게 추천 받는 방법</p>
          </div>
          <div className="firstBottom">
            FITMATE에서 제대로 운동하는 법을 알아보세요!
          </div>
          <button className="shortCutButton" onClick={handleRecommend}>
            바로 추천받기
          </button>
        </S.FirstContent>
      </S.HomeContent>
      <S.HomeContent>
        <S.SecondContent>
          <S.SecondText>
            <span className="secondTop">
              운동<p>해보고 싶은데</p>
            </span>
            <span className="secondTop">어떻게 해야하는지 모를 때</span>
            <span className="secondMiddle">
              <p>운동의 시작을 어떻게 해야할지 고민하지마세요.</p>
              <p>AI가 여러분의 정보를 바탕으로 추천해줘요</p>
            </span>
            <div className="secondBottom">
              <button className="clickFrame" onClick={handleRecommendWorkout}>
                <span>운동 추천 바로 받기</span>
                <img src={arrow} alt="운동 추천 바로 받기 버튼"></img>
              </button>
            </div>
          </S.SecondText>
          <S.SecondImg1>
            <img
              className="HomeSecondImg"
              src={HomeSecondImg1}
              alt="An athletic woman"
            />
          </S.SecondImg1>
        </S.SecondContent>
      </S.HomeContent>
      <S.HomeContent>
        <S.SecondContent>
          <S.SecondImg2>
            <img
              className="HomeSecondImg"
              src={HomeSecondImg2}
              alt="An athletic woman"
            />
          </S.SecondImg2>
          <S.SecondText>
            <span id="right" className="secondTop">
              보조제<p>먹고 싶은데</p>
            </span>
            <span id="right" className="secondTop">
              뭘 먹어야 할 지 모를 때
            </span>
            <div className="secondMiddle">
              <p id="right">운동의 시작을 어떻게 해야할지 고민하지마세요</p>
              <p id="right">AI가 여러분의 정보를 바탕으로 추천해줘요</p>
            </div>
            <div id="right" className="secondBottom">
              <button className="clickFrame">
                <span>보조제 추천 바로 받기</span>
                <img src={arrow} alt="보조제 추천 바로 받기 버튼"></img>
              </button>
            </div>
          </S.SecondText>
        </S.SecondContent>
      </S.HomeContent>
      <S.HomeContent>
        <S.ThirdContent>
          <p className="thirdTitle">FITMATE 유저들의 생생한 이용 후기</p>
          <S.ThirdText>
            {[0, 0, 0].map((item) => {
              return (
                <S.ThirdFrame>
                  <S.FrameTop>
                    <div className="profileImg" />
                    <div className="profileContent">
                      <span className="profileName">최시현</span>
                      <span className="profileInfo">헬린이 20세 (여자)</span>
                    </div>
                  </S.FrameTop>
                  <S.FrameBottom>
                    수능 끝나고 운동 처음 해보는 거라 막막 했는데 FITMATE가 제
                    체형에 맞는 운동 을 분석해서 추천해 줬어요. 1대 1 피티 받는
                    기분 들고 좋았습니다!! 프로틴 정보까지 너무 감사합니다~~
                  </S.FrameBottom>
                </S.ThirdFrame>
              );
            })}
          </S.ThirdText>
        </S.ThirdContent>
      </S.HomeContent>
    </S.HomeContainer>
  );
};

export default Home;
