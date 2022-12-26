import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BodyWrap from "../components/common/BodyWrap";
import NavBack from "../components/common/NavBack";
import styled from "styled-components";

const Wrap = styled.div`
    width: 100%;
    height: 300px;

    p {
        font-size: 24px;
        font-weight: 600;
        margin: 80px 0 0 0;
    }
`;

const LikeRoomBox = styled.div`
    width: 100%;
    height: 200px;
    background-color: antiquewhite;
`;

function Like() {
    return (
        <div>
            <Navbar />
            <BodyWrap>
                <NavBack></NavBack>
                <Wrap>
                    <p>관심목록</p>
                </Wrap>
                <Wrap>
                    <LikeRoom></LikeRoom>
                </Wrap>
            </BodyWrap>
            <Footer />
        </div>
    );
}

function LikeRoom(props) {
    return (
        <>
            <LikeRoomBox></LikeRoomBox>
        </>
    );
}

export default Like;
