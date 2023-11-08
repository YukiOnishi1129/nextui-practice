import React from "react";
import { NavbarContent } from "@nextui-org/react";
import { HeaderLayout } from "@/components/layout/Header/HeaderLayout/";
import { HeaderMenu } from "@/components/layout/Header/HeaderMenu";
import { HeaderToggleMenu } from "@/components/layout/Header/HeaderToggleMenu";

export const Header = () => (
  <HeaderLayout>
    <NavbarContent justify="end">
      <HeaderMenu />
    </NavbarContent>
    <HeaderToggleMenu />
  </HeaderLayout>
);
