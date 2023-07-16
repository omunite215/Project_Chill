import Image from "next/image";
import Link from "next/link";
import styles from "@/styles";

const WhatWeDo = () => {
  return (
    <section className="sm:pt-[15.19rem] pt-[10.19rem] xl:max-w-[85.375rem] w-full flex flex-col justify-center items-start sm:px-16 px-6 py-6 gap-y-8">
      <h1 className={styles.subHeading}>What we do?</h1>
      <section className="w-full flex lg:flex-row flex-col justify-between sm:items-center items-start gap-8">
        <Image
          src="/Images/WhatWeDo.svg"
          height={425}
          width={696}
          className="md:h-auto sm:h-[50%] h-[35%] md:w-auto sm:w-[80%] w-[50%]"
          alt="WhatWeDo"
        />
        <section className="flex flex-col gap-24 justify-between items-start">
          <ul className="flex flex-col gap-12 font-semibold underline font-RocGrotesk leading-10 text-[2.125rem] text-PrimaryBlack">
            <li>Branding</li>
            <li>Web Design</li>
            <li>Development</li>
          </ul>
          <section className="flex justify-between items-center md:gap-44 gap-16">
            <p className=" font-Euclid font-medium text-[20px] text-PrimaryBlack w-full">
              See all
            </p>
            <Link href="/works">
              <section className="border-2 h-[57px] w-[176px] border-PrimaryBlack rounded-full bg-transparent flex justify-center items-center">
                <span id="arrow"></span>
              </section>
            </Link>
          </section>
        </section>
      </section>
    </section>
  );
};

export default WhatWeDo;
