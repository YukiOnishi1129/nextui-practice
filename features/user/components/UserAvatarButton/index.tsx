import { Avatar, Button } from "@nextui-org/react";

type Props = {
  image?: string | null;
};

export const UserAvatarButton: React.FC<Props> = ({ image }) => {
  return (
    <Button isIconOnly variant="light">
      <Avatar src={image || ""} />
    </Button>
  );
};
