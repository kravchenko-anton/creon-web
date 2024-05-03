import Logo from '../public/Logo.svg'
import Image from 'next/image'
import Button from '@/components/button/button'

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

export const NavigationBar = () => {
	return <div
		className="mx-auto h-[44px] z-50 pt-7 items-center flex justify-between px-[5%]">
		<Image
			objectFit="contain"
			width={140}
			className="z-50"
			height={35}
			priority
			src={Logo}
			alt="Logo"
		/>
		<div className="flex items-center gap-14 z-50">
			<div className="flex gap-10">
				{
					navigationElements.map((element, index) => {
						return <div className="flex gap-1">
							<a href={element.link} className=" text-md  text-white">{element.title}</a>
							{
								element.isSoon && <div className="bg-black px-1.5 z-50 rounded-full py-0.5">
									<p className=" gradientText">
										Soon
									</p>
								</div>
							}
						</div>
					})
				}
			</div>

			<Button size="md">Connect </Button>
		</div>
	</div>
}
