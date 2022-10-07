import { Flex, Image } from "@chakra-ui/react";

interface SelectClientProps {
  icon: string;
  menu: string;
  color: string;
  border: string;
  background: string;
}

export function SelectClient({
  icon,
  menu,
  color,
  border,
  background,
}: SelectClientProps) {
  return (
    <Flex
      color={color}
      w={"100%"}
      borderRadius={0}
      p={2}
      flexDirection={"row"}
      gap={3}
      pl={5}
      borderRight={border}
      bg={background}
      transition={".3s"}
      _hover={{ bg: "gray.300", cursor: "pointer", borderRight: "4px" }}
    >
      <Image src={icon} alt="icon" />
      {menu}
    </Flex>
  );
}
