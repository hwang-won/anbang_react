import styled from "styled-components";

const PopUpButton = styled.button`
    position: absolute;
    top: 40%;
    width: 20px;
    right: 100%;
    height: 100px;
    background-color: #000080;
    border-radius: 15px 0 0 15px;
    cursor: pointer;
    border: 0;
    z-index: 80;
    padding: 0;
    margin: 0;

    animation: popup-show 0.3s;

    @keyframes popup-show {
        from {
            opacity: 0;
            margin-right: -100px;
        }

        to {
            opacity: 1;
        }
    }

    p {
        font-size: 32px;
        color: white;
        z-index: 40;
        margin: 0;
        padding: 0;
    }
`;

export default PopUpButton;
