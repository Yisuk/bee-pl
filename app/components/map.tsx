import React, { useEffect } from "react"

export const Map = () => {
  useEffect(() => {
    const { naver } = window
    const map = new naver.maps.Map("map")
  }, [])

  return (
    <div>
      <div id="map" className="w-3/4 h-80"></div>
    </div>
  )
}
