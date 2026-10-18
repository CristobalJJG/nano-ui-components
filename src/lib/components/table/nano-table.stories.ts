import type { Meta, StoryObj } from '@storybook/angular-vite';
import { NanoTableComponent } from './nano-table';

const meta: Meta<NanoTableComponent> = {
  title: 'Components/Table',
  component: NanoTableComponent,
  tags: ['autodocs'],
  args: {
    columns: [
      { header: 'ID', key: 'id' },
      { header: 'Name', key: 'name' },
      { header: 'Status', key: 'status' },
      { header: 'Actions', key: 'actions', render: (val: any) => {
        const btn = document.createElement('button');
        btn.innerText = 'Edit';
        btn.className = 'btn-edit';
        return btn;
      }}
    ],
    data: [
      { id: 1, name: 'Item One', status: 'Active' },
      { id: 2, name: 'Item Two', status: 'Pending' },
      { id: 3, name: 'Item Three', status: 'Inactive' },
    ],
  },
};

export default meta;
type Story = StoryObj<NanoTableComponent>;

export const Default: Story = {};

export const WithActions: Story = {
  args: {
    columns: [
      { header: 'ID', key: 'id' },
      { header: 'Name', key: 'name' },
      { header: 'Actions', key: 'actions', render: (val: any) => {
        const btn = document.createElement('button');
        btn.innerText = 'Delete';
        btn.className = 'btn-delete';
        return btn;
      }}
    ],
    data: [
      { id: 1, name: 'Delete Me' },
      { id: 2, name: 'Keep Me' },
    ],
  },
};

export const WithSvg: Story = {
  args: {
    columns: [
      { header: 'ID', key: 'id' },
      { header: 'Icon', key: 'icon', render: (val: any) => {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.innerHTML = '<circle cx="12" cy="12" r="10" fill="currentColor" />';
        return svg;
      }}
    ],
    data: [
      { id: 1, icon: 'circle' },
      { id: 2, icon: 'circle' },
    ],
  },
};
