import { NavigationBar } from '@/components/NavigationBar'
import { cn } from '@/utils'
import { monument } from '@/public/font/font'

export const FirstSection = () => <div className="min-h-screen">
		<div className="relative">
			<video loop autoPlay muted preload="none"
						 className=" absolute inset-0  object-cover z-[-1] h-screen w-screen"
				// add overflow video
			>
				<source src="../videos/main-background-video.mp4" type="video/mp4" />
			</video>
			<div
				className="absolute w-screen h-screen bg-gradient-to-b to-[#000000] via-[rgba(59,139,255,0.2)] from-[rgba(171,35,255,0.2)]"
			/>
		</div>
		<NavigationBar />
		{
			//  25% for adaptability since 480px out of 1920 is 25%
		}
		<div className={cn("flex absolute w-full bottom-20 items-center mt-auto px-[8%]")}>
			<div className="z-10">
				<div className="mt-auto">
					<h1
						className={cn(`text-5xl xl:text-6xl`, monument.className)}
					>
						The world's first <br /> platform for Tokenizing <br /> AI
						blockchain projects
					</h1>
					<h3
						className={`mt-10 
                            p-1 font-bold text-md xl:text-xl w-fit border-b border-t gradientText`}
					>
						Hold the Creon Pass NFT and earn passive income from AI Tools
					</h3>
				</div>
			</div>
		</div>
	</div>
