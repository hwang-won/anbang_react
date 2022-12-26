import styled from "styled-components";

// 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.

// 배경화면
const AuthTemplateBox = styled.div`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// 힁색 박스
const WhiteBox = styled.div`
    .logo_area {
        display: block;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
        a {
            color: black;
            font-size: 24px;
            text-decoration: none;
        }
        h2 {
            margin: 0;
        }
    }

    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    padding: 2rem;
    width: 360px;
    background-color: white;
    border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBox>
            <WhiteBox>
                <div className="logo_area">
                    <h2>ANBANG</h2>
                </div>
                {children}
            </WhiteBox>
        </AuthTemplateBox>
    );
};

export default AuthTemplate;
