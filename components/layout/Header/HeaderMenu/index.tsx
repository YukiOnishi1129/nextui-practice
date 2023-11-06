import { NavbarItem, Link, Button } from "@nextui-org/react";

export const HeaderMenu: React.FC = () => {
  return (
    <>
      <NavbarItem>
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="shadow">
          Sign up
        </Button>
      </NavbarItem>
    </>
  );
};
