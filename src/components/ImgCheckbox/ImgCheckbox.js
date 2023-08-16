// < 이미지가 포함된 체크박스 >

import React from "react";
import * as S from "./StyledImgCheckbox";

const ImgCheckbox = ({
  handleClick,
  isSelected,
  children,
  elementidx,
  articleimg,
}) => {
  return (
    <S.ImgCheckboxWrapper
      onClick={() => {
        handleClick(elementidx);
      }}
      isSelected={isSelected}
    >
      <div className="ImgCheckbox-top">
        {/* 문구 */}
        <span className="choice-article">{children}</span>
        {/* 체크 전체(네모박스) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          {/* 체크 배경(원) */}
          <circle className="check-background" cx="20" cy="20" r="16" />
          {/* 체크 색 */}
          <path
            className="check-shape"
            d="M28.3797 14.5008C28.584 14.7053 28.6987 14.9826 28.6987 15.2717C28.6987 15.5608 28.584 15.8381 28.3797 16.0426L17.8342 26.5881C17.6297 26.7924 17.3524 26.9071 17.0633 26.9071C16.7742 26.9071 16.497 26.7924 16.2924 26.5881L11.5652 21.8608C11.3726 21.6539 11.2677 21.3803 11.2726 21.0977C11.2774 20.8151 11.3917 20.5453 11.5913 20.3452C11.7915 20.1455 12.0612 20.0313 12.3439 20.0264C12.6265 20.0215 12.9 20.1264 13.107 20.319L17.0633 24.2753L26.8379 14.5008C27.0424 14.2965 27.3197 14.1818 27.6088 14.1818C27.8979 14.1818 28.1752 14.2965 28.3797 14.5008Z"
          />
        </svg>
      </div>
      <div className="ImgCheckbox-bottom">
        <img
          className="article-image"
          src={require(`../../assets/images/${articleimg}.png`)}
          alt={articleimg}
        />
      </div>
    </S.ImgCheckboxWrapper>
  );
};

export default ImgCheckbox;
