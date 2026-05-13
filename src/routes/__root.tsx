import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { SiteSidebar } from "@/components/SiteSidebar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Logo } from "@/components/Logo";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sculpture — 3 & 4 BHK Duplex Living in Ognaj, Ahmedabad" },
      { name: "description", content: "Sculpture by Vibgyor Reality — luxurious 3 & 4 BHK duplex apartments at Ognaj, S.P. Ring Road, Ahmedabad. 154 units, 21 amenities, 40% open space." },
      { property: "og:title", content: "Sculpture — 3 & 4 BHK Duplex Living in Ognaj, Ahmedabad" },
      { property: "og:description", content: "Sculpture by Vibgyor Reality — luxurious 3 & 4 BHK duplex apartments at Ognaj, S.P. Ring Road, Ahmedabad. 154 units, 21 amenities, 40% open space." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Sculpture — 3 & 4 BHK Duplex Living in Ognaj, Ahmedabad" },
      { name: "twitter:description", content: "Sculpture by Vibgyor Reality — luxurious 3 & 4 BHK duplex apartments at Ognaj, S.P. Ring Road, Ahmedabad. 154 units, 21 amenities, 40% open space." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/Kf4HsNql69gqPr31nui2PNHUNDG2/social-images/social-1778657929170-bg.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/Kf4HsNql69gqPr31nui2PNHUNDG2/social-images/social-1778657929170-bg.webp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen w-full bg-background">
        <SiteSidebar />
        <Logo />
        <div className="md:ml-64 flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
      </div>
    </QueryClientProvider>
  );
}
