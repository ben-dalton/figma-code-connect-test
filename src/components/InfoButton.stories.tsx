import { Box, Heading, HStack, Text } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { InfoButton } from './InfoButton'

const meta: Meta<typeof InfoButton> = {
  title: 'Components/InfoButton',
  component: InfoButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InfoButton>

export const Default: Story = {
  render: () => (
    <InfoButton
      title="Total Cost"
      content="Total cost includes all charges for the selected period, including discounts and credits."
    />
  ),
}

export const WithoutTitle: Story = {
  name: 'Without Title',
  render: () => (
    <InfoButton content="This is a simple tooltip-style popover with no title." />
  ),
}

export const InlineWithHeading: Story = {
  name: 'Inline With Heading',
  render: () => (
    <HStack>
      <Heading size="md">Results</Heading>
      <InfoButton
        title="Results"
        content="Results are filtered by your current selection and date range."
        size="md"
      />
    </HStack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <HStack gap="4" align="center">
      <Box textAlign="center">
        <Text fontSize="xs" mb="1">xs</Text>
        <InfoButton size="xs" content="Extra small" />
      </Box>
      <Box textAlign="center">
        <Text fontSize="xs" mb="1">sm</Text>
        <InfoButton size="sm" content="Small" />
      </Box>
      <Box textAlign="center">
        <Text fontSize="xs" mb="1">md</Text>
        <InfoButton size="md" content="Medium" />
      </Box>
      <Box textAlign="center">
        <Text fontSize="xs" mb="1">lg</Text>
        <InfoButton size="lg" content="Large (default)" />
      </Box>
    </HStack>
  ),
}
