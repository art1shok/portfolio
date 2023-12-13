import { useDispatch } from "react-redux";
import {
  LoginButton,
  Logo,
  LogoWrapper,
  NavItem,
  NavLink,
  NavList,
  SHeader,
} from "./styled";
import { setIsAuthenticated } from "@/redux/slices/user/user.slice";

export default function Header() {
  const dispatch = useDispatch();

  const navListData = [
    { title: "Info", href: "/info" },
    { title: "About Us", href: "/about-us" },
    { title: "Notes", href: "/notes" },
  ];

  const handleLogin = () => {
    dispatch(setIsAuthenticated(true))
  };

  return (
    <SHeader>
      <LogoWrapper>
        <Logo>Y & P</Logo>
        <LoginButton onClick={handleLogin}>Login</LoginButton>
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
