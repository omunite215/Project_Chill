import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="flex flex-col ms:items-start items-center justify-center">
      <section className="mt-10 bg-[#FFD035] w-full">
        <section className="flex justify-center md:items-start items-center">
          <section className="flex md:flex-row flex-col items-start justify-between sm:p-32 p-16 sm:gap-y-0 gap-y-10">
            <h1 className="text-5xl font-RocGrotesk font-semibold max-w-[384px] md:w-3/5 w-full sm:text-left text-center">
              Product Design With Character
            </h1>
            <ul className="flex max-w-[592px] md:w-1/2 w-full flex-col gap-4 font-medium text-base sm:text-left text-center">
              <li>
                We are more than an agency. We want to be a team within your
                team, sharing knowledge, and helping one another grow to drive
                growth and push new boundaries. We are decent at video games
                too.
              </li>
              <li>
                We are a young, dynamic team that motivate one another by
                pushing what&rsquo;s possible with UX and technology.
              </li>
              <li>
                We love integrating with product teams and balancing the fun yet
                chaotic agency energy that keeps us razor-sharp with the
                continuity of working on our client&rsquo;s long-standing platforms
                that ensure our processes never drop.
              </li>
            </ul>
          </section>
          <section className="md:flex hidden rotate-[15deg] items-start justify-start gap-[100px] absolute -bottom-8 left-12">
            <Image src="/Decoration/sun.svg" width={56} height={56} alt="sun" />
            <Image
              src="/Decoration/lightening.svg"
              width={56}
              height={56}
              alt="lightening"
              className="mt-20"
            />
            <Image
              src="/Decoration/diamond.svg"
              width={56}
              height={56}
              alt="diamond"
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default AboutUs;
