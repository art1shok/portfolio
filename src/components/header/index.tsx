import { Logo, NavItem, NavLink, NavList, SHeader } from "./styled";

export default function Header() {
  const navListData = [
    { title: "Info", href: "/info" },
    { title: "About Us", href: "/about-us" },
    { title: "Notes", href: "/notes" },
    { title: "Login", href: "/login" },
    { title: "Sign Up", href: "/sign-up" },
  ];

  return (
    <SHeader>
      <Logo>Y & P</Logo>
      <NavList>
        {navListData.map((item, idx) => (
          <NavItem key={idx}>
            <NavLink href={item.href}>{item.title}</NavLink>
          </NavItem>
        ))}
      </NavList>
    </SHeader>
  );
}
