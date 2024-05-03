import { cn } from '@/utils'
import { monument } from '@/public/font/font'
import Image from 'next/image'
import CreonImage from '../../public/CREON 1.png'

export const OutVisionSection = () => {
			return <div className=' mx-[10%] mt-[230px]'>

				<div className='w-2/3'>
					<h3
						className={cn(`text-3xl uppercase  pb-[30px] border-b-[1px] border-greyLine`, monument.className)}
					>
						Our vision is to support the innovation of AI blockchain projects
						<i className='gradientText not-italic'> while prioritizing communities and democratizing profits</i>
					</h3>
						<Image className='ml-[100px]' src={CreonImage} alt={"Creon"} width={955} height={855}/>
				</div>
				<div className='w-1/3'></div>
			</div>
}
