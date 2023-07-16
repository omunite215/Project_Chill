import { ourWorksContent } from "@/constants";
import { OurWorksCard } from "../HomeComponents";

const OurWorks = () => {
  return (
    <section className="pt-[140px] flex flex-col justify-center items-start gap-10 ">
      <h1 className=" text-PrimaryBlack text-[34px] font-RocGrotesk font-semibold leading-10">
        Our Works
      </h1>
      <section className=" w-full flex flex-1 justify-between items-center gap-7 md:flex-row flex-col">
        {ourWorksContent.map((item) => (
          <>
            <OurWorksCard
              title={item.title}
              description={item.description}
              image={item.image}
              color={item.color}
            />
          </>
        ))}
      </section>
    </section>
  );
};

export default OurWorks;
