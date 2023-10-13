import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Header from './components/Header';
import { useAuthContext } from './hooks/useAuthContext';


function App() {

  const { isAuthReady, user } = useAuthContext();

  return (
    <div className="App">
      {isAuthReady ?
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate replace={true} to="/login" />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate replace={true} to='/' />} />
            <Route path='/signup' element={!user ? <Signup /> : <Navigate replace={true} to='/' />} />
          </Routes>
        </BrowserRouter> : "Loading ..."
      }
    </div>
  );
}

export default App;
