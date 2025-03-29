'use client'

import { ROUTING_PAGES } from '@/config/pages-url.config'
import { useRouter } from 'next/navigation'
import { PropsWithChildren } from 'react'
import Image from 'next/image';

export default function GlobalLayout({children}: PropsWithChildren<unknown>){
    const {push} = useRouter()
    return (<>
        <div className="fixed flex items-center w-full bg-main h-[106px]">
            <Image src="/logo.svg" alt="logo" width={111} height={111} role="presentation" className='absolute left-[3px]'/>
            <h1 className='relative  font-header text-important text-[48px] font-bold left-[119px]'>
                <button onClick={()=>push(ROUTING_PAGES.HOME)} type='submit' >Умная консультация </button>
            </h1>
        </div>
        <main>{children}</main>
    </>)
}
