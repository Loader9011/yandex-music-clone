
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface PlaylistProps{
    className?: string
    plName: string
}

const PlayList: React.FC<PlaylistProps> = ({plName}) => {
    return(
        <div className={twMerge(`\
        text-white
        font-medium
        `
        )}>
            {plName}
        </div>
    )
}

export default PlayList