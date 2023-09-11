import Hello from "./Components/Hello";
import HelloProps from "./Components/HelloProps";
import Time from "./Components/Time";
import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";

// 모듈 문법의 특징
// import test, { test2 } from "./Components/test";

function App() {
  // test();
  // test2();

  return (
    <div>
      <Hello name="gary" />
      <Time />
      <HelloProps name="jaehyun" age={15} someFunc={() => 'aswesome!!!'} someJSX={<img src="https://picsum.photos/id/237/200/300" />} someArr={[1, 2, 3, 4]} someObj={{ one: 1 }} />
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue" />
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" />
    </div>
  );
}

export default App;