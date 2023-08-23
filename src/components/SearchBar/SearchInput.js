import { SearchInputContent } from "./StyledSearch";

export const SearchInput = ({ isClicked, setIsClicked }) => {
  return (
    <SearchInputContent
      isClicked={isClicked}
      placeholder={
        isClicked === true ? "" : "운동명이나 운동 부위를 검색해보세요"
      }
      onFocus={() => {
        setIsClicked(true);
      }}
      onBlur={() => {
        setIsClicked(false);
      }}
    />
  );
};
