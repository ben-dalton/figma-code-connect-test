import { Badge, Box, Heading, HStack, Icon, Spinner, VStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { LuTriangleAlert } from 'react-icons/lu'
import { CZBadge } from './CZBadge'
import type { CZBadgeStatus } from './CZBadge'

const meta: Meta<typeof CZBadge> = {
  title: 'Components/Badge',
  component: CZBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CZBadge>

export const Default: Story = {
  render: () => <CZBadge status="active">Connected</CZBadge>,
}

const ALL_STATUSES: { status: CZBadgeStatus; label: string }[] = [
  { status: 'active', label: 'Active' },
  { status: 'inactive', label: 'Inactive' },
  { status: 'pending', label: 'Pending' },
  { status: 'error', label: 'Error' },
  { status: 'warning', label: 'Warning' },
  { status: 'info', label: 'Info' },
]

export const AllStatuses: Story = {
  name: 'All Statuses',
  render: () => (
    <HStack gap="3" flexWrap="wrap">
      {ALL_STATUSES.map(({ status, label }) => (
        <CZBadge key={status} status={status}>
          {label}
        </CZBadge>
      ))}
    </HStack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <HStack gap="3" align="center">
      <CZBadge status="active" size="xs">XS</CZBadge>
      <CZBadge status="active" size="sm">SM</CZBadge>
      <CZBadge status="active" size="md">MD</CZBadge>
      <CZBadge status="active" size="lg">LG</CZBadge>
    </HStack>
  ),
}

export const WithIcon: Story = {
  name: 'With Icon',
  render: () => (
    <HStack gap="3">
      <CZBadge status="error">
        Failed
        <Icon as={LuTriangleAlert} boxSize="4" />
      </CZBadge>
      <CZBadge status="pending">
        Updating
        <Spinner size="xs" />
      </CZBadge>
    </HStack>
  ),
}

export const RealWorldExamples: Story = {
  name: 'Real-World Examples',
  render: () => (
    <VStack gap="4" align="start">
      <Heading size="sm">Connection Status</Heading>
      <HStack gap="3">
        <CZBadge status="active">Healthy</CZBadge>
        <CZBadge status="warning">Degraded</CZBadge>
        <CZBadge status="error">Disconnected</CZBadge>
      </HStack>

      <Heading size="sm">User Status</Heading>
      <HStack gap="3">
        <CZBadge status="active">Active</CZBadge>
        <CZBadge status="pending">Pending</CZBadge>
        <CZBadge status="error">Rejected</CZBadge>
        <CZBadge status="inactive">Disabled</CZBadge>
      </HStack>
    </VStack>
  ),
}
