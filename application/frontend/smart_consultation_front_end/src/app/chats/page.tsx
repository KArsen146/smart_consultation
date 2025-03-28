import type { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Chats } from "./Chats";


export const metadata: Metadata = {
    title: 'Chats',
    ...NO_INDEX_PAGE
}

export default function ChatsPage(){
    return <Chats />
}
