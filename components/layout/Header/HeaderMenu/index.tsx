import { getServerSession } from "next-auth/next";
import { NavbarItem, Link, Button } from "@nextui-org/react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UN_AUTHENTICATED_NAVIGATION_LINK } from "@/constants/navigation";
import { HeaderDropdownMenu } from "@/components/layout/Header/HeaderDropdownMenu";
import { UserAvatarButton } from "@/features/user/components/UserAvatarButton";

export const HeaderMenu = async () => {
  // Client sideのセッションデータの取得
  // const { status } = useSession();
  const session = await getServerSession(authOptions);

  // if (status === "loading") return <Spinner />;

  return (
    <>
      {session ? (
        <>
          {/* <NavbarItem className="hidden sm:inline-block">
            <Link href={UN_AUTHENTICATED_NAVIGATION_LINK.TOP}>Top</Link>
          </NavbarItem> */}
          {/* <NavbarItem className="hidden sm:inline-block">
            <Link href={AUTHENTICATED_NAVIGATION_LINK.PROFILE}>Profile</Link>
          </NavbarItem> */}
          {/* <NavbarItem className="hidden sm:inline-block">
            <SignOutButton />
          </NavbarItem> */}
          <NavbarItem>
            <HeaderDropdownMenu>
              <UserAvatarButton image={session.user?.image} />
            </HeaderDropdownMenu>
          </NavbarItem>
        </>
      ) : (
        <>
          {/* <NavbarItem className="hidden sm:inline-block">
            <Link href={UN_AUTHENTICATED_NAVIGATION_LINK.TOP}>Top</Link>
          </NavbarItem> */}
          <NavbarItem className="hidden sm:inline-block">
            <Link href={UN_AUTHENTICATED_NAVIGATION_LINK.LOGIN}>Login</Link>
          </NavbarItem>
          <NavbarItem className="hidden sm:inline-block">
            <Button as={Link} color="primary" href="#" variant="shadow">
              Sign up
            </Button>
          </NavbarItem>
        </>
      )}
    </>
  );
};
