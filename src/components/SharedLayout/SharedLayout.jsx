import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { Loader } from '../Loader/Loader';
import { HeaderStyled, NavItem } from './SharedLayout.Styled'

export const SharedLayout = () => {
    return (
        <>
            <HeaderStyled>
                <nav>
                    <NavItem to="/" end>Home</NavItem>
                    <NavItem to="register">Register</NavItem>
                    <NavItem to="login">Login</NavItem>
                </nav>
            </HeaderStyled>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
};