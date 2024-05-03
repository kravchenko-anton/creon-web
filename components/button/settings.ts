import type { ButtonProperties } from './types'

export const settings: {
	variant: Record<Required<ButtonProperties>['variant'], string>
} = {
	variant: {
		rainbow:
		//border-radius: 6px;
		// padding: 13px 24px 14px 24px;
		// width: 453px;
		// height: 54px;
			' bg-gradient-to-r from-[#3d8bff] to-[#ab23ff] text-white w-[453px] h-14 flex items-center justify-center rounded-[6px]',
		outline:
			'bg-transparent border-white w-[132px] h-11 flex items-center justify-center rounded-md border-2 border-solid'
			+ ' hover:bg-white hover:text-black hover:border-transparent'
	}
}
