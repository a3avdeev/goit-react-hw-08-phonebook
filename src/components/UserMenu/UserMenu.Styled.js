import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;

  padding: 16px 24px;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border-radius: 4px;
  border: 2px dotted #ff1493;
  text-decoration: none;
  color: black;
  font-weight: bold;

  &.active {
    background-color: #ff1493;
    color: #fff;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #0000cd;
    border: 2px dotted #0000cd;
  }
`;

export const UserMenuStyled = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: #800000;
  font-weight: bold;
  font-size: 1.2em;

  & div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    & button {
      padding: 6px;
      max-width: 140px;
      font-size: 0.75em;
      border: 1px solid black;
      border-radius: 4px;

      &:hover,
      :focus {
        background-color: #00bfff;
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
`;
