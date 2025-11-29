import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ModeToggle } from "@/components/mode-toggle";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="border-b px-4 h-12 flex justify-between text-lg items-center">
        <div className="flex gap-4 text-muted-foreground font-mono text-sm">
          <Link
            to="/"
            activeProps={{
              className: "text-foreground font-bold",
            }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>{" "}
          <Link
            to="/about"
            activeProps={{
              className: "text-foreground font-bold",
            }}
          >
            About
          </Link>
        </div>
        <ModeToggle />
      </div>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
