import { Button } from "@/components/ui/button";

export default function ButtonsProvider() {
  return (
    <div className="flex flex-col space-y-4">
        <Button variant="default">Continuer avec google</Button>
        <Button variant="default">Continuer avec github</Button>
    </div>
  )
}
