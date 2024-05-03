import { cn } from '@/utils'
import { monument } from '@/public/font/font'
import Image from 'next/image'

const ComingSoonElementsList = [
	{
		heading: 'Token',
		subHeading: 'The Gateway token to the world of AI',
		picture: require('../../public/images/token.png'),
		description:
			'Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.'
	},
	{
		heading: 'Revenue',
		subHeading: 'Driving income and growth through decentralization',
		picture: require('../../public/images/revenue.png'),
		description:
			'CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.'
	},
	{
		heading: 'Launchpad',
		subHeading: 'Driving the future of AI Innovation',
		picture: require('../../public/images/launchpad.png'),
		description:
			'The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.'
	}
]
interface ComingSoonElementType {
	heading: string
	subHeading: string
	picture: string
	description: string
}

const ComingSoonElement = ({
	heading,
	subHeading,
	picture,
	description
}: ComingSoonElementType) => (
	<div className='relative mb-8 rounded-lg bg-[#13171D]  bg-opacity-60 p-2 pl-0 duration-300 ease-in-out hover:-translate-y-4 md:mb-0 md:w-[50%] xl:p-8 xl:pl-0'>
		<p className='absolute -top-3 right-5 rounded-full bg-white p-1 text-[12px] font-extrabold uppercase'>
			Coming soon
		</p>
		<div className='pt-4 xl:h-[180px] xl:pt-0'>
			<h3
				className={cn(
					`pl-2 text-xl uppercase xl:pb-[30px] xl:pl-8 xl:text-3xl`,
					monument.className
				)}>
				{heading}
			</h3>
			<h3 className='gradientText mb-[40px] pl-2 text-md  font-bold not-italic xl:pl-8 xl:text-xl'>
				{' '}
				{subHeading}
			</h3>
		</div>
		<Image alt={'Creon'} width={423} height={234} src={picture} />

		<p className='mb-2 mt-[30px] pl-2 text-sm font-light text-white xl:pl-8 xl:text-md xl:text-xl'>
			{description}
		</p>
	</div>
)

export const ComingSoonSection = () => (
	<div
		className={cn(
			`mx-[2%] mt-[230px]  md:flex md:justify-between md:gap-[15px]  xl:mx-[8%] xl:gap-[40px] `
		)}>
		{ComingSoonElementsList.map(element => (
			<ComingSoonElement key={element.heading} {...element} />
		))}
	</div>
)
