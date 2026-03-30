import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAsset } from '../services/assetsService';
export function useDeleteAsset() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAsset,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assets'] });
    },
  })
}