import { Card, CardContent } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="grid min-h-screen place-items-center p-4">
      <Card className="w-full max-w-2xl">
        <CardContent>
          <h1 className="rounded-md border-2 border-orange-500 p-4 text-center text-2xl font-bold uppercase">
            Bub for fun
          </h1>
        </CardContent>
      </Card>
    </div>
  );
}
