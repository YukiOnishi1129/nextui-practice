"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  Link,
} from "@nextui-org/react";
import { UN_AUTHENTICATED_NAVIGATION_LINK } from "@/constants/navigation";

export const HeaderLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar maxWidth="xl" isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          //   className="sm:hidden"
        />
        <NavbarBrand>
          <Link href={UN_AUTHENTICATED_NAVIGATION_LINK.TOP}>
            <h1 className="font-bold text-inherit">SAMPLE</h1>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      {children}
    </Navbar>
  );
};
