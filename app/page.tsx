"use client";
import Image from "next/image";
import {Typewriter, Cursor} from "react-simple-typewriter";
import ButtonsProvider from "./components/ButtonsProvider";

export default function Home() {
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
    </section>
    </>
  );
}
