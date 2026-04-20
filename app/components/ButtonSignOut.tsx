"use client";
import React from 'react'
import { signOut } from "next-auth/react";
import { LogOut } from 'lucide-react';
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';

export default function ButtonSignOut() {

    const handleSignOut = () => {
        signOut({ callbackUrl: '/' });
    };

    return (
        <div className="p-3">
            <Button onClick={handleSignOut} className="bg-orange-500 hover:bg-orange-600 text-white"><LogOut/></Button>
        </div>
    )
}
