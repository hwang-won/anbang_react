import styled from "styled-components";
import symbol from "../img/symbol.png";

const FooterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    background-color: #616161;

    img {
        width: 100px;
        margin: 10px;
    }
`;

const FooterTextBox = styled.div`
    font-size: 15px;
    font-weight: 600;
    margin: 12px;
    color: #bdbdbd;

    p {
        margin: 0;
        padding: 4px;
    }
`;

function Footer(props) {
    return (
        <>
            <FooterBox>
                <FooterTextBox>
                    <img alt="symbol" src={symbol} />
                </FooterTextBox>
                <FooterTextBox>
                    <p>(주)안방</p>
                    <p>안동시 경동로 1375 송천동 국립안동대학교</p>
                    <p>공대1호관 413호 NGN연구실</p>
                </FooterTextBox>
                <FooterTextBox>
                    <p>고객문의</p>
                    <p>Tel : 010-9548-1369</p>
                    <p>E-mail : w1683111@naver.com</p>
                </FooterTextBox>
            </FooterBox>
        </>
    );
}

export default Footer;
