import {  Button } from "@radix-ui/themes";
import Link from "next/link";
function IssuePage() {
  return (
    <div className="">
        <Button><Link href='/Issue/new'>Create New Issue</Link></Button>
    </div>
  )
}

export default IssuePage