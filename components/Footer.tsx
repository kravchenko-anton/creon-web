import Image from 'next/image'

const navigationElements = [
	{
		title: 'Creon Pass',
		link: '#creon-pass'
	},
	{
		title: 'Token',
		link: '#token',
		isSoon: true
	},
	{
		title: 'AI Revenue',
		link: '#ai-revenue',
		isSoon: true

	},
	{
		title: 'AI Launchpad',
		link: '#ai-launchpad',
		isSoon: true
	}

]

const SocialMediaLinks = [
	{
		title: 'Telegram',
		link: 'https://t.me/',
		icon: require('../public/images/social-media/Telegram.svg')
	},
	{
		title: 'Discord',
		link: 'https://discord.com/',
		icon: require('../public/images/social-media/Discord.svg')
	},
	{
		title: 'Twitter',
		link: 'https://twitter.com/',
		icon: require('../public/images/social-media/Twitter.svg')
	}
]

export const Footer = () => <div
	className="md:h-[84px] z-50 items-center md:flex justify-between px-[2%] xl:px-[8%]">
	<div className='flex gap-[90px]'>
		<p className="text-sm text-white font-light">
			© Creon 2023. All rights reserved.
		</p>

		<div className="flex gap-2">
			{
				SocialMediaLinks.map((element) =>
					<a
						href={element.link}
					>
						<Image className='cursor-pointer' src={element.icon} width={32} height={32} key={element.title} alt={
							element.title
						} />
					</a>
				)
				}
		</div>
	</div>
	<div className="flex my-4 md:my-0 items-center gap-14 z-50">


	<Image src={require('../public/images/Niftables-logo.svg')} alt={'Niftables'} width={200} height={40} />
	</div>
</div>
