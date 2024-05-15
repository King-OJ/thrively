import Image from "next/image";
import featherImg from "../public/assets/feathers.svg";

export default function Footer() {
  return (
    <section>
      <div className="m-5 md:m-6 ">
        <div className="rounded-2xl px-6 bg-redish text-white">
          <div className="divide-y-[1px] divide-greyShade2 divide-opacity-50">
            <div className="pt-6 pb-16 grid md:grid-flow-col md:grid-cols-2 gap-8 md:gap-4">
              <div className="md:max-w-md md:mr-auto relative">
                <h3 className="relative text-base md:text-lg max-w-[250px] mb-5 md:mb-6">
                  Subscribe to our Newsletter
                </h3>
                <form
                  action=""
                  className="z-30 w-full space-x-[2px] md:space-x-2 max-w-sm font-subheadingBoldFont text-xs overflow-hidden bg-white p-[3px] rounded-full h-8 md:h-10 flex items-center"
                >
                  <input
                    type="text"
                    placeholder="enter your email"
                    className="flex-1 h-full text-black pl-4 placeholder:capitalize outline-none"
                  />
                  <button className="bg-yellowish h-full px-3 md:px-6 text-black rounded-full">
                    Join the Newsletter
                  </button>
                </form>
                <div className="absolute right-4 top-0 md:-right-20 md:top-6">
                  <Image
                    src={featherImg}
                    alt="feathers"
                    className="-scale-x-[1]"
                  />
                </div>
              </div>

              <div className="max-w-md md:mx-auto">
                <ul className="flex space-x-8 md:space-x-16 font-subheadingFont">
                  <li className="text-sm">
                    <h6 className="mb-[6px] font-subheadingBoldFont">Pages</h6>
                    <ul className="space-y-2 capitalize">
                      <li>books</li>
                      <li>documentary</li>
                      <li>careers</li>
                      <li>articles</li>
                    </ul>
                  </li>
                  <li className="text-sm">
                    <h6 className="mb-[6px] font-subheadingBoldFont">Follow</h6>
                    <ul className="space-y-2 capitalize">
                      <li>discord</li>
                      <li>twitter</li>
                      <li>instagram</li>
                      <li>medium</li>
                    </ul>
                  </li>
                  <li className="text-sm">
                    <h6 className="mb-[6px] font-subheadingBoldFont">Legal</h6>
                    <ul className="space-y-2 capitalize">
                      <li>privacy</li>
                      <li>contract</li>
                      <li>support</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-3 text-xs flex items-center font-subheadingFont justify-between">
              <span>All rights reserved</span>
              <span>Terms and conditions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
