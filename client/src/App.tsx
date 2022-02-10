import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global-style';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Blindboard from './pages/Blindboard/Blindboard';
import Writing from './pages/Writing/Writing';
import Detail from './pages/Detail/Detail';
import Mypage from './pages/Mypage/Mypage';
import Notice from './pages/Notice/Notice';
import Error from './pages/Error/Error';
import Loading from './pages/Loading/Loading';
import { PostDB } from 'utils/functions/type';
import instance from 'utils/functions/axios';
import { useEffect, useState } from 'react';

function App() {
	const [postData, setPostData] = useState([]);
	useEffect(() => {
    instance
      .get('/postings')
      .then((res) => setPostData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/blindboard' element={<Blindboard postData={postData} />} />
          <Route path='/writing' element={<Writing />} />
          <Route path='/detail' element={<Detail />} />
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
