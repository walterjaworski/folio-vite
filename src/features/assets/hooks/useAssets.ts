import { getAssets } from "@assets/services/assetsService";
import type { Asset } from "@assets/types/asset";
import { useQuery } from "@tanstack/react-query";

export function useAssets() {
  return useQuery<Asset[]>({
    queryKey: ["assets"],
    queryFn: getAssets,
    staleTime: 1000 * 60, // 1 minute
  })
}
