import React, { useRef, useState } from "react";
import styles from "./app.module.css";
import { Button, ButtonGroup, Heading } from "@chakra-ui/react";
import { calculatePercentageComplete } from "./util";
import PizzaRadioButtons from "./PizzaRadioButtons";
import PizzaImage from "./PizzaImage";
import PizzaForm from "./PizzaForm";
import PizzaInput from "./PizzaInput";
import PizzaMultiSelect from "./PizzaUiMultiSelect";
import PizzaProgressMeter from "./PizzaProgressMeter";

export function App() {
  const formRef = useRef();
  const options = [
    {
      value: "slice",
      image: (
        <PizzaImage
          imageSrc={process.env.PUBLIC_URL + "slice.png"}
          description="The Single Library"
        />
      ),
    },
    {
      value: "half",
      image: (
        <PizzaImage
          imageSrc={process.env.PUBLIC_URL + "half.png"}
          description="The 50% affected"
        />
      ),
    },
    {
      value: "full",
      image: (
        <PizzaImage
          imageSrc={process.env.PUBLIC_URL + "full.png"}
          description="The Full Monorepo"
        />
      ),
    },
  ];

  const toppings = [
    { label: "🍄 Mushrooms.json", value: "mushrooms" },
    { label: "🧀 Generated Cheese", value: "cheese" },
    { label: "🐟 Cached Tuna", value: "tuna" },
    { label: "🍍 Dependency Graph Pineapple", value: "pineapple" },
  ];

  const [percentageComplete, setPercentageComplete] = useState(0);

  const onFormChange = () => {
    const percentage = calculatePercentageComplete(formRef.current);
    setPercentageComplete(percentage);
  };

  return (
    <div className={styles.app}>
      <PizzaForm ref={formRef} onChange={onFormChange}>
        <Heading as="h1" size="xl" textAlign="center">
          Nx Pizza
        </Heading>
        <PizzaInput name="firstName" label="Name" type="text" />
        <PizzaInput name="phoneNumber" label="Phone Number" type="number" />
        <PizzaRadioButtons
          options={options}
          name="pizzaType"
          label="Pizza Type"
        />
        <PizzaMultiSelect name="toppings" label="Toppings" options={toppings} />
        <PizzaProgressMeter
          value={percentageComplete}
          size="sm"
          my={5}
          hasStripe
          isAnimated
        />
        <ButtonGroup spacing={4}>
          <Button disabled={percentageComplete < 100} colorScheme="teal">
            Order pizza
          </Button>
          <Button variant="outline">Reset</Button>
        </ButtonGroup>
      </PizzaForm>
    </div>
  );
}

export default App;
