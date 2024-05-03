import { cn } from '@/utils'
import { monument } from '@/public/font/font'
import Button from '@/components/button/Button'

export const bonusOfUsingCreon = ['Pre-launch investment opportunities for upcoming AI projects', 'Free and early access to Creon built AI projects', 'Higher allocation limits on the Creon AI Launchpad', 'Revenue share distribution from Creon built AI projects']

export const CreonPassSection = () => <div id='creon-pass' className="md:flex md:justify-between mx-[2%] xl:mx-[8%] items-center mt-[240px]">
		<div className="md:w-1/2">
			<h3
				className={cn(`text-2xl md:text-5xl uppercase xl:text-6xl pb-[30px] border-b-[1px] border-greyLine`, monument.className)}
			>
				Creon Pass <br /> NFT
			</h3>

			<h3 className="gradientText  pt-[30px] mb-[30px] text-xl">
				The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income
				through AI-driven tools
			</h3>

			{
				bonusOfUsingCreon.map((bonus) => <div key={bonus}
											className="items-center px-[18px] flex border-[1px] border-greyLine rounded-[6px] p-[12px 18px 16px 18px]  mt-[10px]">
						<p className="text-md text-white">   {bonus}</p>
					</div>)
			}

			<Button  variant={'rainbow'} className="mt-[20px] md:mt-[72px] w-full">
				Buy Creon Pass
			</Button>
		</div>

		<div className="md:w-1/2">
			<div className="relative w-full h-full">
				<video loop autoPlay muted preload="none" width={808} height={808}
				>
					<source src="../videos/nft-video.mp4" type="video/mp4" />
				</video>
				<div
					className="absolute  bg-center w-full h-full top-0 left-0 right-0  bg-gradient-to-b from-[#000000] via-transparent"
				/>
				<div
					className="absolute  bg-center w-full h-full top-0 left-0 right-0  bg-gradient-to-t  from-[#000000] via-transparent"
				/>
			</div>
		</div>
</div>
