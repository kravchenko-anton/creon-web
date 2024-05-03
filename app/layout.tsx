import type { Metadata } from 'next'
import './globals.css'
import type { ReactNode } from 'react'
import { satoshi } from '@/public/font/font'


export const metadata: Metadata = {
	title: 'Creon',
	description: 'Creon nft platform'
}


export default function RootLayout({
																		 children
																	 }: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
		<head>
			<link rel="icon" href="/favicon.ico" />
			<meta charSet="utf-8" />
			<title>{String(metadata.title)}</title>
		</head>
		<body className={satoshi.className}>{children}</body>
		</html>
	)
}
