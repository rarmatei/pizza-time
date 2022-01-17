import React from "react";

import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  useRadio,
  useRadioGroup,
  RadioProps,
} from "@chakra-ui/react";

export function PizzaRadioButtons(props: {
  label: string;
  name: string;
  options: any[];
  onChange?: (nextValue: string) => void;
}) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    onChange: props.onChange,
  });

  const group = getRootProps();

  return (
    <FormControl name={props.name} my={4}>
      <FormLabel fontWeight="bold">{props.label}</FormLabel>
      <HStack {...group}>
        {props.options.map((option) => {
          const radio = getRadioProps({ value: option.value });
          return (
            <RadioCard key={option.value} {...radio}>
              {option.image}
            </RadioCard>
          );
        })}
      </HStack>
    </FormControl>
  );
}

function RadioCard(props: RadioProps) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "blue.50",
          borderColor: "blue.50",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default PizzaRadioButtons;
