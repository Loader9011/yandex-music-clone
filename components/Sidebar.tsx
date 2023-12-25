"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { RiNeteaseCloudMusicLine  } from "react-icons/ri"
import { IoIosRadio } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5"
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import SearchBar from "./SearchBar";

interface SidebarProps{
    children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    const pathname = usePathname();

const routes = useMemo(() => [
    {
        icon: RiNeteaseCloudMusicLine,
        label: 'Главное',
        active: pathname !== '/Radio',
        href: '/',
    },
    {
        icon: IoIosRadio,
        label: 'Радио',
        active: pathname === '/Radio',
        href: '/Radio',
    },
    {
        icon: IoBookSharp,
        label: 'Подкасты и книги',
        active: pathname === '/books',
        href: '/books',
    }
], [pathname])

    return(
        <div className="flex h-full">
            <div className="
            md:flex
            hidden
            flex-col
            gap-y-2
            bg-[#181818]
            h-full
            w-[300px]
            "
            >   
                
                <Box>
                    <div className="
                    felx
                    flex-col
                    gap-y-4
                    py-4
                    ">
                        {routes.map((item) => (
                            <SidebarItem 
                            className="
                            px-2
                            py-3.5
                            hover:bg-[#4E4E4E]"
                            key={item.label}
                            {...item}
                            />
                        ))}
                    </div>
                </Box>
                <Box className="p-2 overflow-y-auto h-full">
                    Song Library
                </Box>
            </div>
            <main className="w-full
            flex-1">
                <SearchBar className="" placeholder={"Поиск"}></SearchBar>
                {children}
            </main>
        </div>
    )
}

export default Sidebar;