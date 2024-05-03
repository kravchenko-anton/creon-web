import { cn } from '@/utils'
import type { FC } from 'react'
import { settings } from './settings'
import type { ButtonProperties } from './types'

const Button: FC<ButtonProperties> = ({
                                          children,
                                          fullWidth,
                                          size = 'md',
                                          variant = 'outline',
                                          disabled = false,
                                          isLoading = false,
                                          className,
                                          ...properties
                                      }) => (
    <button
        disabled={disabled || isLoading}
        className={cn(
            'cursor-pointer font-bold text-md duration-300 ease-in-out',
            settings.variant[variant],
            (disabled || isLoading) && 'cursor-not-allowed opacity-50',
            fullWidth ? 'w-full' : '',
            className
        )}
        {...properties}>
        {children}
    </button>
)

export default Button
