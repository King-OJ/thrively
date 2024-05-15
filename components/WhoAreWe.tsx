import Image from "next/image";

export default function WhoAreWe() {
  return (
    <section className="-mt-[200px] md:-mt-[50px] bg-white relative rounded-tr-2xl rounded rounded-tl-2xl overflow-hidden">
      <div className="max-w-xl mx-6 md:mx-auto pt-10 pb-20 md:py-20">
        <h4 className="subtitle">who are we ?</h4>
        <p className="mt-6 text-base md:text-lg ">
          We believe in the power of personal development to transform lives.
          Our mission is to provide you with the tools, resources, and support
          you need to unlock your full potential and lead a more fulfilling
          life.
        </p>
      </div>
      <div className="absolute right-10 bottom-2 md:right-28 md:bottom-10">
        <Image
          src="/assets/scribbles.png"
          alt="scribbles"
          width={88}
          height={66}
          sizes="100vw"
          className="opacity-20"
        />
      </div>
    </section>
  );
}
