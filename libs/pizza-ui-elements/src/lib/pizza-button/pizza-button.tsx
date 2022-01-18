import { Button } from '@chakra-ui/react';
import './pizza-button.module.css';

export interface PizzaButtonProps {
  disabled: boolean;
  label: string;
}

export function PizzaButton(props: PizzaButtonProps) {
  return (
    <Button disabled={props.disabled} colorScheme="teal">
      {props.label}
    </Button>
  );
}

export default PizzaButton;
