import { HStack, Icon } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { LuPlus, LuDownload, LuSend } from 'react-icons/lu'
import { PrimaryActionButton } from './PrimaryActionButton'

const meta: Meta<typeof PrimaryActionButton> = {
  title: 'Components/PrimaryActionButton',
  component: PrimaryActionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PrimaryActionButton>

export const Default: Story = {
  render: () => <PrimaryActionButton>Create</PrimaryActionButton>,
}

export const WithIcons: Story = {
  name: 'With Icons',
  render: () => (
    <HStack gap="3">
      <PrimaryActionButton>
        <Icon as={LuPlus} /> Create New
      </PrimaryActionButton>
      <PrimaryActionButton>
        <Icon as={LuDownload} /> Export
      </PrimaryActionButton>
      <PrimaryActionButton>
        <Icon as={LuSend} /> Send
      </PrimaryActionButton>
    </HStack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <HStack gap="3" align="center">
      <PrimaryActionButton size="xs">XS</PrimaryActionButton>
      <PrimaryActionButton size="sm">SM</PrimaryActionButton>
      <PrimaryActionButton size="md">MD (default)</PrimaryActionButton>
      <PrimaryActionButton size="lg">LG</PrimaryActionButton>
    </HStack>
  ),
}

export const Disabled: Story = {
  render: () => <PrimaryActionButton disabled>Disabled</PrimaryActionButton>,
}
