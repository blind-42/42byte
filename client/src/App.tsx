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
import Error from './pages/Error/Error';
import * as ROUTES from './utils/functions/routes';
import { IsUserRedirect, PrivateRoute } from './utils/functions/routerRestrict';
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
              <Route path={ROUTES.LANDING} element={<Main />} />
              <Route path={ROUTES.LOGIN} element={<IsUserRedirect />}>
                <Route path="/login" element={<Login />} />
              </Route>
              <Route path={ROUTES.BOARD} element={<PrivateRoute />}>
                <Route path="/board" element={<Board />} />
              </Route>
              <Route path={ROUTES.SEARCH} element={<PrivateRoute />}>
                <Route path="/search" element={<Search />} />
              </Route>
              <Route path={ROUTES.WRITING} element={<PrivateRoute />}>
                <Route path="/writing" element={<Writing />} />
              </Route>
              <Route path={ROUTES.DETAIL} element={<PrivateRoute />}>
                <Route path="/detail" element={<Detail />} />
              </Route>
              <Route path={ROUTES.MYPAGE} element={<PrivateRoute />}>
                <Route path="/mypage" element={<Mypage />} />
              </Route>
              <Route path="/error" element={<Error />} />
            </Routes>
          </Router>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}
