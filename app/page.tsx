"use client";
import { Typewriter, Cursor } from "react-simple-typewriter";
import ButtonsProvider from "./components/ButtonsProvider";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Notebook, Shield, Zap } from "lucide-react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "authenticated" && session) {
    redirect("/dashboard/notes");
  }

  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center flex-col gap-4 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black uppercase flex items-center gap-2 flex-wrap justify-center">
          <Typewriter typeSpeed={50} deleteSpeed={50} words={["Bienvenue", "Welcome", "Willkommen", "Bienvenido"]} loop />
          <span><Cursor cursorStyle="|" /></span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-center">
          Organisez vos idées, gérez vos notes et restez productif, le tout en un seul endroit.
        </p>

        <ButtonsProvider />

        <p className="text-xs text-muted-foreground mb-15">Connexion sécurisée via Google ou GitHub</p>

        <div className="flex-row md:flex md:space-x-3 space-y-3">
          {[
            {
              icon: Notebook,
              title: "Prenez des notes",
              description: "Créez, modifiez et organisez vos notes facilement depuis votre tableau de bord.",
            },
            {
              icon: Zap,
              title: "Rapide & intuitif",
              description: "Interface épurée conçue pour aller à l'essentiel sans perdre de temps.",
            },
            {
              icon: Shield,
              title: "Sécurisé",
              description: "Vos données sont liées à votre compte OAuth. Aucun mot de passe à retenir.",
            },
          ].map((feature) => (
            <div key={feature.title} className="flex flex-row border border-border rounded-xl p-3 bg-card items-center gap-3 h-full max-w-80">
              <div className="w-8 h-8 shrink-0 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <feature.icon className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold text-sm">{feature.title}</h3>
                <p className="text-muted-foreground text-xs">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
