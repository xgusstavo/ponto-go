import { Flex, Heading, VStack, Text, HStack } from "@chakra-ui/react";
import { IoTrash } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";

interface CardProps {
  name: string;
  email: string;
  number: string;
}

export function Card({ name, email, number }: CardProps) {
  return (
    <Flex
      bg={"gray.100"}
      w={350}
      p={5}
      borderRadius={15}
      direction={"column"}
      gap={5}
      pt={7}
    >
      <HStack color={"primary.100"} fontSize={16.5}>
        <IoTrash />
        <AiFillEdit />
      </HStack>
      <VStack align={"flex-start"}>
        <Heading fontSize={"lg"} fontWeight={700} pb={2}>
          {name}
        </Heading>
        <Text fontSize={"sm"} fontWeight={400}>
          {email}
        </Text>
        <Text fontSize={"sm"} fontWeight={400}>
          {number}
        </Text>
      </VStack>
    </Flex>
  );
}
