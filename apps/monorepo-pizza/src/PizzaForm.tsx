import React from "react";
import { Box } from "@chakra-ui/react";

export const PizzaForm = React.forwardRef((props: any, ref: any) => {
  return (
    <Box
      as="form"
      ref={ref}
      onChange={props.onChange}
      p={4}
      borderWidth="1px"
      rounded="lg"
      shadow="1px 1px 3px rgba(0,0,0,0.3)"
    >
      {props.children}
    </Box>
  );
});

export default PizzaForm;
