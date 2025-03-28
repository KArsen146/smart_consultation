'use client'

import { PropsWithChildren } from 'react'

export default function GlobalLayout({children}: PropsWithChildren<unknown>){
    return (<>

        <main>{children}</main>
    </>)
}
