"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Trash2 } from "lucide-react";
import { Input } from '@/components/ui/input';
import { deleteNote } from '@/lib/actionsNotes';

interface ButtonDeleteProps {
    id: string;
}

export default function ButtonDelete({id}: ButtonDeleteProps) {
  return (
  <form action={deleteNote}>
    <Input hidden name="id" value={id}></Input>
    <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white mt-1"><Trash2 /></Button>
  </form>
  )
}
