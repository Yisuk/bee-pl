import type { LinksFunction } from "@remix-run/node"
import { Links, LiveReload, Outlet, Scripts } from "@remix-run/react"

import styles from "./styles/tailwind.css"

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <script
          type="text/javascript"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=fttj5enfvf"
        ></script>
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
