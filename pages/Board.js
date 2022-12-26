import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BodyWrap from "../components/common/BodyWrap";
import NavBack from "../components/common/NavBack";
import Hr from "../components/common/Hr";

const FlexBox = styled.div`
    width: 100%;
    display: flex;
`;

const Wrap = styled.div`
    width: 100%;
    width: ${(props) => props.wid};
    height: ${(props) => props.hei};
    margin-top: 10px;
    margin-bottom: 10px;
    display: inline-block;
`;

const ImgWrap = styled.div`
    width: 100%;
    height: 450px;
    background-color: antiquewhite;
    display: flex;
`;

const ImgBox = styled.div`
    width: ${(props) => props.wid};
    margin: 25px;
    height: 400px;
    background-color: gray;
`;

const H2 = styled.div`
    p {
        display: inline-block;
        font-size: 24px;
        font-weight: 600;
        margin: 20px;
    }

    span {
        float: right;
        margin: 30px;
    }
`;

const H3 = styled.div`
    p {
        font-size: 20px;
        font-weight: 600;
        margin: 10px;
    }
`;

function Board() {
    return (
        <div>
            <Navbar />
            <BodyWrap>
                <NavBack />
                {/* 원룸 이름 */}
                <Wrap hei="120px">
                    <RoomWrap></RoomWrap>
                </Wrap>
                {/* 원룸 이미지 */}
                <ImgWrap>
                    <ImgBox wid="50%"></ImgBox>
                </ImgWrap>
                {/* 원룸 후기 */}
                <Wrap>
                    <FlexBox>
                        <Wrap wid="70%">
                            <Wrap hei="70px">
                                <H2>
                                    <p>★ 4.8 · 평가 10개</p>
                                    <span>글쓰기</span>
                                </H2>
                            </Wrap>
                            <Hr></Hr>
                            <RoomBoard></RoomBoard>
                            <RoomBoard></RoomBoard>
                            <RoomBoard></RoomBoard>
                            <RoomBoard></RoomBoard>
                            <RoomBoard></RoomBoard>
                        </Wrap>
                        <Wrap wid="27%">
                            <PopBoard></PopBoard>
                            <RecentBoard></RecentBoard>
                        </Wrap>
                    </FlexBox>
                    <FlexBox>
                        <Wrap wid="65%">
                            <input></input>
                            <button>검색</button>
                        </Wrap>
                        <button>다음</button>
                    </FlexBox>
                </Wrap>
                {/* 원룸 지도 */}
                <Wrap hei="100px"></Wrap>
            </BodyWrap>
            <Footer />
        </div>
    );
}

function RoomWrap(props) {
    return (
        <div>
            <div>
                <H2>
                    <p>원룸 이름</p>
                </H2>
                <H3>
                    <p>원룸 주소</p>
                </H3>
            </div>
        </div>
    );
}

const BoardBox = styled.div`
    width: 100%;
    padding: 5px;
    cursor: pointer;
`;

const BoardTitle = styled.div`
    width: 100%;

    p {
        display: inline-block;
        margin: 8px;
        font-size: 18px;
        font-weight: 600;
    }
`;

const BoardContents = styled.div`
    width: 100%;

    p {
        display: inline-block;
        margin: 6px;
        font-size: 16px;
    }
`;

const BoardDate = styled.div`
    width: 100%;

    p {
        margin: 10px;
        display: inline-block;
        font-size: 12px;
        color: gray;
    }

    span {
        float: right;
        margin: 5px;
    }
`;

function RoomBoard(props) {
    return (
        <>
            <Hr></Hr>
            <BoardBox>
                <BoardTitle>
                    <p>원룸 좋아요</p>
                </BoardTitle>
                <BoardContents>
                    <p>원룸 자세한 내용은 다음과 같습니다</p>
                </BoardContents>
                <BoardDate>
                    <p>2022.10.10</p>
                    <span>좋아요 1개</span>
                    <span>★★★★★</span>
                </BoardDate>
            </BoardBox>
            <Hr></Hr>
        </>
    );
}

const SideBox = styled.div`
    width: 100%;
    margin-left: 20px;
    margin-bottom: 20px;
    border: 1px solid #d1d1d1;

    h1 {
        display: inline-block;
        margin: 10px;
        font-size: 18px;
        font-weight: 600;
    }

    span {
        font-size: 12px;
        color: gray;
        float: right;
        margin: 16px;
        cursor: pointer;
    }

    p {
        display: inline-block;
        margin: 10px;
        font-size: 16px;
    }

    div {
        cursor: pointer;
    }
`;

function PopBoard(props) {
    return (
        <>
            <SideBox>
                <h1>HOT 게시물</h1>
                <span>더보기</span>
                <Hr></Hr>
                <div>
                    <p>여긴 개 더럽다 오지마라</p>
                </div>
                <Hr></Hr>
                <div>
                    <p>월30 추천</p>
                </div>
                <Hr></Hr>
                <div>
                    <p>1년 360, 학교 가까움</p>
                </div>
                <Hr></Hr>
                <div>
                    <p>밤에 시끄러움 별로임</p>
                </div>
                <Hr></Hr>
                <div>
                    <p>가성비 원룸 추천</p>
                </div>
            </SideBox>
        </>
    );
}

function RecentBoard(props) {
    return (
        <>
            <SideBox>
                <h1>최근 게시물</h1>
                <span>더보기</span>
                <Hr></Hr>
                <div>
                    <p>추천추천</p>
                </div>
                <Hr></Hr>
                <div>
                    <p>비싸기만함</p>
                </div>
                <Hr></Hr>
                <div>
                    <p>편의점 앞이라 좋은 원룸들</p>
                </div>
                <Hr></Hr>
                <div>
                    <p>원룸 사장 조심할 원룸</p>
                </div>
                <Hr></Hr>
                <div>
                    <p>풀옵션 좋아요</p>
                </div>
            </SideBox>
        </>
    );
}

export default Board;
