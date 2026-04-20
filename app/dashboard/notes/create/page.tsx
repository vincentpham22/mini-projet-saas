import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button'
import Link from "next/link";
import { createNote } from "@/lib/actionsNotes";
import React from 'react'

export default function CreatePage() {
  return (
    <Card className='p-5'>
      <form action={createNote} className='w-full'>
      <CardHeader className='mb-10'>
        <CardTitle>Nouvelle note</CardTitle>
        <CardDescription>
          Quelques mots pour ne pas oublier
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-y-5'>
        <div className="gap-y-2 flex flex-col">
          <Label htmlFor="title">Titre</Label>
          <Input type="text" name='title' id='title' required placeholder='Titre de votre note' />
        </div>
        <div className="gap-y-2 flex flex-col">
          <Label htmlFor="description">Description</Label>
          <Textarea name='description' id='description' required placeholder='Description de votre note' />
        </div>
        <div className="gap-y-2 flex flex-row gap-5">
          <Label htmlFor="completed">En attente | Complété</Label>
          <Input type="checkbox" name='completed' id='completed' className='w-6 cursor-pointer'/>
        </div>
      </CardContent>
      <CardFooter className='flex items-center justify-between mt-3'>
        <Link href="/dashboard/notes" className="inline-flex items-center justify-center rounded-lg px-2.5 h-8 bg-red-500 hover:bg-red-600 text-white text-sm font-medium">Annuler</Link>
        <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
          Créer note
        </Button>
      </CardFooter>
      </form>
    </Card>
  )
}
