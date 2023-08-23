import { useNavigate } from "react-router-dom";
import { BeforeButton, SmallButton } from "../../../components/";
import { useTransition, animated } from "@react-spring/web";
import theme from "../../../styles/theme";
import {
  BudgetContainer,
  BudgetBox,
  RecommendButtonContainer,
  RecommendContainer,
  RecommendTitle,
} from "../StyledRecommend";
import { useState } from "react";
import minus from "../../../assets/images/minus.svg";
import plus from "../../../assets/images/plus.svg";

// 버튼과 이미지의 간격을 어떻게 줄지 고민해 봐야함.
const RecommendSupplementBudget = () => {
  const navigate = useNavigate();

  // 가격
  const [budget, setBudget] = useState(30000);
  // 가격 변동 방향
  const [direction, setDirection] = useState(null);
  // 가격 한계점
  const [warnBudget, setWarnBudget] = useState(false);

  const transitions = useTransition(budget, {
    keys: budget,
    // 처음
    from: {
      position: "absolute",
      opacity: 0,
      transform:
        direction === "increase"
          ? "translate3d(0,-100%,0)"
          : "translate3d(0,100%,0)",
    },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: {
      opacity: 0,
      transform:
        direction === "increase"
          ? "translate3d(0,100%,0)"
          : "translate3d(0,-100%,0)",
    },
    config: { tension: 600, friction: 120 },
  });

  const handleBackPage = () => {
    navigate(-1);
  };

  const goNextPage = () => {
    navigate("/recommend/supplementresult");
  };

  // 가격 변화
  const handleUp = () => {
    setDirection("increase");
    if (budget >= 10000) {
      setWarnBudget(false);
    }
    setBudget((prev) => prev + 10000);
  };

  const handleDown = () => {
    setDirection("decrease");
    if (budget <= 10000) {
      setWarnBudget(true);
    } else {
      setBudget((prev) => prev - 10000);
    }
  };

  return (
    <RecommendContainer>
      <div>
        <RecommendTitle ftsize="32px" ftcolor={theme.Black} ftweight="700">
          보조제에 사용할 수 있는 금액은 어느정도인가요?
        </RecommendTitle>
        <br />
        <br />
        <RecommendTitle ftsize="24px" ftcolor={theme.Gray80} ftweight="600">
          AI가 김정욱님에게 최적화된 솔루션을 제공해줘요
        </RecommendTitle>
      </div>
      <BudgetContainer>
        <BudgetBox warnBudget={warnBudget}>
          <img
            src={minus}
            alt="금액 감소 버튼"
            className="minusButton"
            onClick={handleDown}
          />
          <div className="budgetWrapper">
            {transitions((style, item) => (
              <animated.span style={style} className="budget">
                {item.toLocaleString()}
              </animated.span>
            ))}
          </div>
          <img
            src={plus}
            alt="금액 증가 버튼"
            className="plusButton"
            onClick={handleUp}
          />
        </BudgetBox>
        {warnBudget && (
          <span className="warningText">
            더이상 줄일 수 없어요
            <br />
            최저 예산이에요
          </span>
        )}
      </BudgetContainer>

      <RecommendButtonContainer>
        <BeforeButton handleSubmit={handleBackPage}></BeforeButton>
        <SmallButton handleSubmit={goNextPage}>추천받기</SmallButton>
      </RecommendButtonContainer>
    </RecommendContainer>
  );
};

export default RecommendSupplementBudget;
