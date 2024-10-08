import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import TailwindStyles from "./tailwind.css?url";

export const meta: MetaFunction = () => [
  {
    title: 'Omar Villalobos - Web Developer',
    "og:title": 'Omar Villalobos - Web Developer',
    description: 'Hi, I’m Omar, a Full-Stack Software Engineer with experience building scalable applications using React, Remix, TypesScript, Golang, NodeJS and modern web technologies.',
    "og:description": "Hi, I’m Omar, a Full-Stack Software Engineer with experience building scalable applications using React, Remix, TypesScript, Golang, NodeJS and modern web technologies.",
    "twitter:card": "summary_large_image",
    "og:url": `https://omarvillam.com/memoji.png`,
  },
];

export const links = () => [
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "stylesheet", href: TailwindStyles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <Meta />
        <Links />
      </head>
      <body className="font-sans bg-black text-white">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
