"use client";

import { Logo, NavItem, NavLink, NavList, SideBarWrapper } from "./styled";

export default function SideBar() {
  const navListData = [
    { title: "Profile", href: "/profile" },
    { title: "Courses", href: "/cources" },
    { title: "Notes", href: "/notes" },
  ];
  
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
    </SideBarWrapper>
  );
}
