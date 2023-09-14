import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Link to="/"> home </Link>
        <Link to="/one"> one </Link>
        <Link to="/two"> two </Link>
        <Link to="/three"> three </Link>
        <Link to="/blog/1"> four_1 </Link>
        <Link to="/blog/2"> four_2 </Link>
        <Link to="/blog/3"> four_3 </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
        <Route path="/blog/:id" element={<Blog />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One({name}){
  return <h1>{name} world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

function Blog(){
    const location = useLocation();
    // const params = useParams()
    const {id} = useParams()
    // useLocation
    console.log(location)
    // useParams()
    // console.log(params)
    console.log(id)
    // useParams를 이용해 blog/:id 에서 id부분이 {id}로 들어가게 할 수 있다~!
    return <h1>hello Blog {id}번 게시글입니다.</h1>
}

export default App;