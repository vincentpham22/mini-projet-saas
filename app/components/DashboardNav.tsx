"use client";
import React from 'react'
import { Notebook, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardNav() {
  const pathname = usePathname();

  const menuDashboard = [
    {name: "Notes", icon: Notebook, path: "/dashboard/notes"},
    {name: "Settings", icon: Settings, path: "/dashboard/settings"},
  ]

  return (
    <nav className='flex md:flex-col md:h-full md:w-16 w-full lg:w-40 gap-2 mt-5'>
        {menuDashboard.map((link, index) => {
            const isActive = pathname.startsWith(link.path)
            return (
                <Link key={link.path} href={link.path}>
                    <div className={`flex items-center justify-center lg:justify-start gap-2 cursor-pointer lg:p-3 p-2 hover:bg-orange-500 hover:bg-opacity-50 hover:text-white text-sm font-bold rounded-md ${isActive && "bg-orange-500 text-white"}`}>
                        <link.icon className='w-4' />
                        <span className='hidden lg:block'>{link.name}</span>
                    </div>
                </Link>
            )
        })
    }
    </nav>
  )
}
