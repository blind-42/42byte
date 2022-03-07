import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Board from './pages/Board/Board';
import Search from './pages/Search/Search';
import Writing from './pages/Writing/Writing';
import Detail from './pages/Detail/Detail';
import Mypage from './pages/Mypage/Mypage';
import Notice from './pages/Notice/Notice';
import Error from './pages/Error/Error';
import Admin from 'pages/Admin/Admin';
import { GlobalStyle } from './styles/global-style';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GlobalStyle />
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/board" element={<Board />} />
              <Route path="/search" element={<Search />} />
              <Route path="/writing" element={<Writing />} />
              <Route path="/detail" element={<Detail />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/error" element={<Error />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Router>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}
