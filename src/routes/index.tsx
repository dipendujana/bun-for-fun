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
          <h1 className="text-2xl text-center font-bold uppercase border-2 border-orange-500 p-4 rounded-md">Bub for fun</h1>
        </CardContent>
      </Card>
    </div>
  );
}
