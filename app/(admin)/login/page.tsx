"use client";
import { signIn } from "next-auth/react";
import { Button } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";

export default function Login() {
  return (
    <>
      <Button
        startContent={<FcGoogle />}
        variant="bordered"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        Login with Google
      </Button>
      <Button
        startContent={<GrGithub />}
        variant="bordered"
        onClick={() => signIn("github", { callbackUrl: "/" })}
      >
        Login with Github
      </Button>
    </>
  );
}
