import { FirstSection } from '@/app/(landing)/firstSection'
import { CreonPassSection } from '@/app/(landing)/creonPassSection'
import { ProfitingThroughSection } from '@/app/(landing)/profitingThroughSection'
import { OutVisionSection } from '@/app/(landing)/outVisionSection'

export default function Home() {
	return (
		<main>
			<FirstSection />
			<CreonPassSection />
			<ProfitingThroughSection />
			<OutVisionSection />
		</main>
	)
}
