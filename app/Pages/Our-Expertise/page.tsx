

import Image from "next/image"
import expertise1 from "@/public/Images/expertise-1.jpg"
import expertise2 from "@/public/Images/expertise-2.jpg"
import expertise3 from "@/public/Images/expertise-3.jpg"


const expertiseData = [
  {
    id: 1,
    title: "Modern facade",
    desc: "Sleek lines meet reflective glass",
    image: expertise1
  },
  {
    id: 2,
    title: "Structural craft",
    desc: "Building frameworks with precision",
    image: expertise2
  },
  {
    id: 3,
    title: "Project lead",
    desc: "Guiding vision through expertise",
    image: expertise3
  }
]


const Expertise = () => {
  return (
    <>
      <div className='px-[8%] lg:px-[16%] py-20 pt-30' id="Expertise">
        <div className='text-center'>
          <span className='text-text-light text-lg uppercase Rethink'>
            Our distintive expertise
          </span>

          <h2 className='text-5xl lg:text-8xl text-white Rethink font-bold mt-5'>
            Designing and shaping unique spaces
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-15 gap-8'>
          {expertiseData.map((item) => (
            <div key={item.id} className=" group border border-gray-200/20 rounded-md text-center p-6 overflow-hidden cursor-pointer">
              <h3 className="text-2xl Rethink font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-500 DmSans mb-5">
                {item.desc}
              </p>
              <div className="overflow-hidden rounded mb-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="mx-auto rounded transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              <button className="Rethink font-medium text-lg cursor-pointer flex justify-center items-center w-full gap-2 border py-3 border-gray-200/20 hover:bg-gray-200/10 transition-all duration-300 ease-out">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Expertise