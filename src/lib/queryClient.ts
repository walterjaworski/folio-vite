import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minuto (evita refetch toda hora)
      refetchOnWindowFocus: false, // Não refaz a consulta ao focar a janela
    }
  }
})
