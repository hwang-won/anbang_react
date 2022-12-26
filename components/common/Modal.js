import styled from "styled-components";

const Fullscreen = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: modal-bg-show 0.3s;

    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;

const ModalBox = styled.div`
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    animation: modal-show 0.3s;

    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -50px;
        }

        to {
            opacity: 1;
            margin-top: 0;
        }
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 50px;
    font-weight: 700;
    color: white;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    border: 0;
`;

const Modal = (props) => {
    const { open, close } = props;

    return (
        <div className={open ? "openModal modal" : "modal"}>
            {open ? (
                <Fullscreen>
                    <ModalBox>
                        <CloseButton className="close" onClick={close}>
                            &times;
                        </CloseButton>
                        <main>{props.children}</main>
                    </ModalBox>
                </Fullscreen>
            ) : null}
        </div>
    );
};

export default Modal;
