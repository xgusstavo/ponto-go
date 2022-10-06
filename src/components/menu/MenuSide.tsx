import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { SelectClient } from "../buttonClient/SelectClient";

export function MenuSide() {
  return (
    <Flex
      direction={"column"}
      w={220}
      top={0}
      h={"100vh"}
      justifyContent={"space-between"}
      boxShadow={"dark-lg"}
      position={"fixed"}
      zIndex={0}
      bg={"white"}
    >
      <Flex direction={"column"} pt={5} mt={100} zIndex={0} gap={5}>
        <SelectClient
          color={"#858585"}
          menu={"Administradores"}
          icon={"admin.svg"}
          border={"0"}
          background={"white"}
        />
        <SelectClient
          color={"primary.100"}
          menu={"Clientes"}
          icon={"client.svg"}
          border={"4px"}
          background={"primary.300"}
        />
        <SelectClient
          color={"#858585"}
          menu={"Colaboradores"}
          icon={"colabor.svg"}
          border={"0"}
          background={"white"}
        />
      </Flex>
      <Button
        bg={"primary.100"}
        borderRadius={0}
        _hover={{ bg: "primary.200" }}
      >
        <IoMdArrowBack color={"white"} />
      </Button>
    </Flex>
  );
}
