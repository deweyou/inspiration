import { JSX } from "react";

interface Route {
  title: string;
  path: string;
  lazy: () => Promise<{
    element: JSX.Element;
  }>
}

export const ROUTES: Route[] = [
  {
    title: "Home",
    path: "/",
    lazy: async () => {
      const { Home } = await import('##/views/home');
      return {
        element: <Home />,
      };
    },
  },
  {
    title: "Toggle Theme",
    path: "/toggle-theme",
    lazy: async () => {
      const { ToggleTheme } = await import('##/views/toggle-theme');
      return {
        element: <ToggleTheme />,
      };
    },
  }
] as const;