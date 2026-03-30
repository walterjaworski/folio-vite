import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateAsset } from '../services/assetsService';
export function useUpdateAsset() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAsset,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assets'] });
    },
  })
}