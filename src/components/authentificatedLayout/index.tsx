"use client";

import SideBar from "../sidebar";
import { LayoutWrapper, ContentWrapper } from "./styled";

export default function AuthentificatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutWrapper>
      <SideBar />
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  );
}
