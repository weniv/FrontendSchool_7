import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

export default function NewAppleModal({ isOpen, onAdd, onClose }) {

    // 당도 상태 관리 
    const [appleText, setAppleText] = useState("");

    // 당도를 입력완료 했는지 판단하는 상태 관리
    const [isDone, setIsDone] = useState(false);

    return (
        <Modal isOpen={isOpen} style={{
            content: {
                width: "400px",
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
            }
        }}>
            {isDone &&
                <>
                    <h2>추가가 완료되었습니다!</h2>
                    <button onClick={onClose}>닫기 :)</button>
                </>
            }
            {!isDone &&
                <>
                    <h2>새로운 사과를 추가해보세요!</h2>
                    <label>
                        사과 당도 :
                        <input
                            type="text"
                            style={{
                                borderRadius: "5px",
                                border: "1px solid black",
                                width: "100%",
                                marginTop: "10px",
                                padding: "5px",
                            }}
                            value={appleText}
                            onChange={(event) => setAppleText(event.target.value)}
                        />
                    </label>
                    <button
                        style={{
                            borderRadius: "10px",
                            marginTop: "25px",
                            backgroundColor: "teal",
                            padding: "10px",
                            width: "100%",
                            fontSize: "17px",
                            color: "white",
                            fontWeight: "bold"
                        }}
                        onClick={
                            () => {
                                onAdd(appleText);
                                setIsDone(true);
                            }
                        }
                    >추가하기</button>
                </>}
        </Modal>
    )
}
