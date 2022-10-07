import { Box, useMediaQuery } from "@chakra-ui/react";

// This box is used to be under the menu that has a fixed position, so it occupies the space of the menu

export function BoxFixed() {
  const [isLargerThan750] = useMediaQuery("(min-width: 750px)");
  return (
    <div>
      <Box
        display={isLargerThan750 ? "flex" : "none"}
        width={220}
        mr={10}
      ></Box>
    </div>
  );
}
