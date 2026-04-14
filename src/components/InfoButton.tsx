import { Icon, IconButton, Popover, Portal } from '@chakra-ui/react'
import { LuX, LuInfo } from 'react-icons/lu'
import type { ReactNode } from 'react'

export interface InfoButtonProps {
  ariaLabel?: string
  title?: ReactNode
  content: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg'
  iconSize?: string
  maxWidth?: string
  minWidth?: string
  placement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
}

export const InfoButton = ({
  ariaLabel = 'Info',
  title,
  content,
  size = 'lg',
  iconSize = '2xl',
  maxWidth = 'lg',
  minWidth = '400px',
  placement = 'bottom-start',
}: InfoButtonProps) => {
  return (
    <Popover.Root positioning={{ placement }} portalled>
      <Popover.Trigger asChild>
        <IconButton aria-label={ariaLabel} size={size} variant="ghost" borderRadius="full">
          <Icon as={LuInfo} fontSize={iconSize} />
        </IconButton>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner zIndex="popover">
          <Popover.Content maxW={maxWidth} minW={minWidth} shadow="lg" position="relative" gap="1">
            {title && (
              <Popover.Header px={6} pt={6} pb={4}>
                <Popover.Title fontSize="lg" fontWeight="semibold" whiteSpace="nowrap">
                  {title}
                </Popover.Title>
              </Popover.Header>
            )}
            <Popover.CloseTrigger asChild>
              <IconButton
                aria-label="Close"
                size="sm"
                variant="ghost"
                borderRadius="full"
                position="absolute"
                top="3"
                right="3"
              >
                <Icon as={LuX} />
              </IconButton>
            </Popover.CloseTrigger>
            <Popover.Body px={6} pt={title ? 2 : 8} pb={8}>
              {content}
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
