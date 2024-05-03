import type {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import {SizeProperties} from "@/utils/types";

export type DefaultButtonProperties = Pick<
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
	'onClick' | 'type' | 'disabled' | 'children' | 'className' | 'style'
>
export interface ButtonProperties
	extends DefaultButtonProperties,
		SizeProperties {
	isLoading?: boolean
	disabled?: boolean
	variant?: "rainbow" | "outline"
	children?: string
	fullWidth?: boolean
}
