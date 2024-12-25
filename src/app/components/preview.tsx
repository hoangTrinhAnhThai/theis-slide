"use client"
import { SlideType } from "@/_types"
import Image from "next/image"
import React from "react"

type ContentProps = {
  slideList: SlideType[]
}

export default function Preview({ slideList }: ContentProps) {
  return (
    <div className="image-list w-[250px] flex flex-col max-h-[85vh] overflow-y-auto bg-white rounded scrollbar-custom">
      {slideList.map((item, idx) => (
        <Image
          src={item.src}
          alt={item.content}
          key={idx}
          width={200}
          height={120}
          className="my-2 flex-shrink-0 rounded border border-gray-200 mx-auto "
        />
      ))}
    </div>
  )
}
