"use client";

import AuthentificatedLayout from "@/components/authentificatedLayout";
import UnauthenticatedLayout from "@/components/unauthenticatedLayout";
import { useAppSelector } from "@/redux/hooks";

export default function PageWrapper() {
  const { isAuthenticated } = useAppSelector((state) => state.user);
  return isAuthenticated ? (
    <AuthentificatedLayout>Bye</AuthentificatedLayout>
  ) : (
    <UnauthenticatedLayout>Hi</UnauthenticatedLayout>
  );
}
