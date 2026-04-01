import { updateAsset } from '@assets/services/assetsService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
export function useUpdateAsset() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAsset,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assets'] });
    },
  })
}
