"use server"

import {prisma} from "@/lib/prisma";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const getUser = async () => {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.id) {
        redirect('..//');
    }
    const id = session.user.id as string;
    const user = await prisma.user.findUnique({
        where: {id}
    })
    return user;
}

export const updateUser = async (formData: FormData) => {
    try {
        const userName = formData.get('name') as string;
        const id = formData.get('id') as string;

        if (!userName !== null) {
            await prisma.user.update({
                where: {id},
                data: {name: userName}
            })
        }
    } catch(error) {
        console.error("Error updating user:", error);
    } finally {
        revalidatePath('/')
    }
}