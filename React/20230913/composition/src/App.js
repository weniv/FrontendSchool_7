import styled from "styled-components";

// 변하는 부분과 변하지 않는 부분 구분하여 추출하기
const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
`;


const Card = (props) => {
  console.log(props.children)// 콘솔에서 props로 전달된 자식요소 컴포넌트를 확인할 수 있습니다
  return (
    <CardDiv className={props.className}>
      <h3>{props.value}</h3>
      <hr />
      {/* 
      props.children은
      <Card className="setting" value="챌린지 설정">
        <SettingCard/>
      </Card> 
      형식으로 들어온 자식요소 <SettingCard/>를 의미합니다
      */}
      {props.children}
    </CardDiv>
  );
};

const SettingCard = () => {
  return (
    <>
      <button>초기화</button>
      <button>저장하기</button>
    </>
  );
};

const ShareCard = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
        eveniet, laudantium, deleniti autem sequi molestias magni quia, aliquam
        et praesentium nostrum dolores culpa cupiditate unde doloremque labore
        beatae accusamus.
      </p>
      <div>
        <button>이미지 저장</button>
        <button>트위터</button>
        <button>페이스북</button>
      </div>
    </>
  );
};

function App() {
  console.log(<Card className="setting" value="챌린지 설정">
  <SettingCard/>
</Card>)
  return (
    <>
      <Card className="setting" value="챌린지 설정">
        {/* Card컴포넌트에 <SettingCard/>를 자식컴포넌트로 넣어주기~! */}
        {/* 결과적으로 Card컴포넌트와 SettingCard컴포넌트를 합성하여 사용했다고 볼 수 있다! */}
        <SettingCard/>
      </Card>
      <Card className="share" value="서비스 공유하기">
        <ShareCard/>
      </Card>
    </>
  );
}

export default App;