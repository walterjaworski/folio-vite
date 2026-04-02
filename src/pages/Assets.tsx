import { PageHeader } from "@/components"
import { AssetsList, WalletSummary } from "@assets/components"
import { Badge } from "@ui/badge"
import { Button } from "@ui/button"
import { PlusIcon, TrendingUp } from "lucide-react"

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
      <WalletSummary>
        <WalletSummary.Card
          title="Patrimônio Total"
          footer={
            <div className="flex items-center gap-2">
              <Badge className="bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400 border-none shadow-none">
                <TrendingUp size={14} />
                2.4%
              </Badge>
              este mês
            </div>
          }
        >
          <span className="text-3xl font-semibold">
            R$ 142.580,22
          </span>
        </WalletSummary.Card>
        <WalletSummary.Card
          title="Total de Ativos"
          footer={<span className="text-sm text-muted-foreground">Diversificado em 4 setores</span>}
        >
          <span className="text-3xl font-semibold">
            12
          </span>
        </WalletSummary.Card>
        <WalletSummary.Card
          title="Proventos Estimados"
          footer={<span className="text-sm text-muted-foreground">Previsão para os próximos 30 dias</span>}
        >
          <span className="text-3xl font-semibold">
            R$ 840,00
          </span>
        </WalletSummary.Card>
      </WalletSummary>
      <AssetsList />
    </>
  )
}
