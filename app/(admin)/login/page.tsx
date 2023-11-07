"use client";
import { signIn } from "next-auth/react";
import { Button } from "@nextui-org/react";

export default function Login() {
  return (
    <Button onClick={() => signIn("google", { callbackUrl: "/" })}>
      Login with Google
    </Button>
  );
}
