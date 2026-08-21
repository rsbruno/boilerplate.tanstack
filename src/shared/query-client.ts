import { QueryClient } from "@tanstack/react-query";

let browserQueryClient: QueryClient | undefined;

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60_000
      }
    }
  });
}

export function getQueryClient() {
  if (typeof document === "undefined") return createQueryClient();
  if (!browserQueryClient) browserQueryClient = createQueryClient();

  return browserQueryClient;
}
