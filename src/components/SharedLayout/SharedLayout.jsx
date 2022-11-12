import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { Loader } from '../Loader/Loader';
import { UserMenu } from '../UserMenu/UserMenu';

export const SharedLayout = () => {
    return (
        <>
            
            <UserMenu />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
};