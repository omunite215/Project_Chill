import styles from "@/styles";
import { HeroProps } from "@/types";
import Image from "next/image";

const Hero = ({
  title,
  heading,
  image,
  underLine,
  lastWordColor,
}: HeroProps) => {
  const lastSpace = heading.lastIndexOf(" ");
  const restSentence = heading.slice(0, lastSpace);
  const lastWord = heading.slice(lastSpace, heading.length);

  return (
    <section className="xl:max-w-[85.375rem] w-full flex flex-col justify-center items-start sm:px-16 px-6 py-6 gap-y-6">
      <Image
        src={image}
        height={144}
        width={141}
        alt="ellipse"
        className=" object-contain self-end transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150"
      />
      <h3 className={styles.heading1}>{title}</h3>
      <section className="flex justify-start xl:items-start items-center">
        <section className="flex flex-wrap lg:w-auto md:w-[50%] w-full justify-start items-center font-Euclid text-[84px] sm:gap-3 gap-0">
          {restSentence}
          {` `}
          <section className="flex flex-col justify-end self-end items-start">
            <span style={{ color: lastWordColor }}>{lastWord}</span>
            <Image
              src={underLine}
              height={0}
              width={24}
              alt="underLine"
              className="w-auto absolute mt-24 align-bottom object-contain"
            />
          </section>
        </section>
        <Image
          src="/Decoration/lines.svg"
          width={24}
          height={24}
          alt="lines"
          className="  sm:h-auto ml-6 h-12 sm:w-auto w-20 object-contain sm:static absolute "
        />
      </section>
    </section>
  );
};

export default Hero;
