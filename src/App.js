import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Main/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import "./App.css"
import MessagesContainer from './Components/Main/Messages/MessagesContainer';
import UsersContainer from './Components/Main/Users/UsersContainer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Login from './Components/Login/Login';
import { authThunk } from './store/authSlice';
import News from './Components/Main/News/News';
import Preloader from './supporting/Preloader/Preloader';


const App = () => {


  const { isAuth, isLoading } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(authThunk());


  }, [dispatch])

  if (isLoading) {
    return <Preloader />
  }

  if (isAuth) {

    return (

      <div className='app'>
        <Header />
        <Navbar />

        <main className="main">
          <Routes>


            <Route path="/" element={<Profile />} />
            <Route path="/profile/" element={<Profile />} />
            <Route path="/messages" element={<MessagesContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/profile/:id" element={<Profile />} />

          </Routes>


        </main>


      </div>

    );
  } else {
    return (
      <div className="app_login">
        <Login />

      </div>)
  }
}

export default App;
