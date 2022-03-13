import { Outlet, Navigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { LoginState } from 'States/LoginState';
import * as ROUTES from './routes';

export function PrivateRoute() {
  const [IsLogin, setIsLogin] = useRecoilState(LoginState);

  return IsLogin ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
}

export function IsUserRedirect() {
  const [IsLogin, setIsLogin] = useRecoilState(LoginState);

  return IsLogin === false ? <Outlet /> : <Navigate to={ROUTES.LANDING} />;
}
