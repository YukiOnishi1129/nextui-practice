"use client";
import { signOut } from "next-auth/react";
import { Button } from "@nextui-org/react";
import { UN_AUTHENTICATED_NAVIGATION_LINK } from "@/constants/navigation";

export const SignOutButton = () => (
  <Button
    onClick={() =>
      signOut({ callbackUrl: UN_AUTHENTICATED_NAVIGATION_LINK.LOGIN })
    }
    variant="ghost"
  >
    Sign out
  </Button>
);
