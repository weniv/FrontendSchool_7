import InputComponent from "./components/InputComponent";
import SomethingComponent from "./components/SomethingComponent";
import useMouseLocation from "./Hooks/useMouseLocation";
import useScroll from "./Hooks/useScroll";

function App() {

  // const mouseLocation = useMouseLocation();
  const isBottom = useScroll();
  console.log(isBottom);


  return (
    <div style={{ height: 3000 }}>
      {/* <div style={{ height: 100, width: 100, backgroundColor: mouseLocation.y > 100 ? "royalblue" : "hotpink" }}></div> */}
      <InputComponent />
      <SomethingComponent />
    </div>
  );
}
export default App;
