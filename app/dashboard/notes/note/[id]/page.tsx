import React from 'react'
import Link from "next/link";
import { title } from 'process';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button'
import { getNote, updateNote } from "@/lib/actionsNotes";


interface Params {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

interface UpdatePageProps {
    params: Promise<Params>;
}

export default async function PageNote({ params }: UpdatePageProps) {
    const { id } = await params;
    const note = await getNote(id);

    return (
        <Card>
            <form action={updateNote} className='w-full'>
                <Input type="hidden" name='id' value={note?.id as string} />
                <CardHeader>
                    <CardTitle>Nouvelle note</CardTitle>
                    <CardDescription>
                        Quelques mots pour ne pas oublier
                    </CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col gap-y-5'>
                    <div className="gap-y-2 flex flex-col">
                        <Label htmlFor="title">Titre</Label>
                        <Input defaultValue={note?.title as string} type="text" name='title' id='title' required placeholder='Titre de votre note' />
                    </div>
                    <div className="gap-y-2 flex flex-col">
                        <Label htmlFor="description">Description</Label>
                        <Textarea defaultValue={note?.description as string} name='description' id='description' required placeholder='Description de votre note' />
                    </div>
                    <div className="gap-y-2 flex flex-col">
                        <Label htmlFor="completed">En attente | Complet</Label>
                        <Input defaultChecked={note?.completed as boolean} type="checkbox" name='completed' id='completed' className='w-6 cursor-pointer' />
                    </div>
                </CardContent>
                <CardFooter className='flex items-center justify-between'>
                    <Link href="/dashboard/notes" className="inline-flex items-center justify-center rounded-lg px-2.5 h-8 bg-red-500 hover:bg-red-600 text-white text-sm font-medium">Annuler</Link>
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
                        Modifier note
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
