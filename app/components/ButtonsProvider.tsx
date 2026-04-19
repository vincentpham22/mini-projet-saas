import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function ButtonsProvider() {
  return (
    <div className="flex flex-col space-y-4">
        <Button onClick={() => signIn("google")}>Continuer avec google</Button>
        <Button onClick={() => signIn("github")}>Continuer avec github</Button>
    </div>
  )
}
