import Image from "next/image";

export default function WhatYouGet() {
  return (
    <section>
      <div className="mx-4 md:mx-10 my-5 md:my-6 border border-opacity-30 border-black bg-grey md:px-12 px-2 py-12 md:py-20 rounded-2xl">
        <div className="space-y-16 pb-16 border-black border-b border-opacity-30">
          <div className="space-y-4 text-center ">
            <h4 className="subtitle">our offers</h4>
            <h2 className="title">What you get from Thrively</h2>
          </div>

          <ul className="grid md:grid-flow-col md:items-end md:grid-cols-3 gap-8 md:gap-6">
            <li className="flex flex-col space-y-4 items-center">
              <Image
                src="/assets/newsletter_icon.png"
                alt="newsletter"
                width={100}
                height={71}
                className="w-auto h-auto"
              />
              <div className="space-y-2">
                <h3 className="capitalize text-sm text-center ">
                  daily newsletter
                </h3>
                <p className="feature_p">
                  Newsletter packed with insights, tips, and motivation tailored
                  to fuel your personal growth journey every day.
                </p>
              </div>
            </li>
            <li className="flex flex-col space-y-4 items-center">
              <Image
                src="/assets/compass_icon.png"
                alt="newsletter"
                width={100}
                height={75}
                className="w-auto h-auto"
              />
              <div className="space-y-2">
                <h3 className="capitalize text-sm text-center">
                  personal guidance
                </h3>
                <p className="feature_p">
                  Resources that provides you with practical tools and
                  strategies to set and achieve your goals effectively.
                </p>
              </div>
            </li>
            <li className="flex flex-col space-y-4 items-center">
              <Image
                src="/assets/tent_icon.png"
                alt="tent"
                width={100}
                height={79}
                className="w-auto h-auto"
              />
              <div className="space-y-2">
                <h3 className="capitalize text-sm text-center">community</h3>
                <p className="feature_p">
                  A supportive community, where like-minded individuals come
                  together to share experiences.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="pt-16">
          <ul className="space-y-20">
            <li className="w-full flex md:items-center gap-1 md:gap-20">
              <div className="md:px-6">
                <Image
                  src="/assets/womanenjoyingspatreatment.png"
                  alt="woman"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto"
                />
              </div>

              <div className="flex-1 flex flex-row-reverse items-end justify-between">
                <div className="max-w-sm md:max-w-md xl:max-w-xl md:pr-8">
                  <h3 className="capitalize text-base md:text-lg">
                    Growth in every inbox
                  </h3>
                  <p className="my-4 text-sm xl:text-base font-subheadingBoldFont text-greyShade leading-6">
                    Receive curated content, expert insights, and actionable
                    tips delivered straight to your inbox, empowering you to
                    grow personally and socially with each message.
                  </p>

                  <button className="mt-12 subtitle flex items-center">
                    learn more
                    <span className="ml-1">
                      <Image
                        src="/assets/ooui_next-ltr.png"
                        alt="woman"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto h-auto"
                      />
                    </span>
                  </button>
                </div>

                <div className="md:mr-12">
                  <Image
                    src="/assets/right_scribble.png"
                    alt="scribble"
                    width={91}
                    height={68}
                    className="opacity-30 md:-mb-4 xl:-mb-8 -rotate-[200deg]"
                  />
                </div>
              </div>
            </li>
            <li className="w-full flex flex-row-reverse md:items-center gap-1 md:gap-20">
              <div className="md:px-6">
                <Image
                  src="/assets/mancelebrateswinning.png"
                  alt="man celebrate"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto -scale-x-[1] "
                />
              </div>

              <div className="flex-1 flex items-end justify-between">
                <div className="max-w-sm md:max-w-md xl:max-w-xl pl-2 md:pl-8">
                  <h3 className="capitalize text-base md:text-lg">
                    community connection
                  </h3>
                  <p className="my-4 text-sm xl:text-base font-subheadingBoldFont text-greyShade leading-6">
                    Engage with fellow subscribers, share your experiences, and
                    foster meaningful connections as you journey towards
                    self-improvement together.
                  </p>

                  <button className="mt-12 subtitle flex items-center">
                    learn more{" "}
                    <span className="ml-1">
                      <Image
                        src="/assets/ooui_next-ltr.png"
                        alt="woman"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto h-auto"
                      />
                    </span>
                  </button>
                </div>

                <div className="md:ml-12">
                  <Image
                    src="/assets/right_scribble.png"
                    alt="scribble"
                    width={91}
                    height={68}
                    className="opacity-30 md:-mb-4 xl:-mb-8 -scale-x-[1] -rotate-[160deg]"
                  />
                </div>
              </div>
            </li>
            <li className="w-full flex md:items-center gap-1 md:gap-20">
              <div className="md:px-6">
                <Image
                  src="/assets/femalebakerdecoratingcake.png"
                  alt="woman decorating"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto -scale-x-[1]"
                />
              </div>

              <div className="flex-1 flex flex-row-reverse">
                <div className="max-w-sm md:max-w-md xl:max-w-xl md:pr-8">
                  <h3 className="capitalize text-base md:text-lg">
                    Find What You Love
                  </h3>
                  <p className="my-4 text-sm xl:text-base font-subheadingBoldFont text-greyShade leading-6">
                    From career advice to mindfulness practices, our newsletter
                    covers a wide range of subjects, ensuring you find
                    inspiration and enjoyment in every issue.
                  </p>

                  <button className="mt-12 subtitle flex items-center">
                    learn more{" "}
                    <span className="ml-1">
                      <Image
                        src="/assets/ooui_next-ltr.png"
                        alt="woman"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto h-auto"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
