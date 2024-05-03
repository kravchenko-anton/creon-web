import { cn } from '@/utils'
import { monument } from '@/public/font/font'


export const ProfitingThroughSection = () => <div className="mt-[240px] px-[8%] w-full">
		<div className='mb-[76px]'>
			<h3
				className={cn(`text-5xl uppercase xl:text-6xl`, monument.className)}
			>
				Profiting Through
			</h3>
			<h3
				className={cn(`ml-auto text-end mt-[20px] gradientText uppercase  w-full text-3xl xl:text-3xl`, monument.className)}
			>
				AI Innovation & Decentralization
			</h3>
		</div>
		<div className="flex">

			<div className="w-2/3">
				<div className='h-full pr-[30px]'>
					<div className="relative w-full rounded-[6px] overflow-hidden">
						<video loop autoPlay muted preload="none" width={950} height={480}
						>
							<source src="../videos/creon-logo.mp4" type="video/mp4" />
						</video>
						<div
							// // do  via size more bigger
							className="absolute  bg-center w-full h-full top-0 left-0 right-0 bottom-0 "
						/>
					</div>
				</div>

			</div>
			<div className="w-1/3  px-[30px] border-x-2 border-greyLine">
				<div className="block">
					<h4 className="text-xl text-white mb-[28px] font-bold">
						The dynamic community driven business model of the future.</h4>
					<span className="text-md font-normal text-white">
                At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.</span>
				</div>

			</div>
		</div>
	</div>
