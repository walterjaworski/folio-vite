import type { CreateAssetDTO } from '@assets/components/AssetForm';
import { createAsset } from '@assets/services/assetsService';
import type { Asset } from '@assets/types/asset';
import { useMutation, useQueryClient } from '@tanstack/react-query';
export function useCreateAsset() {
  const queryClient = useQueryClient();

  return useMutation<Asset, Error, CreateAssetDTO>({
    mutationFn: createAsset,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assets'] });
    },
  })
}
