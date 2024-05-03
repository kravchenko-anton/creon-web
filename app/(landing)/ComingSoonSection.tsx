import { cn } from '@/utils'
import { monument } from '@/public/font/font'
import Image from 'next/image'


const ComingSoonElementsList = [
	{
		heading: 'Token',
		subHeading: 'The Gateway token to the world of AI',
		picture: require('../../public/images/token.png'),
		description: "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects."
	},
	{
		heading: "Revenue",
		subHeading: "Driving income and growth through decentralization",
		picture: require('../../public/images/revenue.png'),
		description: "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support."
	},
	{
		heading: "Launchpad",
		subHeading: "Driving the future of AI Innovation",
		picture: require('../../public/images/launchpad.png'),
		description: "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors."
	}
]
interface ComingSoonElementType {
	heading: string
	subHeading: string
	picture: string
	description: string

}

const ComingSoonElement = ({ heading, subHeading, picture, description }:ComingSoonElementType) => <div
		className="bg-[#13171D] mb-8 md:mb-0 bg-opacity-60 rounded-lg relative p-2 xl:p-8 pl-0 md:w-[33%]">
		<p className='uppercase text-[12px] font-extrabold bg-white p-1 rounded-full absolute -top-3 right-5'>Coming soon</p>
		<div className='pt-4 xl:pt-0 xl:h-[180px]'>
			<h3
				className={cn(`text-3xl uppercase pl-2 xl:pb-[30px] xl:pl-8`, monument.className)}
			>
				{heading}
			</h3>
			<h3 className="font-bold mb-[40px] pl-2 xl:pl-8  gradientText text-xl not-italic"> {subHeading}</h3>
		</div>
		<Image alt={'Creon'} width={423}
					 height={234}
					 src={picture}
		/>

		<p className="text-white font-light text-md xl:text-xl pl-2 mb-2 xl:pl-8 mt-[30px]">
			{description}
		</p>
	</div>


export const ComingSoonSection = 	() => <div className={cn(`mx-[2%] xl:mx-[8%]  md:flex md:justify-between md:gap-[15px]  xl:gap-[40px] mt-[230px] `)}>
		{
			ComingSoonElementsList.map((element) => <ComingSoonElement key={element.heading} {...element} />)
		}
</div>
