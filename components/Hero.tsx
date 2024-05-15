import Image from "next/image";
import Link from "next/link";
import featherImg from "../public/assets/feathers.svg";

export default function Hero() {
  return (
    <section className="">
      <div className="min-h-screen bg-redish pt-8 w-full">
        <nav className="bg-white mx-6 md:mx-10 h-10 md:h-14 rounded-full text-xs">
          <div className="flex items-center h-full justify-between px-4">
            <Link href="/" className="font-pacifico text-base">
              Thrively
            </Link>

            <ul className="hidden space-x-2 md:space-x-6 md:flex items-center">
              <li>Books</li>
              <li>Documentary</li>
              <li>Careers</li>
              <li className="flex items-center">
                <Image
                  src="/assets/star.png"
                  alt="discord logo"
                  width={10}
                  height={12}
                  className="h-auto w-auto"
                />
                <span className="ml-1">Articles</span>
              </li>
            </ul>

            <button className="px-2 py-[3px] md:px-4 md:py-[6px] rounded-full space-x-1 flex items-center border">
              <Image
                src="/assets/ic_baseline-discord.png"
                alt="discord logo"
                width={20}
                height={20}
                className="h-auto w-auto"
              />
              <span>Discord</span>
            </button>
          </div>
        </nav>

        <div className="my-24 md:mt-20 mx-6 md:mx-10">
          <div className="w-full relative md:static">
            <div className="text-center space-y-6 text-white">
              <h1 className="text-2xl md:text-4xl max-w-xl mx-auto md:leading-[3rem] tracking-wide">
                Discover Insights, Inspiration & Growth in Every Inbox
              </h1>
              <h4 className="max-w-lg mx-auto text-sm leading-6">
                Dive into a world of inspiration, where insightful articles,
                practical tools, and a supportive community await you.
              </h4>
            </div>
            <div className="mt-8 max-w-md mx-auto">
              <form
                action=""
                className="w-full font-subheadingBoldFont text-xs overflow-hidden bg-white p-[3px] rounded-full h-10 flex items-center"
              >
                <input
                  type="text"
                  placeholder="enter your email"
                  className="flex-1 h-full pl-4 placeholder:capitalize outline-none"
                />
                <button className="bg-yellowish h-full px-6 rounded-full">
                  Join the Newsletter
                </button>
              </form>
            </div>

            <div className="absolute left-8 -top-14 md:left-32 md:top-32">
              <Image src={featherImg} alt="feathers" />
            </div>

            <div className="absolute right-8 -bottom-16 md:right-32 md:bottom-32">
              <Image
                src={featherImg}
                alt="feathers"
                className="rotate-180 md:rotate-0"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-full flex justify-between items-start">
            <Image
              src="/assets/femalebakerdecoratingcake.png"
              alt="female baker decorating"
              className="w-auto h-auto -scale-x-[1] -ml-8"
              width={0}
              height={0}
              sizes="100vw"
            />
            <Image
              src="/assets/manwithpetdog.png"
              alt="female baker decorating"
              className="w-auto h-auto -mr-8 mt-2"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
