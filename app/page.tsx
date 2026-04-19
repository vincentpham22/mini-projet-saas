"use client";
import Image from "next/image";
import {Typewriter, Cursor} from "react-simple-typewriter";
import ButtonsProvider from "./components/ButtonsProvider";
import { useSession, signIn, signOut } from "next-auth/react";
import {redirect} from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession()

  if(session){
    redirect("/dashboard/notes")
  }

  return (
    <>
    <section className="w-full h-screen flex items-center justify-center flex-col gap-2">
      <Image src="/vercel.svg" alt="Logo" width={100} height={100} className="mb-4 object-contain" />
      <h1 className="text-4xl md:text-6xl font-black mb-2 text-center uppercase flex items-center">
        <Typewriter typeSpeed={50} deleteSpeed={50} words={["Bienvenue", "Welcome", "Willkommen", "Vienvenido"]} loop/>
        <span><Cursor cursorStyle="|" /></span>
      </h1>
      <p className="my-2 text-center">Rejoignez une aventure de codeur</p>
      <ButtonsProvider />

      <div className="mt-4 p-4 rounded-lg border text-sm">
        {status === "loading" && <p>Chargement...</p>}
        {status === "unauthenticated" && (
          <button onClick={() => signIn("google")} className="px-4 py-2 bg-blue-600 text-white rounded">
            Se connecter avec Google
          </button>
        )}
        {status === "authenticated" && (
          <div className="flex flex-col items-center gap-2">
            <p>Connecté : <strong>{session.user?.email}</strong></p>
            <button onClick={() => signOut()} className="px-4 py-2 bg-red-500 text-white rounded">
              Se déconnecter
            </button>
          </div>
        )}
      </div>
    </section>
    </>
  );
}
