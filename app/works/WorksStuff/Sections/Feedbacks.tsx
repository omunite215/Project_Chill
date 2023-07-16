import Image from "next/image";
import FeedbackCard from "../WorksComponents/FeedbackCard";

const Feedbacks = () => {
  return (
    <section className="xl:max-w-[85.375rem] w-full flex flex-col justify-center items-start sm:px-16 px-6 pt-[5.25rem] pb-[14.69rem] gap-8">
      <section className=" flex flex-col justify-start items-start gap-2">
        <Image
          src="/Images/hug.svg"
          width={21}
          height={30}
          alt="clients"
          className=" object-contain"
        />
        <h1 className=" font-DMMono text-base text-black">
          OUR CLIENTS {"<"}3 US
        </h1>
      </section>
      <section className="flex justify-center items-start md:flex-row flex-col gap-8">
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
      </section>
    </section>
  );
};

export default Feedbacks;
