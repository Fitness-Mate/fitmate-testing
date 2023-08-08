// < 글만 있는 체크박스 >

import React from "react";
import * as S from "./StyledTextCheckbox";


// choicearticle : 추천받는 항목이 다양해서 우선 분리했으나, 
// 추후 백과 합치면서 체크박스 onClick 애니메이션 제작에 영향을 받아 수정될 가능성 있음
// 위 문제와 더불어 back 코드와 함께 다룰 필요가 있는 체크박스 애니메이션 제작은 하지 않았음

function TextCheckbox({children}) {
	return (
		<S.TextCheckbox>
			<div className="TextCheckbox-layout">
				<span className="choice-article">{children}</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
					<circle className="check-background" cx="20" cy="20" r="16" />
					<path className="check-shape" d="M28.3797 14.5008C28.584 14.7053 28.6987 14.9826 28.6987 15.2717C28.6987 15.5608 28.584 15.8381 28.3797 16.0426L17.8342 26.5881C17.6297 26.7924 17.3524 26.9071 17.0633 26.9071C16.7742 26.9071 16.497 26.7924 16.2924 26.5881L11.5652 21.8608C11.3726 21.6539 11.2677 21.3803 11.2726 21.0977C11.2774 20.8151 11.3917 20.5453 11.5913 20.3452C11.7915 20.1455 12.0612 20.0313 12.3439 20.0264C12.6265 20.0215 12.9 20.1264 13.107 20.319L17.0633 24.2753L26.8379 14.5008C27.0424 14.2965 27.3197 14.1818 27.6088 14.1818C27.8979 14.1818 28.1752 14.2965 28.3797 14.5008Z"/>
				</svg>
			</div>
		</S.TextCheckbox>
	);
}

export default TextCheckbox;