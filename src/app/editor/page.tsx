"use client"
import { BlockNoteView } from "@blocknote/mantine"
import { useCreateBlockNote } from "@blocknote/react"
import React from "react"
import "@blocknote/mantine/style.css"
import "@blocknote/core/fonts/inter.css"

export default function Editor() {
  const editor = useCreateBlockNote()
  return (
    <BlockNoteView
      editor={editor}
      className="h-auto min-h-[300px] bg-white w-full mx-auto pt-4"
    />
  )
}
