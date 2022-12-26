import styled from "styled-components";

const BodyWrap = styled.div`
    width: 1000px;
    width: ${(props) => props.width};
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
`;

export default BodyWrap;
