import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ModeToggle } from "@/components/mode-toggle";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="fixed top-4 right-4 z-10">
        <ModeToggle />
      </div>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
