import { Link } from "@remix-run/react"
import { Map } from "~/components/map"

export default function IndexRoute() {
  return (
    <div>
      <div>
        <div>
          <Map />
        </div>
      </div>
    </div>
  )
}
