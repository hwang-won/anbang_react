import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "./common/Modal";
import AuthTemplate from "./auth/AuthTemplate";
import AuthForm from "./auth/AuthForm";
import logo from "../img/logo.png";

const NavBox = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 100;
    background-color: #ffff;
    border-bottom: 1px solid #bdbdbd;
`;

const Wrap = styled.div`
    width: 1200px;
    margin: 0 auto;
    height: 100px;
`;

const Logo = styled.div`
    float: left;
    margin-left: 24px;
    padding: 0;
    height: 100%;

    img {
        margin: 12px 0 0 0;
        width: 120px;
    }
`;

const Menu = styled.ul`
    list-style: none;
    margin: 0 auto;
    padding: 0;
    width: 600px;
    height: 100%;
    text-align: center;

    a {
        text-decoration: none;
        color: black;
    }

    li {
        display: inline-block;
        margin: 0 12px;
        line-height: 80px;
        font-size: 16px;
        font-weight: 600;
    }
`;

const Account = styled.ul`
    float: right;
    margin-left: 24px;
    padding: 0;
    height: 100%;

    a {
        text-decoration: none;
        color: black;
    }

    li {
        display: inline-block;
        margin: 0 12px;
        font-size: 16px;
        font-weight: 600;
    }

    p {
        cursor: pointer;
    }
`;

const CloseButton = styled.button`
    position: relative;
    top: -50px;
    right: -330px;
    font-size: 50px;
    font-weight: 600;
    color: #4d4d4d;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    border: 0;
    margin: 0;
    padding: 0;
`;

function Navbar(props) {
    const [modalOpen, setModalOpen] = useState();

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <>
            <NavBox>
                <Wrap>
                    <Logo>
                        <Link to={"/"}>
                            <img alt="logo" src={logo} />
                        </Link>
                    </Logo>
                    <Account>
                        <li>
                            <Link to="/register">회원가입</Link>
                        </li>
                        <li>
                            <p onClick={openModal}>로그인</p>
                            <Modal open={modalOpen} close={closeModal}>
                                <AuthTemplate>
                                    <CloseButton onClick={closeModal}>
                                        &times;
                                    </CloseButton>
                                    <AuthForm type="login" />
                                </AuthTemplate>
                            </Modal>
                        </li>
                    </Account>
                    <Menu>
                        <li>
                            <Link to="/">지도</Link>
                        </li>
                        <li>
                            <Link to="/board">게시판</Link>
                        </li>
                        <li>
                            <Link to="/like">관심목록</Link>
                        </li>
                        <li>
                            <Link to="/notice">공지</Link>
                        </li>
                    </Menu>
                </Wrap>
            </NavBox>
        </>
    );
}

export default Navbar;
