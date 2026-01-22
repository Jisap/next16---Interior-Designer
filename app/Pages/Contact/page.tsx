"use client"

const Contact = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 contact flex justify-center md:justify-end" id="contact">
        <div className="bg-white w-110 p-10 rounded-md">
          <h2 className="text-black text-5xl font-bold Rethink">
            Have questions? Get in touch
          </h2>

          <div className="space-y-5 pt-10">
            <div className="">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-500 w-full px-4 py-3 text-black Rethink font-medium hover:border-prim outline-none rounded-xl"
              />
            </div>
            <div className="">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-500 w-full px-4 py-3 text-black Rethink font-medium hover:border-prim outline-none rounded-xl"
              />
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-500 w-full px-4 py-3 text-black Rethink font-medium hover:border-prim outline-none rounded-xl"
              />
            </div>
            <div className="">
              <textarea
                rows={5}
                placeholder="Message"
                className="border border-gray-500 w-full px-4 py-3 text-black Rethink font-medium hover:border-prim outline-none rounded-xl"
              />
            </div>

            <button className="btn w-full text-white Rethink text-xl py-3 rounded-md font-semibold bg-prim transition-all duration-300 cursor-pointer hover:bg-[#a99246]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact