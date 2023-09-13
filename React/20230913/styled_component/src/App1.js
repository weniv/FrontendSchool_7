
import { createGlobalStyle } from "styled-components"
import Example from "./Components/Example"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    span {
        color: red;
        font-size: 12px;
    }

    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        border : none;
        cursor : pointer;
    }

    * {
    box-sizing: border-box;
    }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example/>
    </>
  );
}

export default App;