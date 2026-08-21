import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";

import { getQueryClient } from "../shared/query-client";
import { routeTree } from ".";

export function getRouter() {
  const queryClient = getQueryClient();

  const router = createTanStackRouter({
    defaultPreloadStaleTime: 0,
    defaultPreload: "intent",
    context: { queryClient },
    scrollRestoration: true,
    routeTree
  });

  setupRouterSsrQueryIntegration({ queryClient, router });

  return router;
}
