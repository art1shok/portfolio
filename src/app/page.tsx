"use client";
import { Global } from "@emotion/react";
import PageWrapper from "@/components/pageWrapper";
import { GlobalStyles } from "@/styles/globals";

export default function Home() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <PageWrapper />
    </>
  );
}
