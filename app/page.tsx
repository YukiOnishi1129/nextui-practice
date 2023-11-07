import { getServerSession } from "next-auth/next";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session && (
        <div>
          <p>Signed in as {session.user && session.user.name}</p>
        </div>
      )}
      {!session && (
        <div>
          <p>Not signed</p>
        </div>
      )}
      <Button color="primary" size="lg">
        Click me
      </Button>
      <Chip>Chip</Chip>
    </div>
  );
}
