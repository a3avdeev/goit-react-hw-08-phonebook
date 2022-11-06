import Phonebook from "./Phonebook/Phonebook"
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from './SharedLayout/SharedLayout';
// import { Navigate } from "react-router-dom";

// const createAsyncComponent = (path) => lazy(() => import(path));

// const Home = createAsyncComponent("../pages/Home/Home");
// const Movies = createAsyncComponent("../pages/Movies/Movies");
// const MovieDetails = createAsyncComponent("../pages/MovieDetails/MovieDetails");
// const Cast = createAsyncComponent("./Cast/Cast");
// const Reviews = createAsyncComponent("./Reviews/Reviews");
// const NotFound = createAsyncComponent("../pages/NotFound/NotFound");

const Home = lazy(() => import('../pages/HomePage/HomePage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'))
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'))
// const Cast = lazy(() => import('../components/Cast/Cast'))
// const Reviews = lazy(() => import('../components/Reviews/Reviews'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage')) 


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<Phonebook />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path="*" element={<Navigate to="/" replace={true} />} /> */}
      </Route>
    </Routes>
  );
};