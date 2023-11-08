import { getServerSession } from "next-auth/next";
import { NavbarItem, Link, Button } from "@nextui-org/react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SignOutButton } from "@/features/auth/components/SignOutButton";
import {
  AUTHENTICATED_NAVIGATION_LINK,
  UN_AUTHENTICATED_NAVIGATION_LINK,
} from "@/constants/navigation";

export const HeaderMenu: React.FC = async () => {
  // Client sideのセッションデータの取得
  // const { status } = useSession();
  const session = await getServerSession(authOptions);

  // if (status === "loading") return <Spinner />;

  return (
    <>
      {session ? (
        <>
          <NavbarItem>
            <Link href={UN_AUTHENTICATED_NAVIGATION_LINK.TOP}>Top</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={AUTHENTICATED_NAVIGATION_LINK.PROFILE}>Profile</Link>
          </NavbarItem>
          <NavbarItem>
            <SignOutButton />
          </NavbarItem>
        </>
      ) : (
        <>
          <NavbarItem>
            <Link href={UN_AUTHENTICATED_NAVIGATION_LINK.TOP}>Top</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={UN_AUTHENTICATED_NAVIGATION_LINK.LOGIN}>Login</Link>
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
