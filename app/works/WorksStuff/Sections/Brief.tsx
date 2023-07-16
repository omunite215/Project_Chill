import WorkCard from "../WorksComponents/WorkCard";
import { workCardContent } from "@/constants";

const Brief = () => {
  return (
    <section className="xl:max-w-[85.375rem] w-full flex flex-col justify-center items-start sm:px-16 px-6 py-6  gap-20">
      {workCardContent.map((item) => (
        <>
          <WorkCard
            image={item.image}
            category={item.category}
            title={item.title}
            flexDirection={
              item.title === "One Plus" ? "md:flex-row-reverse" : "md:flex-row"
            }
            paragraph1={item.paragraph1}
            paragraph2={item.paragraph2}
            technologies={item.technologies}
          />
        </>
      ))}
    </section>
  );
};

export default Brief;
