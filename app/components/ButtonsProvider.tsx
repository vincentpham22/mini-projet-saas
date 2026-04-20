import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function ButtonsProvider() {
  return (
    <div className="flex flex-col md:flex-row gap-4 pt-5">
      <Button
        onClick={() => signIn("google")}
        className="flex items-center gap-2 px-6 py-5 rounded-xl bg-white text-black border border-gray-200 hover:bg-gray-100 shadow-sm font-semibold transition-all"
      >
        <FaGoogle />
        Continuer avec Google
      </Button>
      <Button
        onClick={() => signIn("github")}
        className="flex items-center gap-2 px-6 py-5 rounded-xl bg-gray-900 text-white hover:bg-gray-800 shadow-sm font-semibold transition-all"
      >
        <FaGithub />
        Continuer avec GitHub
      </Button>
    </div>
  )
}
