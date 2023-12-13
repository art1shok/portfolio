import Footer from "@/components/footer";
import Header from "@/components/header";
import { isAuthenticated } from "@/utils/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const Admin = () => {
  const isAuth = isAuthenticated;

  if (!isAuth) {
    redirect("/");
  }

  return (
    <>
      <Header />
      <div>
        <h1>Admin Page</h1>
        <Link href="/">Link to home</Link>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
