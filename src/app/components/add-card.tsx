import { ChevronDown, Plus } from "lucide-react"
import React from "react"

export default function AddCard() {
  return (
    <div className="flex justify-between items-center w-fit bg-white rounded px-4 py-2 gap-4 mx-auto">
      <button className="hover:text-purple-700">
        <Plus />
      </button>
      <button className="hover:text-purple-700">
        <ChevronDown />
      </button>
    </div>
  )
}
