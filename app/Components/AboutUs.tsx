import styles from "@/styles/Styles";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className={` ${styles.flexCenter} ${styles.paddingY} md:px-0 px-5 relative md:bg-transparent bg-[#FFD035]`}>
      <section className={`${styles.flexCenter} flex-col md:gap-y-0 gap-y-10`}>
        <section className={`${styles.flexStart} gap-[900px] z-10 absolute top-1`}>
          <h1 className=" font-RocGrotesk text-[34px] font-semibold leading-[40px] text-PrimaryBlack">
            About us
          </h1>
          <Image
            src="/Decoration/ColorfulRectangles.svg"
            width={56}
            height={56}
            alt="rectangles"
            className="sm:block hidden"
          />
        </section>
        <section id="special-box" className="flex justify-center items-start md:flex-row flex-col md:p-[180px] md:relative bottom-10 md:mt-0 mt-10">
          <section className={` flex justify-center items-center flex-col -z-0 md:relative`}>
            <h1 className=" font-RocGrotesk text-[48px] font-semibold md:w-[80%] md:text-left text-center">
              Product Design with character
            </h1>
          </section>
          <section className={`${styles.flexStart} flex-col md:w-[50%] w-full font-ObjectSans font-normal text-PrimaryBlack text-[20px] leading-[28px] text-left gap-10`}>
            <p>
              We are more than an agency. We want to be a team within your team,
              sharing knowledge, and helping one another grow to drive growth
              and push new boundaries. We are decent at video games too.
            </p>
            <p>
              We are a young, dynamic team that motivate one another by pushing
              what's possible with UX and technology.
            </p>
            <p>
              We love integrating with product teams and balancing the fun yet
              chaotic agency energy that keeps us razor-sharp with the
              continuity of working on our client's long-standing platforms that
              ensure our processes never drop.
            </p>
          </section>
        </section>
        <section className="md:flex hidden -rotate-12 items-center justify-evenly gap-[100px] absolute px-32 bottom-14">
              <Image
                src="/Decoration/sun.svg"
                width={56}
                height={56}
                alt="sun"
              />
              <Image
                src="/Decoration/lightening.svg"
                width={56}
                height={56}
                alt="lightening"
                className="mt-52"
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
  );
};

export default AboutUs;
