import type { Meta, StoryObj } from '@storybook/angular-vite';
import { NanoSelectComponent } from './nano-select';

const meta: Meta<NanoSelectComponent> = {
  title: 'Components/Select',
  component: NanoSelectComponent,
  tags: ['autodocs'],
  args: {
    label: 'Team',
    placeholder: 'Choose a team',
    hint: 'You can change this later.',
    value: '',
    options: [
      { label: 'Design', value: 'design' },
      { label: 'Engineering', value: 'engineering' },
      { label: 'Marketing', value: 'marketing' },
    ],
    required: false,
    disabled: false,
    error: '',
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    value: { control: 'text' },
    options: { control: 'object' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<NanoSelectComponent>;

export const Playground: Story = {};

export const WithSelection: Story = {
  args: { value: 'engineering', hint: '' },
};

export const ValidationError: Story = {
  args: { error: 'Choose a team to continue.', hint: '' },
};
