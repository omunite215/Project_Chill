import { WorkCardProps } from "@/types";
import Image from "next/image";

const WorkCard = ({
  image,
  category,
  title,
  flexDirection,
  paragraph1,
  paragraph2,
  technologies,
}: WorkCardProps) => {
  return (
    <section
      className={`flex ${flexDirection} flex-col flex-1 justify-center items-center md:gap-8 gap-4`}
    >
      <Image
        src={image}
        width={488}
        height={488}
        alt="Work-Image"
        className=" object-contain lg:w-auto lg:h-auto w-[244px] h-[244px]"
      />
      <section className="flex flex-col justify-center items-start gap-6">
        <h4 className=" font-DMMono text-[16px] leading-[24px] text-PrimaryBlack">
          {category}
        </h4>
        <article className=" flex flex-col justify-start items-start gap-5 sm:w-[70%] w-full">
          <h1 className=" font-RocGrotesk font-semibold sm:text-[34px] text-[28px] leading-[40px] text-PrimaryBlack">
            {title}
          </h1>
          <ul>
            <li>{paragraph1}</li>
            <li>{paragraph2}</li>
          </ul>
          <article className="flex flex-col gap-3">
            <h3>Technologies used:</h3>
            <p>{technologies}</p>
          </article>
        </article>
        <section className="w-full flex gap-1 justify-end items-center self-end align-bottom">
          <p>Visit site</p>
          <span id="arrow" />
        </section>
      </section>
    </section>
  );
};

export default WorkCard;
