import { Link } from "react-router-dom";
import styled from "styled-components";
import "./style.css";
import { useState } from "react";
import RoomResult from "./components/roomResult";

const House = (props) => {
    const [input, setInput] = useState("");
    return (
        <div>
            {/* house 상단 검색바  */}
            <HouseNavbar>
                <Link to={"menu"}>
                    <HouseMenu>
                        <MenuWrap>
                            <MenuBox></MenuBox>
                            <MenuBox></MenuBox>
                            <MenuBox></MenuBox>
                            <MenuBox></MenuBox>
                            <MenuBox></MenuBox>
                            <MenuBox></MenuBox>
                            <MenuBox></MenuBox>
                            <MenuBox></MenuBox>
                            <MenuBox></MenuBox>
                        </MenuWrap>
                    </HouseMenu>
                </Link>
                <HouseInput
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    placeholder="  원룸 이름, 건물 이름을 입력하세요"
                ></HouseInput>
            </HouseNavbar>

            {/* house 중단 필터 검색 */}

            {/* house 하단 집 정보 */}
            <HouseWarp>
                <RoomResult name={input} />
                <RoomResult name={input} />
            </HouseWarp>
        </div>
    );
};

const HouseNavbar = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    background-color: #000080;
`;

const HouseMenu = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: #707070;
    margin: 10px;
    display: inline-block;
`;

const MenuWrap = styled.div`
    width: 21px;
    height: 21px;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
`;

const MenuBox = styled.div`
    width: 5px;
    height: 5px;
    background-color: white;
    margin: 1px;
`;

const HouseInput = styled.input`
    width: 85%;
    height: 35px;
    border-radius: 5px;
    font-size: 16px;
    margin: 10px 0 10px 0;
`;

const HouseWarp = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    overflow: scroll;
`;

export default House;
