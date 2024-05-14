import Image from "next/image";

export default function Articles() {
  return (
    <section>
      <div className="mx-8 my-6">
        <div className="space-y-4 text-center ">
          <h4 className="subtitle">our articles</h4>
          <h2 className="title">Get insights and inspiration</h2>
        </div>

        <ul className="mt-16 mb-12 grid grid-cols-3 grid-flow-col gap-10">
          <li className="relative">
            <div className="relative top-0 right-0 h-full w-full bg-white left-0 bottom-0 p-3 z-20 rounded-2xl border">
              <div className="flex flex-col items-center space-y-3">
                <Image
                  src="/assets/image2.png"
                  alt="woman"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto border border-black rounded-lg overflow-hidden"
                />
                <div className="mx-2">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm capitalize">Time & productivity</h5>
                    <div className="border border-greyShade2 p-[3px] space-x-2 rounded-full flex items-center">
                      <Image
                        src="/assets/mdi_clock-outline.png"
                        alt="arrow"
                        width={12}
                        height={12}
                        className="opacity-80"
                      />
                      <span className="text-greyShade text-[10px] opacity-80">
                        12 min
                      </span>
                    </div>
                  </div>
                  <p className="text-xs xl:text-sm font-subheadingFont mt-3 text-greyShade">
                    Dive into a world of inspiration, where and insightful
                    articles, practical tools, and there supportive community
                    await you...
                  </p>

                  <button className="w-full font-subheadingFont justify-center mt-6 flex items-center text-xs bg-redish py-2 text-white rounded-full">
                    <span>Read Now</span>
                    <span className="ml-1">
                      <Image
                        src="/assets/ooui_next-ltr (1).png"
                        alt="arrow"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto h-auto"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute z-10 w-full h-full rounded-2xl border top-[6px] right-[6px]"></div>
          </li>
          <li className="relative">
            <div className="relative top-0 right-0 h-full w-full bg-white left-0 bottom-0 p-3 z-20 rounded-2xl border">
              <div className="flex flex-col items-center space-y-3">
                <Image
                  src="/assets/image3.png"
                  alt="woman"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto border border-black rounded-lg overflow-hidden"
                />
                <div className="mx-2">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm capitalize">adulting habits</h5>
                    <div className="border border-greyShade2 p-[3px] space-x-2 rounded-full flex items-center">
                      <Image
                        src="/assets/mdi_clock-outline.png"
                        alt="arrow"
                        width={12}
                        height={12}
                        className="opacity-80"
                      />
                      <span className="text-greyShade text-[10px] opacity-80">
                        24 min
                      </span>
                    </div>
                  </div>
                  <p className="text-xs xl:text-sm font-subheadingFont mt-3 text-greyShade">
                    Dive into a world of inspiration, where and insightful
                    articles, practical tools, and there supportive community
                    await you...
                  </p>

                  <button className="w-full font-subheadingFont justify-center mt-6 flex items-center text-xs border border-redish py-2 text-redish rounded-full">
                    <span>Read Now</span>
                    <span className="ml-1">
                      <Image
                        src="/assets/ooui_next-ltr.png"
                        alt="arrow"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto h-auto"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute z-10 w-full h-full rounded-2xl border top-[6px] right-[6px]"></div>
          </li>
          <li className="relative">
            <div className="relative top-0 right-0 h-full w-full bg-white left-0 bottom-0 p-3 z-20 rounded-2xl border">
              <div className="flex flex-col items-center space-y-3">
                <Image
                  src="/assets/image1.png"
                  alt="woman"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto border border-black rounded-lg overflow-hidden"
                />
                <div className="mx-2">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm capitalize">change the plan</h5>
                    <div className="border border-greyShade2 p-[3px] space-x-2 rounded-full flex items-center">
                      <Image
                        src="/assets/mdi_clock-outline.png"
                        alt="arrow"
                        width={12}
                        height={12}
                        className="opacity-80"
                      />
                      <span className="text-greyShade text-[10px] opacity-80">
                        16 min
                      </span>
                    </div>
                  </div>
                  <p className="text-xs xl:text-sm font-subheadingFont mt-3 text-greyShade">
                    Dive into a world of inspiration, where and insightful
                    articles, practical tools, and there supportive community
                    await you...
                  </p>

                  <button className="w-full font-subheadingFont justify-center mt-6 flex items-center text-xs border border-redish py-2 text-redish rounded-full">
                    <span>Read Now</span>
                    <span className="ml-1">
                      <Image
                        src="/assets/ooui_next-ltr.png"
                        alt="arrow"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto h-auto"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute z-10 w-full h-full rounded-2xl border top-[6px] right-[6px]"></div>
          </li>
        </ul>

        <div className="flex justify-end">
          <div className="flex items-center space-x-3">
            <button className="h-10 w-10 border rounded-full grid place-content-center">
              <Image
                src="/assets/ooui_next-ltr (2).png"
                alt="arrow"
                width={0}
                height={0}
                className="h-full w-full -scale-x-[1]"
              />
            </button>
            <button className="h-10 w-10 border rounded-full grid place-content-center">
              <Image
                src="/assets/ooui_next-ltr (2).png"
                alt="arrow"
                width={0}
                height={0}
                className="h-full w-full "
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
