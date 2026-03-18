import { useQuery } from "@tanstack/react-query";
import { getAssets } from "../services/assetsService";
import type { Asset } from "../types/asset";

export function useAssets() {
  return useQuery<Asset[]>({
    queryKey: ["assets"],
    queryFn: getAssets,
    staleTime: 1000 * 60, // 1 minute
  })
}