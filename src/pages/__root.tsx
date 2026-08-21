import type { QueryClient } from "@tanstack/react-query";
import type { ReactNode } from "react";

import { createRootRouteWithContext, HeadContent, Scripts, Outlet, Link } from "@tanstack/react-router";
import { Toaster } from "sonner";

import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

import appCss from "../styles/global.css?url";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        content: "width=device-width, initial-scale=1",
        name: "viewport"
      },
      {
        title: "Imobiliaria"
      }
    ],
    links: [
      {
        href: appCss as unknown as string,
        rel: "stylesheet"
      },
      {
        href: "/favicon.ico",
        rel: "icon"
      }
    ]
  }),
  errorComponent: ({ reset }) => <ErrorScreen reset={reset} />,
  notFoundComponent: NotFoundScreen,
  shellComponent: RootDocument,
  component: RootComponent
});

function ErrorScreen({ reset }: { reset?: () => void }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <Typography variant="medium" size="2xl" as="h1">
        Algo deu errado
      </Typography>
      <Typography color="500" as="p">
        Tente novamente ou volte ao início.
      </Typography>
      <div className="flex items-center gap-3">
        <Button text="Tentar de novo" onClick={reset} />
        <Button<typeof Link> text="Voltar ao início" appearance="outlined" as={Link} to="/" />
      </div>
    </div>
  );
}

function NotFoundScreen() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <Typography variant="medium" size="2xl" as="h1">
        Página não encontrada
      </Typography>
      <Typography color="500" as="p">
        O endereço acessado não existe.
      </Typography>
      <Button<typeof Link> text="Voltar ao início" as={Link} to="/" />
    </div>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
