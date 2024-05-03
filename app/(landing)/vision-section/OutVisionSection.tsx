import { cn } from '@/utils'
import { monument } from '@/public/font/font'
import Image from 'next/image'
import CreonImage from '@/public/images/CREON 1.png'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/Accordion'
import { ProfitabilityAndGrowth } from '@/app/(landing)/vision-section/icons/ProfitabilityAndGrowth'
import { TransparentFairDecentralizedEarnings } from '@/app/(landing)/vision-section/icons/TransparentFairDecentralizedEarnings'
import { LaunchingTheFuture } from '@/app/(landing)/vision-section/icons/LaunchingTheFuture'
import { LimitlessPossibilitiesOfAiCrypto } from '@/app/(landing)/vision-section/icons/LimitlessPossibilitiesOfAiCrypto'

export const OutVisionSection = () => (
	<div
		className={
			'mx-[2%] mt-[230px] xl:mx-[8%] xl:flex xl:justify-between xl:gap-[80px]  2xl:gap-[180px]'
		}>
		<div className='xl:w-2/3'>
			<h3
				className={cn(
					`pb-[30px]  text-xl uppercase xl:text-2xl 2xl:text-3xl`,
					monument.className
				)}>
				Our vision is to support the innovation of AI blockchain projects
				<i className='gradientText not-italic'>
					{' '}
					while prioritizing communities and democratizing profits
				</i>
			</h3>
			<Image
				className='xl:ml-[100px]'
				src={CreonImage}
				alt={'Creon'}
				width={955}
				height={855}
			/>
		</div>
		<div className='xl:w-2/3'>
			<Accordion type='multiple'>
				<AccordionItem value='one'>
					<AccordionTrigger>
						<div className='flex items-center gap-2 xl:gap-7'>
							<ProfitabilityAndGrowth />
							<h5 className='text-left text-lg text-white xl:text-xl'>
								Profitability and <br />
								Growth
							</h5>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className='xl:ml-[128px]'>
							At Creon, we handpick cutting-edge AI projects and offer our
							community and token holders early access and investment
							opportunities. Our community actively contributes to the growth
							and profitability of these projects, creating a dynamic ecosystem
							of innovation and shared success.
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='two'>
					<AccordionTrigger>
						<div className='flex items-center gap-2 xl:gap-7'>
							<TransparentFairDecentralizedEarnings />
							<h5 className='text-left text-lg text-white xl:text-xl'>
								Transparent & Fair Decentralized <br /> Earnings
							</h5>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className='xl:ml-[128px]'>
							At Creon, we handpick cutting-edge AI projects and offer our
							community and token holders early access and investment
							opportunities. Our community actively contributes to the growth
							and profitability of these projects, creating a dynamic ecosystem
							of innovation and shared success.
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='three'>
					<AccordionTrigger>
						<div className='flex items-center gap-2 xl:gap-7'>
							<LaunchingTheFuture />
							<h5 className='text-left text-lg text-white xl:text-xl'>
								Launching the <br /> future
							</h5>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className='xl:ml-[128px]'>
							At Creon, we handpick cutting-edge AI projects and offer our
							community and token holders early access and investment
							opportunities. Our community actively contributes to the growth
							and profitability of these projects, creating a dynamic ecosystem
							of innovation and shared success.
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='four'>
					<AccordionTrigger>
						<div className='flex items-center gap-2 xl:gap-7'>
							<LimitlessPossibilitiesOfAiCrypto />
							<h5 className='text-left text-lg text-white xl:text-xl'>
								Limitless Possibilities of AI <br />& Crypto
							</h5>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className='xl:ml-[128px]'>
							At Creon, we handpick cutting-edge AI projects and offer our
							community and token holders early access and investment
							opportunities. Our community actively contributes to the growth
							and profitability of these projects, creating a dynamic ecosystem
							of innovation and shared success.
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	</div>
)
