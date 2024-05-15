import Image from "next/image";

export default function Steps() {
  return (
    <section>
      <div className="py-12 md:py-20 mx-8 md:mx-10 grid md:grid-flow-col md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <div className="md:max-w-sm xl:max-w-md md:mr-auto">
            <h3 className="capitalize text-base md:text-lg">
              Get started in just three simple steps
            </h3>
            <p className="my-4 text-base xl:text-base font-subheadingBoldFont text-greyShade leading-6">
              Subscribe to our newsletter, confirm your subscription, and enjoy
              weekly doses of inspiration, insights, and growth strategies
              delivered straight to your inbox.
            </p>

            <button className="mt-12 md:mt-16 subtitle flex items-center">
              get started now
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

        <ul className="space-y-6 md:space-y-8 divide-greyShade2 divide-y-[1px]">
          <li className="flex items-center space-x-6 md:space-x-8 flex-1 w-full">
            <div className="rounded-full h-10 w-10 md:h-12 md:w-12 grid place-content-center bg-grey border-[1px] border-greyShade2">
              <span className="text-greyShade">1</span>
            </div>
            <span className="text-sm text-greyShade max-w-xs">
              Enter your email address and click subscribe on the form
            </span>
          </li>
          <li className="flex items-center space-x-6 md:space-x-8 flex-1 w-full pt-4 md:pt-6">
            <div className="rounded-full h-10 w-10 md:h-12 md:w-12 grid place-content-center bg-grey border-[1px] border-greyShade2">
              <span className="text-greyShade">2</span>
            </div>
            <span className="text-sm text-greyShade max-w-xs">
              Check your inbox for a confirmation email
            </span>
          </li>
          <li className="flex items-center space-x-6 md:space-x-8 flex-1 w-full pt-4 md:pt-6">
            <div className="rounded-full h-10 w-10 md:h-12 md:w-12 grid place-content-center bg-grey border-[1px] border-greyShade2">
              <span className="text-greyShade">3</span>
            </div>
            <span className="text-sm text-greyShade max-w-xs">
              Once confirmed, you are all set!
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
