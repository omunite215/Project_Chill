import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex sm:flex-row flex-col justify-between items-start gap-x-4 sm:py-6 py-0">
      <Image
        src="/Decoration/PinkEllipse.svg"
        width={80}
        height={116.68}
        alt="PinkEllipse"
        className="mt-28 sm:h-auto h-[48px] sm:w-auto w-[48px]"
      />
      <section className="flex sm:flex-row flex-col sm:justify-between justify-center items-center">
        <Image src="/Decoration/star.svg" width={24} height={24} alt="star" />
        <article className="flex flex-col justify-between items-center">
          <h1 className="text-PrimaryBlack font-RocGrotesk font-bold text-[64px] text-center">
            We make products that{" "}
            <span className=" text-PrimaryPink flex flex-col justify-center items-center">
              matter{" "}
              <Image
                src="/Decoration/Underline.svg"
                height={24}
                width={24}
                alt=""
                className=" h-auto w-auto object-contain"
              />
            </span>
          </h1>
          <Image
            src="/Decoration/CurveLine.svg"
            width={20}
            height={20}
            alt="FancyArrow"
            className=" sm:h-fit h-[50%] sm:w-fit w-[50%] object-contain self-end"
          />
          <p className="font-normal font-ObjectSans text-PrimaryBlack text-[20px] leading-[28px] text-center md:w-[55%] w-full">
            We are more than an agency. We want to be a team within your team,
            sharing knowledge, and helping one
          </p>
        </article>
        <section className="flex flex-col self-end sm:justify-between justify-center sm:items-start items-center gap-y-20">
          <Image
            src="/Decoration/lines.svg"
            width={24}
            height={24}
            alt="lines"
            className=" h-auto w-auto object-contain self-end mt-5 relative sm:block hidden"
          />
          <Link href="/works" className="ml-5 mt-5 relative self-end">
            <Image
              src="/Decoration/FancyArrow.svg"
              height={24}
              width={24}
              alt=""
              className="sm:h-fit h-full sm:w-fit w-full object-contain self-end align-baseline"
            />
          </Link>
        </section>
      </section>
    </section>
  );
};

export default Hero;
