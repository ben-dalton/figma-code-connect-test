import { Button, type ButtonProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

export const PrimaryActionButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <Button ref={ref} colorPalette="orange" size="md" {...props} />
))

PrimaryActionButton.displayName = 'PrimaryActionButton'
