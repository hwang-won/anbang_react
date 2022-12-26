import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BodyWrap from "../components/common/BodyWrap";
import NavBack from "../components/common/NavBack";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SwichWrap = styled.ul`
    width: 100%;
    height: 72px;
    list-style: none;
    margin: 50px 0 0 0;
    padding: 0;
    border-bottom: 2px solid black;

    li {
        display: inline-block;
        border-top: 2px solid black;
        padding: 20px 40px 20px 40px;
        font-size: 20px;
        font-weight: 600;
    }
`;

const ContentWrap = styled.ul`
    width: 100%;
    height: 550px;
    margin: 0 auto;
    padding: 0;
`;

const Content = styled.li`
    list-style: none;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #cfcfcf;

    a {
        text-decoration: none;
        color: black;
    }

    p {
        display: inline-block;
        font-size: 14px;
        line-height: 50px;
        margin: 0;
        padding-left: 16px;
    }

    span {
        float: right;
        font-size: 14px;
        color: gray;
        padding-right: 16px;
        line-height: 50px;
    }

    div:hover {
        cursor: pointer;
        font-weight: 600;
    }
`;

const ContentPage = styled.div`
    height: 50px;
    margin: 0 auto;
    text-align: center;

    p {
        margin: 10px;
        padding: 10px;
    }
`;

function Notice() {
    return (
        <div>
            <Navbar />
            <BodyWrap width="900px">
                <NavBack></NavBack>
                <SwichWrap>
                    <li>공지</li>
                </SwichWrap>
                <ContentWrap>
                    <NoticeContent></NoticeContent>
                    <NoticeContent></NoticeContent>
                    <NoticeContent></NoticeContent>
                    <NoticeContent></NoticeContent>
                    <NoticeContent></NoticeContent>
                    <NoticeContent></NoticeContent>
                    <NoticeContent></NoticeContent>
                    <NoticeContent></NoticeContent>
                    <NoticeContent></NoticeContent>
                    <NoticeContent></NoticeContent>
                    <ContentPage>
                        <p>1 2 3 4</p>
                    </ContentPage>
                </ContentWrap>
            </BodyWrap>
            <Footer />
        </div>
    );
}

function NoticeContent(props) {
    return (
        <>
            <Content>
                <Link to="/notice">
                    <div>
                        <p>공지입니다</p>
                        <span>2022.10.1</span>
                    </div>
                </Link>
            </Content>
        </>
    );
}

export default Notice;
