import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
${reset}
    // 적용시킬 css 입력
    a{
        text-decoration: none;
        color: inherit;
    }
    *,span,input{
        box-sizing: border-box;    
        font-weight:500;
        line-height:normal;
        
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
         font-family: 'Pretendard';
         line-height:normal;


    }
    body{
        line-height: 1;
        background-color: white; 
    }

    ol, ul{
        list-style: none;
    }
    button {
        font-family: 'Pretendard', sans-serif;
        border: 0;
        background: transparent;
        cursor: pointer;
        outline:none;
    }
    // 입력창 클릭 시 테두리, 흰 배경 제거
    input{
        font-family: 'Pretendard', sans-serif;
        outline:none;
        border:none;
        background:none;
        &:focus{
            outline:none;
     
        }
    }
    img{
        max-width:100%;
    }
`;

export default GlobalStyles;
