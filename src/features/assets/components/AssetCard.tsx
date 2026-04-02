import { cn } from "@/lib/utils";
import type { Asset } from "@assets/types/asset";
import { calculateAssetMetrics } from "@assets/utils/calculateAssetMetrics";
import { Avatar, AvatarFallback } from "@ui/avatar";
import { Card, CardContent } from "@ui/card";
import { ChevronDownIcon, ChevronUpIcon, MinusIcon, PlusIcon } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

interface IAssetCardProps {
  asset: Asset;
  variant?: 'default' | 'compact';
}

export default function AssetCard({ asset }: IAssetCardProps) {
  const navigate = useNavigate();

  const isPositive = (asset.change ?? 0) >= 0;

  const { totalCurrent } = calculateAssetMetrics(asset);

  return (
    <Card className="border-none ring-0 shadow-none">
      <CardContent className="grid grid-cols-5 flex-1 items-center text-right">
        <div className="flex items-center gap-4 text-left">
          <Avatar size="2xl">
            <AvatarFallback>
              {asset.symbol}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-sm">
            <NavLink to={`/assets/${asset.id}`} className="hover:underline">
              <span className="text-base font-semibold">{asset.name}</span>
            </NavLink>
            <span className="text-xs">{asset.exchange}</span>
          </div>
        </div>
        <div>
          <span className="text-base font-semibold">{asset.quantity}</span>
        </div>
        <div>
          <span className="text-base font-semibold">R$ {asset.price.toFixed(2)}</span>
        </div>
        <div>
          <span className="text-base font-semibold">R$ {totalCurrent.toFixed(2)}</span>
        </div>
        <div className={cn(
          "flex justify-end items-center font-semibold text-base",
          isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
        )}>
          {isPositive ? (
            <>
              <ChevronUpIcon className="size-3" />
              <PlusIcon className="size-3" />
            </>
          ) : (
            <>
              <ChevronDownIcon className="size-3" />
              <MinusIcon className="size-3" />
            </>
          )
          }
          <span className="text-base font-semibold">
            {Math.abs(asset.change ?? 0).toFixed(2)}%
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
