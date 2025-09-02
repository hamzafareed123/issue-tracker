'use client'
import Link from "next/link"
import { FaBug } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import classNames from "classnames";

function Navbar() {

    const currentPath = usePathname();

    const links =[
        {label:"Dashboard" , href:"/"},
        {label:"Issues", href:'/Issue'},
    ]

  return (
    <nav className="w-full mx-auto py-5 border-b">
        <div className="flex   text-center py-4 space-x-10 px-10">
            <div className="text-2xl font-bold">
                <FaBug/>
            </div>
            <div className="flex text-center gap-8 items-center text-xl font-semibold">
                {
                    links.map((link)=>(
                        <Link 
                        className = {classNames({
                           "text-zinc-900":link.href == currentPath ,
                             "text-zinc-400":link.href !== currentPath ,
                               "hover:text-zinc-800 transition-colors ":true
                })} key={link.label} href={link.href} >{link.label}</Link>
                    ))
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar