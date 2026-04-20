"use client"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "./ThemeToggle"
import ButtonSignOut from "./ButtonSignOut"
import { useSession } from "next-auth/react"

export default function Nav() {
  const { status } = useSession();

  return (
    <>
    <nav className="max-w-400 w-full mx-auto flex items-center justify-between p-5 h-20">
        <div>
            <Link href="/">
                <Image src="/saasmdclogo.png" alt="Logo" width={100} height={50}/>
            </Link>
        </div>
        <div className="flex items-center justify-center">
            <ThemeToggle />
            {status === "authenticated" && <ButtonSignOut />}
        </div>
    </nav>
    <div className="w-19/20 h-0.5 bg-orange-500 mx-auto" />
    </>
  )
}