"use client";

import { NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import {
  UN_AUTHENTICATED_NAVIGATION_LINK,
  AUTHENTICATED_NAVIGATION_LINK,
} from "@/constants/navigation";

export const HeaderToggleMenu = () => {
  const { status } = useSession();

  return (
    <NavbarMenu>
      <NavbarMenuItem>
        <Link
          className="w-full"
          size="lg"
          href={UN_AUTHENTICATED_NAVIGATION_LINK.TOP}
        >
          Top
        </Link>
      </NavbarMenuItem>
      {status === "authenticated" && (
        <NavbarMenuItem>
          <Link
            className="w-full"
            size="lg"
            href={AUTHENTICATED_NAVIGATION_LINK.PROFILE}
          >
            Profile
          </Link>
        </NavbarMenuItem>
      )}
    </NavbarMenu>
  );
};
