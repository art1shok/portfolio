"use client";

import Header from "../header";
import { ContentWrapper, LayoutWrapper } from "./styled";

export default function UnauthenticatedLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <LayoutWrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  );
}
