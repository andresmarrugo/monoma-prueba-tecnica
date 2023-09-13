import Image from 'next/image'
import React from 'react'
import SpinerGif from '@/assets/spiner.gif'

type Props = {}

const Spiner = (props: Props) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Image
                src={SpinerGif}
                alt='Spiner'
                width={300}
                height={300}
            />
        </div>
    )
}

export default Spiner