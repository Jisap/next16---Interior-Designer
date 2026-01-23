

import { MarqueeItem } from "@/app/Components/MarqueeItem"





const MarqueeSlider1 = () => {
  return (
    <div className='marquee bg-white py-6 overflow-hidden'>
      <div className='marquee__text flex items-center gap-10'>
        <MarqueeItem text="Homes built for life" />
        <MarqueeItem text="Confort crafted for living" />
        <MarqueeItem text="Spaces that grow with you" />
        <MarqueeItem text="Designed for lifelong confort" />
        <MarqueeItem text="Homes built for life" />
        <MarqueeItem text="Confort crafted for living" />
        <MarqueeItem text="Spaces that grow with you" />
        <MarqueeItem text="Designed for lifelong confort" />
      </div>
    </div>
  )
}

export default MarqueeSlider1