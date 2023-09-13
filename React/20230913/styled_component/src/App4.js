import React from "react";
import styled from "styled-components";

const ContentOne = styled.div`
    margin: 40px;
`;

const ContentTwo = styled.div`
    color:red;
`;

const ContentThree = styled(ContentTwo)`
    border: 1px solid black;
`

//내가만든 컴포넌트
function MyComponent(props) {
    return(
        // className이 있어야 styled-componets기능을 이용해 확장가능!
        <div className={props.className}>이것은 새로운 컴포넌트여!</div>
    )
}
// 내가만든 컴포넌트 확장하기!
const MyComponentTwo = styled(MyComponent)`
    background-color: blue;
`

function App() {
    return (
        <div>
            <ContentOne>hello world</ContentOne>
            <ContentTwo>hello world</ContentTwo>
            <ContentThree>hello world</ContentThree>
            <MyComponentTwo/>
        </div>
    );
}

export default App;