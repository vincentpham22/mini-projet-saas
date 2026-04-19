"use client"
import Link from "next/link"
import Image from "next/image"

import React from 'react'

export default function Nav() {
  return (
    <nav className="max-w-400 w-full mx-auto flex items-center justify-between p-5 border-b border-gray-300 h-18">
        <div>
            <Link href="/">
                <Image src="/vercel.svg" alt="Logo" width={30} height={30}/>
            </Link>
        </div>
    </nav>
  )
}