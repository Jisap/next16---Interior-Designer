import Image from "next/image"
import starShape from "@/public/Images/star-shapp.png"


export const MarqueeItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-8 whitespace-nowrap">
      <h2 className="marquee-text text-5xl font-bold">
        {text}
      </h2>
      <Image
        src={starShape}
        alt="star-shape"
        width={40}
        height={40}
      />
    </div>
  )
}
