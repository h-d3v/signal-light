"use client";
import Image from "next/image";
import CountUp from "react-countup";
import Header from "../components/Header";

export default function Home() {
  return (
    <section className="text-black body-font lg:pt-20">
      <Header />
      <div className="container px-5 pt-40 mx-auto lg:px-4 lg:py-4">
        <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 className="mb-2 text-6xl font-bold tracking-tighter lg:text-8xl md:text-7xl">
            <span>Air Traffic Control </span>
            <br className="hidden lg:block"></br>
            Signal Light Gun
          </h1>
          <br></br>
          <p className="mx-auto  text-xl font-normal leading-relaxed  lg:w-2/3">
            The NEW 902 LED signal light gun combined with the NEW model 952
            charger are the latest addition to our line of products delivering
            exceptional quality and performance.
          </p>
        </div>
      </div>
      {/* <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
        <Image
          width={1920}
          height={1080}
          className="object-cover object-center w-full mb-10 border-gray-200 dark:border-gray-900 g327 border rounded-lg shadow-md"
          alt="hero"
          src="/images/signal_light_hero_image.jpg"
        ></Image>
      </div> */}
      <section className="body-font">
        {/* REMOVING COUNT SECTION
         <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
                
                  <CountUp end={940} redraw={true}
                  startOnMount={false} // Prevent counting on initial render
                  enableScrollSpy // Automatically starts counting when in view
                  scrollSpyDelay={100} // Optional: delay behtmlFore starting
                  >
                    {({ countUpRef, start }) => (
                        <span ref={countUpRef} />
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
                  <CountUp end={740} redraw={true}
                  startOnMount={false} // Prevent counting on initial render
                  enableScrollSpy // Automatically starts counting when in view
                  scrollSpyDelay={100} // Optional: delay behtmlFore starting
                  >
                    {({ countUpRef, start }) => (
                        <span ref={countUpRef} />
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Subscribes</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
                  <CountUp end={315} redraw={true}
                  startOnMount={false} // Prevent counting on initial render
                  enableScrollSpy // Automatically starts counting when in view
                  scrollSpyDelay={100} // Optional: delay behtmlFore starting
                  >
                    {({ countUpRef, start }) => (
                        <span ref={countUpRef} />
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
          </div>
        </section> */}
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="Signal Light Gun"
              className="object-cover object-center h-full w-full"
              src="./images/signal_gun.jpg" // Replace with the actual path to the gun image
            />
          </div>

          {/* Description Section */}
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            {/* Signal Light Gun Features */}
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className=" text-2xl title-font font-medium mb-3">
                  Signal Light Gun Model 902
                </h2>
                <p className=" leading-relaxed text-lg mb-4">
                  Exceptional performance and quality with upgraded technology,
                  greater range of visibility, and a portable, ergonomic design.
                </p>
                <ul className=" list-disc ml-5 text-lg">
                  <li>
                    Visibility Range: Over 8km (4nm) in clear daytime conditions
                  </li>
                  <li>
                    Light Colors: Red, Green, and White (aviation signaling
                    standards)
                  </li>
                  <li>Light Intensity: {">"}200,000 candelas at beam center</li>
                  <li>Weight: 1.90 kg (4.18 lbs.) with battery</li>
                  <li>Power: 3.6V, 3Ah Ni-MH rechargeable battery</li>
                  <li>Light Source: High-powered LEDs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            {/* Image Section */}
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img
                alt="Signal Light Gun"
                className="object-cover object-center h-full w-full"
                src="./images/charger.jpg" // Replace with the actual path to the gun image
              />
            </div>
            {/* Description Section */}
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            {/* Charger Features */}
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-2xl title-font font-medium mb-3">
                  Charger Model 952C
                </h2>
                <p className="leading-relaxed text-lg mb-4">
                  Efficient charging with microcontroller control htmlFor
                  sustainable Ni-MH batteries.
                </p>
                <ul className=" list-disc ml-5 text-lg">
                  <li>Power Input: 100-240 VAC, 50-60 Hz, 1.5A</li>
                  <li>Power Output: 24V, 2.55A</li>
                  <li>Charge Time: Approximately 2 hours</li>
                  <li>
                    Size: 29.21 x 25.4 x 8.25 cm (11.5 x 10 x 3.25 inches)
                  </li>
                  <li>Weight: 2.6 kg (5.73 lbs.)</li>
                  <li>Battery Type: 3.6V, 3Ah Ni-MH</li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className="body-font relative" id="contact">
        <div className="container px-5 pt-24 pb-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-2xl font-semibold title-font mb-4 ">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-semibold">
              Contact us for additional information or quotation
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              {/* <div className="p-2 w-1/2">
                 <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-white font-semibold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-black bg-white border-0 py-2 px-8 rounded text-lg">
                  Send
                </button>
              </div> */}
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="">info@atiavionics.com</a>
                <p className="leading-normal my-5">
                  Laval, Quebec, Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
