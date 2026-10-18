import type { Meta, StoryObj } from '@storybook/angular-vite';
import { NanoSwitchComponent } from './nano-switch';

const meta: Meta<NanoSwitchComponent> = {
  title: 'Components/Switch',
  component: NanoSwitchComponent,
  tags: ['autodocs'],
  args: {
    label: 'Email notifications',
    description: 'Receive important product updates.',
    checked: true,
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<NanoSwitchComponent>;

export const Playground: Story = {};

export const Off: Story = {
  args: { checked: false },
};

export const Disabled: Story = {
  args: { disabled: true },
};
