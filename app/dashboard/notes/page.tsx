import React from 'react'
import Link from "next/link";
import { buttonVariants } from '@/components/ui/button';
import {getUser} from "@/lib/actionsUsers";
import {getAllNotes} from "@/lib/actionsNotes";
import {Divide, File, FilePenLine} from "lucide-react";
import ButtonDelete from "@/app/components/ButtonDelete";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default async function PageNotes() {

  const user = await getUser();
  const data = await getAllNotes(user?.id as string);

  return (
    <section className='grid items-start gap-y-8'>
      <div className="flex md:items-center md:justify-between flex-col md:flex-row px-2">
        <div className="grid gap-1">
          <h2 className="text-3xl uppercase font-black">Notes</h2>
          <p className="text-lg text-muted-foreground">Ne perdez pas vos idées, prennez des notes</p>
          <div className="w-12 bg-white my-2 mx-1 h-px"></div>
        </div>
      </div>
      <Link href="/dashboard/notes/create" className={buttonVariants()}>Créer une note</Link>
      {data.length < 1 ? (
        <div className="flex min-h-100 flex-col items-center justify-center rounded-md border border-dashed p-3">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-orange-500 bg-opacity-20 mb-4">
            <File className='text-orange-900'></File>
          </div>
          <p className="text-lg text-white">Vous n'avez aucune note</p>
          <p className="text-muted-foreground text-sm">Commencez des maintenant à créer des notes via notre application</p>
          <Button className='bg-orange-500 hover:bg-orange-600 text-white mt-4'>
            <Link href="/dashboard/notes/create">Créer une nouvelle note</Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col space-y-4">
          {data?.map((item, index) => (
            <Card key={index} className="flex items-center justify-between p-4">
              <div>
                <h2 className='text-orange-500 text-xl font-bold'>{item.title}</h2>
                <p className='text-sm text-muted-foreground'>écrit le {new Intl.DateTimeFormat('fr-FR', {
                  dateStyle: "full"
                }).format(new Date(item.createdAt))}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button type="button" className="bg-yellow-500 hover:bg-yellow-600 text-white mt-4 mb-3">
                  <Link href={`notes/note/${item.id}`}>
                  <FilePenLine className='w-4'/>
                  </Link>
                  </Button>
                <ButtonDelete id={item.id} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  )
}
