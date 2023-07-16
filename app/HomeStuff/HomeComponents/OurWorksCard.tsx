import { WorkCardDetailProps } from "@/types";
import Image from "next/image";

const OurWorksCard = ({
  image,
  color,
  title,
  description,
}: WorkCardDetailProps) => {
  return (
    <section
      className="flex flex-col justify-center items-start"
      style={{ backgroundColor: `${color}` }}
    >
      <section className=" m-1 bg-BgWhite flex justify-center items-center p-28">
        <Image
          src={image}
          width={175}
          height={175}
          alt={title}
          className=" object-contain"
        />
      </section>
      <section className=" bg-transparent flex flex-col justify-start items-start ml-2 gap-y-[18px] p-3">
        <h1 className=" font-RocGrotesk font-semibold text-4xl text-BgWhite">
          {title}
        </h1>
        <p className=" font-ObjectSans font-medium text-xs text-BgWhite">
          {description}
        </p>
      </section>
    </section>
  );
};

export default OurWorksCard;
