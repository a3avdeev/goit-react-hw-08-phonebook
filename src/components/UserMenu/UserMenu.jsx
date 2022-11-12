import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from 'redux/authOperations';
import { getAuth } from 'redux/authSlice';
import { HeaderStyled, NavItem } from './UserMenu.Styled'

export const UserMenu = () => {
    const {user, isLoggedIn } = useSelector(getAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogoutClick = () => {
        dispatch(logout())
        navigate('/')
    }

    
    console.log(user)

    return (
        <HeaderStyled>
            <nav >
                {isLoggedIn &&
                    <>
                        <NavItem to="/" end>Home</NavItem>
                        <NavItem to='/contacts'>Contacts</NavItem>
                    </>
                    }
                {isLoggedIn ?
                    <div >
                        <p >{`Hello, ${user}`}</p>
                        
                        <button type='button' onClick={onLogoutClick}>Log Out</button>
                    </div> :
                    <div>
                        <NavItem to="/" end>Home</NavItem>
                        <NavItem to='/register'>Register</NavItem>
                        <NavItem to='/login'>Login</NavItem>
                    </div>
                }
            </nav>
        </HeaderStyled>
    );
}

export default UserMenu
