import Link from "next/link"
import { FaBug } from "react-icons/fa6";

function Navbar() {
    const links =[
        {label:"Dashboard" , href:"/"},
        {label:"Issues", href:'/issues'},
    ]

  return (
    <nav className="w-full mx-auto mt-10 border-b">
        <div className="flex   text-center py-4 space-x-10 px-10">
            <div className="text-2xl font-bold">
                <FaBug/>
            </div>
            <div className="flex text-center gap-8 items-center text-xl">
                {
                    links.map((link)=>(
                        <Link className="text-zinc-300 hover:text-white transition-colors" key={link.label} href={link.href} >{link.label}</Link>
                    ))
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar