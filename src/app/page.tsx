"use client";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "@/redux/store";
import PageWrapper from "@/components/pageWrapper";

export default function Home() {
  return (
    <ReduxProvider store={store}>
      <PageWrapper />
    </ReduxProvider>
  );
}
