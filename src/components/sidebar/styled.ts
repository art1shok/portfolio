import styled from "@emotion/styled";

export const SideBarWrapper = styled.nav`
  width: 285px;
  min-height: 100vh;
  padding: 12px 16px 10px;
  background-color: #141313;
  border-right: 1px solid #504c4c;
`;


export const LogOutButton = styled.button`
  font-size: 20px;
  line-height: 24px;

  margin-left: 10px;
`;

export const Logo = styled.h1`
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: #ff4500;
  margin-bottom: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NavItem = styled.li`
  list-style-type: none;
`;

export const NavLink = styled.a`
  font-size: 20px;
  line-height: 24px;
  color: white;

  cursor: pointer;
  text-decoration: none;
`;