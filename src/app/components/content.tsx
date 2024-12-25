import { SlideType } from "@/_types"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import React from "react"

type ContentProps = {
  slideList: SlideType[]
}

export default function Content({ slideList }: ContentProps) {
  return (
    <div className="main-content w-[80vw] h-[75vh] bg-gray-900 rounded relative mb-4">
      <ChevronLeft />
      {slideList
        .filter((_, idx) => idx === 2)
        .map((slide, idx) => (
          <div key={idx} className="relative w-full h-full">
            <Image
              src={slide.src}
              alt={slide.content}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      <ChevronRight />
    </div>
  )
}
