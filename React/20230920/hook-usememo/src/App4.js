import { useContext, createContext } from "react";
import HelloLicat from "./components/HelloLicat";

// const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
    return (
        <HelloLicat />
    );
};


export default App;