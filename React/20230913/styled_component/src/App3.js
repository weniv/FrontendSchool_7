import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
    margin: 40px;
`;

// 이렇게도 할 수 있음
// const callbackFnc = (props) => (props.name === 'hello'? 'red' : 'black')
// const ContentH2 = styled.h2`
//     color: ${callbackFnc};
//     width: 200px;
//     margin: 0 auto;
//     text-align: center;
// `;

const ContentH2 = styled.h2`
    color: ${(props) => (props.name === 'hello'? 'red' : 'black')};
    // props.name === 'hello'가 true로 실행되면
    // color : 'red' 이렇게됨
    width: 200px;
    margin: 0 auto;
    text-align: center;
`;


const App = () => {

    return (
        <ContentDiv>
            <ContentH2 name="hello">Q&A</ContentH2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
                corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
                aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
                Nemo, ullam.
            </p>
        </ContentDiv>
    );
};

export default App;