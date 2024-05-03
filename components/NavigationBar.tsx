import Logo from '../public/Logo.svg'
import Image from 'next/image'
import Button from '@/components/button/Button'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '@/components/Sheet'
import { Menu, X } from 'lucide-react'
import * as React from 'react'

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

export const NavigationBar = () => <div className="mx-auto z-50 pt-7 items-center flex justify-between px-[5%]">
		<Image
			priority
			objectFit="contain"
			width={140}
			className="z-50"
			height={35}
			src={Logo}
			alt="Logo"
		/>
		<div className=" items-center gap-14 z-50 hidden xl:flex">
			<div className="flex gap-10">
				{
					navigationElements.map((element) => <div className="flex gap-1" key={element.link}>
							<a href={element.link} className=" text-md  text-white">{element.title}</a>
							{
								element.isSoon ? <div className="bg-black px-1.5 z-50 rounded-full py-0.5">
									<p className=" gradientText">
										Soon
									</p>
								</div> : null
							}
						</div>)
				}
			</div>
			<Button  variant='outline'>Connect </Button>
		</div>
	<div className='xl:hidden block z-50'>

		<Sheet>
			<SheetTrigger asChild>
			<div className='border-2 border-white z-50 cursor-pointer p-1 rounded-md'>
				<Menu size={24} height={32} width={32} />
			</div>
			</SheetTrigger>

			<SheetContent>
				<SheetHeader>
					<div className='items-center flex absolute right-4  top-4'>
						<Button className='ml-auto mr-4'  variant='outline'>Connect </Button>
						<SheetClose className=" rounded-md bg-blue p-1.5">
							<X className="h-8 w-8" />
							<span className="sr-only">Close</span>
						</SheetClose>
					</div>
				</SheetHeader>
				<div className='flex flex-col mt-[48px] gap-4'>
					{
						navigationElements.map((element) =>
							<div className="pt-4  border-t-2 border-greyLine flex gap-1"
						key={element.link}>
							<SheetClose className='w-full'>
							<a href={element.link} className='w-full'>
								<div className='flex'>
									<p  className=" text-md flex  text-white">{element.title}</p>
									{
										element.isSoon ? <div className="bg-black px-1.5 z-50 rounded-full">
											<p className=" gradientText">
												Soon
											</p>
										</div> : null
									}
								</div>
							</a>
							</SheetClose>
						</div>)
					}
				</div>

			</SheetContent>
		</Sheet>
	</div>
</div>
