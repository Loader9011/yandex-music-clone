"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { RiNeteaseCloudMusicLine  } from "react-icons/ri"
import { BiSearch } from "react-icons/bi"
import { IoIosRadio } from "react-icons/io";
import Box from "./Box";
import SidebarItem from "./SidebarItem";

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
            p-2
            "
            >   
                <Box>
                    <div className="
                    felx
                    flex-col
                    gap-y-4
                    px-2
                    py-4
                    ">
                        {routes.map((item) => (
                            <SidebarItem 
                            className=""
                            key={item.label}
                            {...item}
                            />
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    Song Library
                </Box>
            </div>
        </div>
    )
}

export default Sidebar;