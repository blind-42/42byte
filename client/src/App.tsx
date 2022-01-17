import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global-style';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Blindboard from './pages/Blindboard/Blindboard';
import Writing from './pages/Writing/Writing';
import Post from './pages/Post/Post';
import Mypage from './pages/Mypage/Mypage';
import Notice from './pages/Notice/Notice';
import Error from './pages/Error/Error';
import Loading from './pages/Loading/Loading';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/blindboard' element={<Blindboard />} />
          <Route path='/writing' element={<Writing />} />
          <Route path='/post' element={<Post />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/notice' element={<Notice />} />
          <Route path='/error' element={<Error />} />
          <Route path='/loading' element={<Loading />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
