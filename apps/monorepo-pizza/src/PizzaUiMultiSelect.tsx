import React from "react";
import { Checkbox, FormControl, FormLabel, Stack } from "@chakra-ui/react";

export function PizzaMultiSelect(props: {
  name: string;
  label: string;
  options: { label: string; value: string }[];
}) {
  return (
    <FormControl name={props.name} my={4}>
      <FormLabel fontWeight="bold" htmlFor={props.name}>
        {props.label}
      </FormLabel>
      <Stack pl={6} mt={1} spacing={1}>
        {props.options.map((option) => (
          <Checkbox key={option.value} name={props.name} value={option.value}>
            {option.label}
          </Checkbox>
        ))}
      </Stack>
    </FormControl>
  );
}

export default PizzaMultiSelect;
