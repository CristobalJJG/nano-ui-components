import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular-vite';
import { NanoButtonComponent } from './nano-button';

const meta: Meta<NanoButtonComponent> = {
  title: 'Components/Button',
  component: NanoButtonComponent,
  decorators: [moduleMetadata({ imports: [NanoButtonComponent] })],
  tags: ['autodocs'],
  args: {
    label: 'Guardar cambios',
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: false,
  },
  argTypes: {
    fullWidthHostClass: { table: { disable: true } },
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<NanoButtonComponent>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px">
        <ui-button variant="primary" label="Primary"></ui-button>
        <ui-button variant="secondary" label="Secondary"></ui-button>
        <ui-button variant="outline" label="Outline"></ui-button>
        <ui-button variant="ghost" label="Ghost"></ui-button>
        <ui-button variant="danger" label="Danger"></ui-button>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display:flex;align-items:center;gap:10px">
        <ui-button size="sm" label="Small"></ui-button>
        <ui-button size="md" label="Medium"></ui-button>
        <ui-button size="lg" label="Large"></ui-button>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
};
