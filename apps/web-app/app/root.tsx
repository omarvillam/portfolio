import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import TailwindStyles from "./tailwind.css?url";

export const links = () => [
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "stylesheet", href: TailwindStyles },
];

export function Layout() {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>Omar Villalobos - Software Developer</title>

      <meta property="og:title" content="Omar Villalobos - Software Developer"/>
      <meta property="og:description"
            content="I'm Omar Villalobos, a full stack software developer with experience building applications with Node.js/TypeScript, Remix/Next.js, and Golang."/>
      <meta property="og:image" content="https://omarvillam.com/memoji.png"/>
      <meta property="og:url" content="https://omarvillam.com"/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Omar Villalobos - Software Developer"/>
      <meta name="twitter:description"
            content="I'm Omar Villalobos, a full stack software developer with experience building applications with Node.js/TypeScript, Remix/Next.js, and Golang."/>
      <meta name="twitter:image" content="https://omarvillam.com/memoji.png"/>
      <Meta/>
      <Links/>
    </head>
    <body className="font-sans bg-black text-white">
    <Outlet/>
    <ScrollRestoration/>
    <Scripts/>
    </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
