import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SharedLayout } from './SharedLayout/SharedLayout';
import { current } from "redux/authOperations";
import { getAuth } from "redux/selectors";
import { Loader } from "./Loader/Loader";
import { PublicRoute } from "./PublicRoute/PublicRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
// import { Navigate } from "react-router-dom";

const Home = lazy(() => import('../pages/HomePage/HomePage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'))
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'))
const Phonebook = lazy(() => import('../components/Phonebook/Phonebook'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage')) 

export const App = () => {
  const dispatch = useDispatch();
  const { isLoadingUser } = useSelector(getAuth);

  useEffect(() => {
    dispatch(current())
  }, [dispatch])

  return (
    <>
      {isLoadingUser ? <Loader /> :
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/contacts" element={<PrivateRoute><Phonebook /></PrivateRoute>} />
          <Route path="*" element={<NotFoundPage />} />
          {/* <Route path="*" element={<Navigate to="/" replace={true} />} /> */}
        </Route>
      </Routes>
      }
    </>
    
  );
};