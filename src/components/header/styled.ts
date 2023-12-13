import styled from "@emotion/styled";

export const SHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px 12px;
  background-color: #010100;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LoginButton = styled.button`
  font-size: 20px;
  line-height: 24px;

  margin-left: 10px;
`;

export const Logo = styled.h1`
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: #ff4500;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const NavItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled.a`
  font-size: 20px;
  line-height: 24px;
  color: white;

  cursor: pointer;
  text-decoration: none;
`;
