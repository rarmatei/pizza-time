import { Story, Meta } from '@storybook/react';
import { PizzaButton, PizzaButtonProps } from './pizza-button';

export default {
  component: PizzaButton,
  title: 'PizzaButton',
} as Meta;

const Template: Story<PizzaButtonProps> = (args) => <PizzaButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  label: '',
};
