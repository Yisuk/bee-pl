import { Outlet, Link } from "@remix-run/react"

export default function JokesRoute() {
  return (
    <div>
      <header>
        <div>
          <h1>
            <Link to="/" title="Remix Jokes" aria-label="Remix Jokes">
              <span>🤪</span>
              <span>J🤪KES</span>
            </Link>
          </h1>
        </div>
      </header>
      <main>
        <div>
          <div>
            <Link to=".">Get a random joke</Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>
              <li>
                <Link to="some-joke-id">Hippo</Link>
              </li>
            </ul>
            <Link to="new">Add your own</Link>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}
