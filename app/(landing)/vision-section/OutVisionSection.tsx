import { cn } from '@/utils'
import { monument } from '@/public/font/font'
import Image from 'next/image'
import CreonImage from '@/public/images/CREON 1.png'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/Accordion'
import { ProfitabilityAndGrowth } from '@/app/(landing)/vision-section/icons/ProfitabilityAndGrowth'
import {
	TransparentFairDecentralizedEarnings
} from '@/app/(landing)/vision-section/icons/TransparentFairDecentralizedEarnings'
import { LaunchingTheFuture } from '@/app/(landing)/vision-section/icons/LaunchingTheFuture'
import { LimitlessPossibilitiesOfAiCrypto } from '@/app/(landing)/vision-section/icons/LimitlessPossibilitiesOfAiCrypto'


export const OutVisionSection = () => <div className={cn('flex gap-[180px] justify-between mx-[8%]  mt-[230px]')}>

				<div className='w-2/3'>
					<h3
						className={cn(`text-2xl 2xl:text-3xl uppercase pb-[30px]`, monument.className)}
					>
						Our vision is to support the innovation of AI blockchain projects
						<i className='gradientText not-italic'> while prioritizing communities and democratizing profits</i>
					</h3>
						<Image className='ml-[100px]' src={CreonImage} alt={"Creon"} width={955} height={855}/>
				</div>
				<div className='w-2/3'>
					<Accordion type="multiple">
						<AccordionItem value="one">
								<AccordionTrigger>
											<div className='flex items-center gap-7'>
												<ProfitabilityAndGrowth />
										<h5 className='text-xl text-left text-white'>Profitability and <br/>
											Growth</h5>
											</div>
								</AccordionTrigger>
							<AccordionContent>
								<div className='ml-[128px]'>
									At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.

								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="two">
								<AccordionTrigger>
											<div className='flex items-center gap-7'>
												<TransparentFairDecentralizedEarnings />
										<h5 className='text-xl text-left text-white'>Transparent & Fair Decentralized <br/> Earnings</h5>
											</div>
								</AccordionTrigger>
							<AccordionContent>
								<div className="ml-[128px]">

									At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access
									and investment opportunities. Our community actively contributes to the growth and profitability of
									these projects, creating a dynamic ecosystem of innovation and shared success.
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="three">
							<AccordionTrigger>
								<div className='flex items-center gap-7'>
									<LaunchingTheFuture />
									<h5 className='text-xl text-left text-white'>Launching the <br/> future</h5>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div className="ml-[128px]">

									At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access
									and investment opportunities. Our community actively contributes to the growth and profitability of
									these projects, creating a dynamic ecosystem of innovation and shared success.
								</div>
								</AccordionContent>
						</AccordionItem>
						<AccordionItem value="four">
							<AccordionTrigger>
								<div className='flex items-center gap-7'>
									<LimitlessPossibilitiesOfAiCrypto />
									<h5 className='text-xl text-left text-white'>Limitless Possibilities of AI <br/>
										& Crypto</h5>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div className="ml-[128px]">

									At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access
									and investment opportunities. Our community actively contributes to the growth and profitability of
									these projects, creating a dynamic ecosystem of innovation and shared success.
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
