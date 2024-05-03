import {cn} from "@/utils";
import {monument} from "@/public/font/font";
import Button from "@/components/button/button";

export const bonusOfUsingCreon = ["Pre-launch investment opportunities for upcoming AI projects", "Free and early access to Creon built AI projects", "Higher allocation limits on the Creon AI Launchpad", "Revenue share distribution from Creon built AI projects"]

export const CreonPassSection   = () => {
    return <div className='flex justify-between mx-[10%] items-center mt-60'>

        <div className='w-1/2'>
            <h1
                className={cn(`text-5xl uppercase xl:text-6xl pb-[30px] border-b-[1px] border-greyLine`, monument.className)}
            >
                Creon Pass <br/> NFT
            </h1>

            <h3 className='gradientText text-xl pt-[30px]'>
                The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools
            </h3>

            {
                bonusOfUsingCreon.map((bonus, index) => {
                    //border: 1px solid var(--grey-line);
                    // border-radius: 6px;
                    // padding: 12px 18px 16px 18px;
                    // width: 522px;
                    // height: 51px;
                    return <div key={index} className='items-center px-[18px] flex border-[1px] border-greyLine rounded-[6px] p-[12px 18px 16px 18px] w-[522px] h-[51px] mt-[30px]'>
                        {bonus}
                    </div>
                })
            }

            <Button size={'md'} variant={'rainbow'} className='mt-[72px]'>
                Buy Creon Pass
            </Button>
        </div>

        <div className='w-1/2'>
            <div className='relative w-full h-full'>
                <video loop autoPlay muted preload="none" width={808} height={808}
                >
                    <source src='../videos/nft-video.mp4' type="video/mp4"/>
                </video>
            </div>
        </div>
    </div>
}
