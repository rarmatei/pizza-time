import React from "react";
import { Image, Stack, Text } from "@chakra-ui/react";

export function PizzaImage({
  imageSrc,
  description,
}: {
  imageSrc: string;
  description: string;
}) {
  return (
    <Stack alignItems="center">
      <Image maxW="100px" maxH="100px" src={imageSrc}></Image>
      <Text color="black">"{description}"</Text>
    </Stack>
  );
}

export default PizzaImage;
