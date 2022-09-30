import { MutableRefObject } from 'react'

export interface PichinchaTypographyHTMLAttributes {
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
  color?: Colors
  inline_styles?: object
  variant?: VariantText
  weight?: 'normal' | 'bold'
  weight_color?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  children: string
}

export interface PichinchaButtonHTMLAttributes {
  color?: 'primary' | 'secondary' | 'complementary' | 'tertiary' | 'destructive'
  disabled?: boolean
  href?: string
  type?: string
  idelement?: string
  loading?: boolean
  size?: 'medium' | 'small' | 'large' | 'extra-large' | 'large'
  tabIndexInner?: number
  value?: string
  iconName?: string
  iconNameRight?: string
  iconType?: '--outlined' | '--round' | '--sharp' | '--two-tone'
  onlyIcon?: boolean
  ref?: MutableRefObject<any>
  onClick?(): void
  children: string
}

export interface PichinchaInputHTMLAttributes {
  inputmode?: string
  ref?: MutableRefObject<any>
  autoComplete?: boolean
  autofocus?: boolean
  class?: string
  controlEvent?: boolean
  errorHelper?: string
  filterRegex?: string
  floatingLabel?: boolean
  fullWidth?: boolean
  hideNumberHandles?: boolean
  hidePasswordText?: string
  idElement?: string
  label?: string
  maxLength?: number
  nameElement?: string
  normalHelper?: string
  pattern?: string
  placeholder?: string
  showIconStatus?: boolean
  showMaxLength?: boolean
  showPasswordText?: string
  showPasswordToggle?: boolean
  showTooltipOnChange?: boolean
  size?: 'extra-small' | 'small' | 'medium' | 'large'
  state?: 'normal' | 'disabled' | 'success' | 'error'
  tabIndexElement?: number
  tooltip?: string
  tooltipBody?: string
  type?: string
  value?: string
  onChange?(value: string): void
}
