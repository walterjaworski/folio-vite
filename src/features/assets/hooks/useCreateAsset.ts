import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateAssetDTO } from '../components/AssetForm';
import { createAsset } from '../services/assetsService';
import type { Asset } from '../types/asset';
export function useCreateAsset() {
  const queryClient = useQueryClient();

  return useMutation<Asset, Error, CreateAssetDTO>({
    mutationFn: createAsset,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assets'] });
    },
  })
}