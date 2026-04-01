import { PageHeader } from "@/components"
import { AssetsList } from "@assets/components"
import { Button } from "@ui/button"
import { PlusIcon } from "lucide-react"

export default function AssetsPage() {
  return (
    <>
      <PageHeader
        title="Meus Ativos"
        description="Gerencie seu portfólio de investimentos com clareza e serenidade."
        action={
          <Button variant="brand" size="brand">
            <PlusIcon className="size-5" />
            Adicionar Ativo
          </Button>
        }
      />
      <AssetsList
      />
    </>
  )
}
