import React, { useEffect, useState } from "react";
import homeData from "../home.json";
import styled from "styled-components";

function RoomResult(input) {
    const [data, setData] = useState([]);
    useEffect(() => {
        if (input.name.length > 1) {
            const value = homeData;
            setData(
                value.filter((data) => {
                    return data.name.includes(input.name);
                })
            );
        } else {
            setData([]);
        }
    }, [input]);

    return (
        <div>
            {data.map((data, index) => {
                return (
                    <HousePost>
                        <PostBox key={index}>
                            <PostImg></PostImg>
                            <PostTitleBox>
                                <PostDetailBox>
                                    <PostName>{data.name}</PostName>
                                    <p>상세보기</p>
                                </PostDetailBox>
                                <PostDetailBox>
                                    <PostTitle>{data.address}</PostTitle>
                                </PostDetailBox>
                                <PostDetailBox>
                                    <PostTitle>
                                        해오름힐 좋아요 꼭 오셈
                                    </PostTitle>
                                    <PostDetail>2022.10.1</PostDetail>
                                </PostDetailBox>
                                <PostDetailBox>
                                    <PostTitle>
                                        해오름힐 좋아요 꼭 오셈
                                    </PostTitle>
                                    <PostDetail>2022.10.1</PostDetail>
                                </PostDetailBox>
                                <PostDetailBox>
                                    <PostTitle>
                                        해오름힐 좋아요 꼭 오셈
                                    </PostTitle>
                                    <PostDetail>2022.10.1</PostDetail>
                                </PostDetailBox>
                            </PostTitleBox>
                            {/*<p>이름 : {data.name}</p>
                        <p>lat : {data.lat}</p>
                        <p>lng : {data.lng}</p>
                        <p>size : {data.size}</p>
                <p>address : {data.address}</p>*/}
                        </PostBox>
                    </HousePost>
                );
            })}
        </div>
    );
}

const PostBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const PostTitleBox = styled.div`
    width: 73%;
    display: flex;
    flex-direction: column;
`;

const PostDetailBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
        font-size: 18px;
        font-weight: 500;
        color: #bdbdbd;
        padding: 15px 0 10px 0;
    }
`;

const PostImg = styled.div`
    width: 150px;
    height: 170px;
    background-color: gray;
    margin: 15px;
`;

const PostName = styled.h2`
    font-size: 22px;
    font-weight: 600;
    margin: 15px 0 10px 0;
`;

const PostTitle = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin: 0 10px 7px 0;
`;

const PostDetail = styled.h4`
    font-size: 18px;
    font-weight: 500;
    color: #bdbdbd;
    margin: 0 0 0 10px;
`;

const HousePost = styled.div`
    width: 95%;
    height: 200px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 10px #eeeeee;
    background-color: white;

    p {
        margin: 0;
    }
`;

export default RoomResult;
