import { createFileRoute } from "@tanstack/react-router";
import { notFound } from "@tanstack/react-router";

import { Link } from "@tanstack/react-router";

export function NotFound({ children }: { children?: any }) {
  return (
    <div className="space-y-2 p-2">
      <div className="text-gray-600 dark:text-gray-400">
        {children || <p>The page you are looking for does not exist.</p>}
      </div>
      <p className="flex items-center gap-2 flex-wrap">
        <button
          onClick={() => window.history.back()}
          className="bg-emerald-500 text-white px-2 py-1 rounded uppercase font-black text-sm">
          Go back
        </button>
        <Link
          to="/"
          className="bg-cyan-600 text-white px-2 py-1 rounded uppercase font-black text-sm">
          Start Over
        </Link>
      </p>
    </div>
  );
}

function BandErrorComponent({ error }: { error: unknown }) {
  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">Band Error</h4>
      <div className="text-sm">{(error as Error).message}</div>
      <div></div>
    </div>
  );
}

type Band = {
  name: string;
  slug: string;
};

export const Route = createFileRoute("/bands/$bandSlug")({
  loader: async ({ params: { bandSlug } }) => {
    try {
      // Reslove band
      // return new Response('User not found', {
      //             status: 404,
      //           })
      if (bandSlug == "dissonance-in-the-void") {
        return {
          name: "Dissonance in the Void",
          slug: "dissonance-in-the-void",
        } as Band;
      } else {
        throw notFound();
      }
    } catch {
      throw new Error("Failed to fetch band dude");
    }
  },
  //errorComponent: BandErrorComponent,
  component: BandProfileComponent,
  notFoundComponent: () => {
    return <NotFound>Band not found</NotFound>;
  },
});

function BandProfileComponent() {
  const band = Route.useLoaderData();

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{band.name}</h4>
      <div className="text-sm">{band.slug}</div>
      <div></div>
    </div>
  );
}
