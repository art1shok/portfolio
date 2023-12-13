"use client";
import { isAuthenticated } from "@/utils/auth";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

const Profile = () => {
  useLayoutEffect(() => {
    const isAuth = isAuthenticated;
    if (!isAuth) {
      redirect("/");
    }
  }, []);

  return (
    <main>
      <div>
        <h1>Profile</h1>
      </div>
    </main>
  );
};

export default Profile;
