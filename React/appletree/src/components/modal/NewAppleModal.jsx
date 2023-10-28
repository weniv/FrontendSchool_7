import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

export default function NewAppleModal({ isOpen }) {
    return (
        <Modal isOpen={isOpen}>
            <>
                <h2>새로운 사과를 추가해보세요!</h2>
                <label>
                    사과 당도 :
                    <input type="text" style={{
                        borderRadius: "5px",
                        border: "1px solid black",
                        width: "100%",
                        marginTop: "10px",
                        padding: "5px",
                    }} />
                </label>
                <button>추가하기</button>
            </>
        </Modal>
    )
}
