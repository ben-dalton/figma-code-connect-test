import { Badge } from '@chakra-ui/react'
import type { ReactNode } from 'react'

export type CZBadgeStatus = 'active' | 'inactive' | 'pending' | 'error' | 'warning' | 'info'

const STATUS_COLOR_MAP: Record<CZBadgeStatus, string> = {
  active: 'green',
  inactive: 'gray',
  pending: 'orange',
  error: 'red',
  warning: 'yellow',
  info: 'teal',
}

export interface CZBadgeProps {
  /** Semantic status that maps to a color palette */
  status: CZBadgeStatus
  /** Badge content (label text, can include icons) */
  children: ReactNode
  /** Chakra t-shirt size @default 'sm' */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  'data-testid'?: string
  'aria-label'?: string
}

export const CZBadge = ({ status, children, size = 'sm', ...rest }: CZBadgeProps) => (
  <Badge
    colorPalette={STATUS_COLOR_MAP[status]}
    variant="subtle"
    size={size}
    width="fit-content"
    px="3.5"
    py="2"
    {...rest}
  >
    {children}
  </Badge>
)

CZBadge.displayName = 'CZBadge'

export const colorPaletteToStatus = (color: string): CZBadgeStatus => {
  const map: Record<string, CZBadgeStatus> = {
    green: 'active',
    gray: 'inactive',
    orange: 'pending',
    red: 'error',
    yellow: 'warning',
    teal: 'info',
    blue: 'info',
    cyan: 'info',
    purple: 'info',
    pink: 'info',
  }
  return map[color] ?? 'inactive'
}
