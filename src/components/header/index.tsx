import {
  Logo,
  LogoWrapper,
  NavItem,
  NavLink,
  NavList,
  SHeader,
} from "./styled";

export default function Header() {

  const navListData = [
    { title: "Info", href: "/info" },
    { title: "About Us", href: "/about-us" },
    { title: "Notes", href: "/notes" },
  ];

  return (
    <SHeader>
      <LogoWrapper>
        <Logo>ME</Logo>
      </LogoWrapper>
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
