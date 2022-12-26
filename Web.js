import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Map from "./Map";
import House from "./House";
import Menu from "./pages/Menu";
import Signup from "./pages/Signup";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PopUpButton from "./components/common/PopUpButtons";
import PopUp from "./components/common/PopUp";
import styled from "styled-components";
import Board from "./pages/Board";
import Like from "./pages/Like";
import Notice from "./pages/Notice";

function Web() {
    const [popupOpen, setPopOpen] = useState(true);

    const openPopUp = () => {
        setPopOpen(true);
    };
    const closePopUp = () => {
        setPopOpen(false);
    };
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div className="main" style={{ display: "flex" }}>
                        {/* 메인페이지 왼쪽 지도 */}
                        <div className="map">
                            <Map />
                        </div>

                        {/* Popup Button */}
                        <HouseCloseButton onClick={openPopUp}>
                            <p>«</p>
                        </HouseCloseButton>

                        {/* 메인페이지 오른쪽 정보 */}
                        <PopUp open={popupOpen} close={closePopUp}>
                            <House></House>
                        </PopUp>
                    </div>
                }
            />
            <Route path="/menu" element={<Menu />} />
            <Route path="/board" element={<Board />} />
            <Route path="/like" element={<Like />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    );
}

const HouseCloseButton = styled(PopUpButton)`
    position: fixed;
    margin: 0;
    padding: 0;
    right: -1px;
    top: 40%;
    border-radius: 15px 0 0 15px;
    z-index: 70;
    background-color: #000080;
`;

export default Web;
