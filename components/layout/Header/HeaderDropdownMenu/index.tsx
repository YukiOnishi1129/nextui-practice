"use client";

import {
  Avatar,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";
import {
  UN_AUTHENTICATED_NAVIGATION_LINK,
  AUTHENTICATED_NAVIGATION_LINK,
} from "@/constants/navigation";

type Props = {
  children: React.ReactNode;
};

export const HeaderDropdownMenu: React.FC<Props> = ({ children }) => {
  return (
    <Dropdown>
      <DropdownTrigger>{children}</DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="profile"
          href={AUTHENTICATED_NAVIGATION_LINK.PROFILE}
        >
          profile
        </DropdownItem>
        <DropdownItem
          key="signout"
          className="text-danger"
          color="danger"
          onClick={() =>
            signOut({ callbackUrl: UN_AUTHENTICATED_NAVIGATION_LINK.LOGIN })
          }
        >
          Sign out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
