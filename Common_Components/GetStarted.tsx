import Image from "next/image";
import Link from "next/link";

const GetStarted = () => {
  return (
    <section className=" flex justify-center items-center xl:max-w-[85.375rem] w-full text-center">
      <section className="sm:p-6 p-3 sm:px-28 px-14 py-10 flex sm:flex-row flex-col justify-between items-center lg:gap-x-[527px] md:gap-x-[327px] gap-x-[227px] gap-y-3 bg-PrimaryBlue rounded-3xl">
        <h1 className=" text-BgWhite lg:text-[34px] text-2xl leading-10 font-Euclid">
          Work with us
        </h1>
        <section className="flex justify-center items-center gap-16">
          <h2 className=" text-BgWhite lg:text-xl text-sm font-Euclid">
            Get started
          </h2>
          <Link href="/contact">
          <section className="h-[57px] w-[104px] border-2 border-white bg-transparent rounded-full flex justify-start items-center">
            <Image
              src="/arrow_white.png"
              width={48}
              height={48}
              alt="arr"
              className="w-[48px] h-[48px] ml-2 hover:translate-x-8 transition ease-in-out duration-700 "
            />
          </section>
          </Link>
        </section>
      </section>
    </section>
  );
};

export default GetStarted;
