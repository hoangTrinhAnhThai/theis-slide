import { Github, House, Palette, TvMinimalPlay } from "lucide-react"
import React from "react"

export default function Header() {
  return (
    <div className="flex justify-between py-4 px-6">
      <div className="left-side">
        <House />
      </div>
      <div className="right-side flex gap-10">
        <Palette className="hover:text-purple-900 cursor-pointer" />
        <Github className="hover:text-purple-900 cursor-pointer" />
        <TvMinimalPlay className="hover:text-purple-900 cursor-pointer" />
      </div>
    </div>
  )
}
