import React from "react";
import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

export function PizzaInput(
  props: { name: string; label: string } & InputProps
) {
  return (
    <FormControl name={props.name} my={4}>
      <FormLabel fontWeight="bold" htmlFor={props.name}>
        {props.label}
      </FormLabel>
      <Input id={props.name} placeholder={props.label} {...props} />
    </FormControl>
  );
}

export default PizzaInput;
