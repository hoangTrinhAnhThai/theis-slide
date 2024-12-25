import { slideList } from "@/_data"
import Preview from "./components/preview"
import Editor from "./editor/page"
import AddCard from "./components/add-card"
import View from "./view/page"

export default function Home() {
  return (
    <div className="bg-orange-50 flex gap-4">
      <View />
      <div className="w-[15%]  mt-4">
        <Preview slideList={slideList} />
      </div>
      <div className="w-[72%] flex flex-col gap-10 mx-auto justify-items-center justify-center mt-4">
        {slideList.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            <Editor />
            <AddCard />
          </div>
        ))}
      </div>
    </div>
  )
}
