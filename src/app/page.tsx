"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";

import AuthentificatedLayout from "@/components/authentificatedLayout";
import { isAuthenticated } from "@/utils/auth";
import UnauthenticatedLayout from "@/components/unauthenticatedLayout";

export default function Home() {

  return isAuthenticated ? (
    <AuthentificatedLayout>

    </AuthentificatedLayout>
  ) : (
    <UnauthenticatedLayout>Bye</UnauthenticatedLayout>
  );
}
