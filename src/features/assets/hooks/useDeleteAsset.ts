import { deleteAsset } from '@assets/services/assetsService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
export function useDeleteAsset() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAsset,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assets'] });
    },
  })
}
