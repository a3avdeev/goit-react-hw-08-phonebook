import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from 'redux/authOperations';
// import { getAuth } from 'redux/selectors';
import { getIsLoggedIn, getUser } from 'redux/selectors';
import { HeaderStyled, NavItem, UserMenuStyled } from './UserMenu.Styled'

export const UserMenu = () => {

    const isLoggedIn = useSelector(getIsLoggedIn);
    const name = useSelector(getUser);
    // const { user, isLoggedIn } = useSelector(getAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(logout())
        navigate('/')
    };

    return (
        <HeaderStyled>
            <>
                {isLoggedIn ?
                    <UserMenuStyled>
                        <NavItem to="/" end>Home</NavItem>
                        <NavItem to='/contacts'>Contacts</NavItem>
                        <span>{`Hello, ${name}`}</span>
                        <button type='button' onClick={onLogout}>Logout</button>
                    </UserMenuStyled> :
                    <UserMenuStyled>
                        <NavItem to="/" end>Home</NavItem>
                        <NavItem to='/register'>Register</NavItem>
                        <NavItem to='/login'>Login</NavItem>
                    </UserMenuStyled>
                }
            </>
        </HeaderStyled>
    );
}

