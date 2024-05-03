import { cn } from '@/utils'
import { monument } from '@/public/font/font'
import Image from 'next/image'

const NewsFeed = [
	{
		title: 'AI Prospects, Market Size, and Development Pace',
		description:
			'The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.',
		image: require('../../public/images/ai-processor.png')
	},
	{
		title: 'AI Tools and Market',
		description:
			'AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.',
		image: require('../../public/images/robo-hand.png')
	},
	{
		title: 'AI, Crypto, and NFT Market',
		description:
			'Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.',
		image: require('../../public/images/ai-loop.png')
	}
]

interface NewsElementType {
	title: string
	description: string
	image: string
}

const NewsElement = ({ title, description, image }: NewsElementType) => (
	<div>
		<div className='z-50 mb-[20px] block overflow-hidden rounded-md bg-[#13171D] bg-opacity-60 duration-300 ease-in-out hover:-translate-y-2  md:flex md:h-[300px] md:gap-[30px]'>
			<div className='3xl:p-[40px] z-50 p-[10px] pr-0 md:w-2/3 md:p-[15px]'>
				<h3
					className={cn(
						`3xl:text-3xl pb-[15px] text-xl uppercase xl:pb-[20px] xl:text-xl 2xl:text-2xl`,
						monument.className
					)}>
					{title}
				</h3>
				<p className='font-light text-white  md:text-sm 2xl:text-md'>
					{description}
				</p>
			</div>
			<div className='z-50 md:w-1/3 md:items-end'>
				<Image
					width={453}
					height={300}
					className='h-full w-full'
					src={image}
					alt={title}
				/>
			</div>
		</div>
	</div>
)

export const NewsSection = () => (
	<div className={cn(`mt-[230px]`)}>
		<div className='relative h-full'>
			<video
				loop
				autoPlay
				muted
				preload='none'
				className=' absolute inset-0  z-[-1] h-fit object-cover'>
				<source src='../videos/roadmap-video.mp4' type='video/mp4' />
			</video>
			<div className='absolute z-[-1] h-screen w-screen bg-gradient-to-b from-[#000000] via-[rgba(59,139,255,0.1)]' />
			<div className='absolute bottom-0 z-[-1] h-screen w-screen bg-gradient-to-t from-[#000000] via-[rgba(59,139,255,0.1)]' />
			<div className='z-50 overflow-hidden px-[2%] xl:px-[8%]'>
				{NewsFeed.map(news => (
					<NewsElement key={news.title} {...news} />
				))}
			</div>
		</div>
	</div>
)
