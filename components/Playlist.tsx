import { StaticImageData } from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface PlaylistProps{
    className?: string
    plName: string
    plIcon: StaticImageData
    description: string
}

const PlayList: React.FC<PlaylistProps> = ({plName, className, plIcon, description}) => {
    return(
        <div className={twMerge(`
        text-white 
        font-medium 
        px-5
        w-[180px]`, className)}>
        <img className='bg-cover rounded-xl' src={plIcon.src} alt="Playlist Icon" width={"160px"} height={"160px"}></img>
        <p className='text-[16px] pt-[6px]'>{plName}</p>
        <p className='text-neutral-400 text-[14px]'>{description}</p>
            
        </div>
    )
}

export default PlayList