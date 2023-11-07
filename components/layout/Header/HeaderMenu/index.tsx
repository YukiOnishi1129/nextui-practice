"use client";

import { useSession, signOut } from "next-auth/react";
import { NavbarItem, Link, Button } from "@nextui-org/react";

export const HeaderMenu: React.FC = () => {
  // Client sideのセッションデータの取得
  const { status } = useSession();

  console.log(status);

  if (status === "loading") return <div>ローディング</div>;

  return (
    <>
      {status === "authenticated" ? (
        <>
          <NavbarItem>
            <Link href="/">Top</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/profile">Profile</Link>
          </NavbarItem>
          <NavbarItem>
            <Button onClick={() => signOut()} variant="ghost">
              Sign out
            </Button>
          </NavbarItem>
        </>
      ) : (
        <>
          <NavbarItem>
            <Link href="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="shadow">
              Sign up
            </Button>
          </NavbarItem>
        </>
      )}
    </>
  );
};
