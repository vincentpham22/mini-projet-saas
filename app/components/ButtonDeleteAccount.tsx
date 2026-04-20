"use client";
import { Button } from "@/components/ui/button";
import { deleteUser } from "@/lib/actionsUsers";
import { signOut } from "next-auth/react";

export default function ButtonDeleteAccount({ userId }: { userId: string }) {
    const handleDelete = async () => {
        const formData = new FormData();
        formData.append("id", userId);
        await deleteUser(formData);
        await signOut({ callbackUrl: "/" });
    };

    return (
        <Button type="button" onClick={handleDelete} className="bg-red-500 mx-1 my-2 hover:bg-red-600 text-white">
            Supprimer votre compte
        </Button>
    );
}
