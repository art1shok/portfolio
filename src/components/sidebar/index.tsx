"use client";

import { useDispatch } from "react-redux";
import { LogOutButton, Logo, NavItem, NavLink, NavList, SideBarWrapper } from "./styled";
import { setIsAuthenticated } from "@/redux/slices/user/user.slice";

export default function SideBar() {
  const dispatch = useDispatch();

  const navListData = [
    { title: "Profile", href: "/profile" },
    { title: "Courses", href: "/cources" },
    { title: "Notes", href: "/notes" },
  ];

  const handleLogOut = () => {
    dispatch(setIsAuthenticated(false))
  };

  return (
    <SideBarWrapper>
      <Logo>Y & P</Logo>
      <NavList>
        {navListData.map((item, idx) => (
          <NavItem key={idx}>
            <NavLink href={item.href}>{item.title}</NavLink>
          </NavItem>
        ))}
      </NavList>
      <LogOutButton onClick={handleLogOut}>Log Out</LogOutButton>
    </SideBarWrapper>
  );
}
