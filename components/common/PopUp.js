import styled from "styled-components";
import PopUpButton from "./PopUpButtons";

const PopUpScreen = styled.div`
    position: fixed;
    z-index: 70;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
`;

const PopuUpBox = styled.div`
    width: 100%;
    height: 100%;
    background: #ffffff;
    border: 1px solid #dadada;

    animation: popup-show 0.3s;
    z-index: 90;

    @keyframes popup-show {
        from {
            opacity: 0;
            margin-right: -100px;
        }

        to {
            opacity: 1;
        }
    }
`;

const PopUp = (props) => {
    const { open, close } = props;

    return (
        <div className={open ? "openPopup popup" : "popup"}>
            {open ? (
                <PopUpScreen>
                    <PopuUpBox>
                        <PopUpButton className="close" onClick={close}>
                            <p>»</p>
                        </PopUpButton>
                        <main>{props.children}</main>
                    </PopuUpBox>
                </PopUpScreen>
            ) : null}
        </div>
    );
};

export default PopUp;
