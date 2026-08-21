import { createFileRoute } from "@tanstack/react-router";

import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: HomePage
});

function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <Typography variant="medium" size="2xl" as="h1">
        Imobiliaria
      </Typography>
      <Button text="Começar" />
    </main>
  );
}
