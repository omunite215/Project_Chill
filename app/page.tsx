import Image from "next/image";
import styles from "@/styles";
import { GetStarted } from "@/Common_Components";
import { AboutUs, Hero, OurWorks, WhatWeDo } from "./HomeStuff/HomeSections";

export default function Home() {
  return (
    <main className="sm:mt-[6.56rem] mt-16">
      <section className="sm:px-16 px-0 flex flex-col justify-center items-center sm:gap-[10.35rem] gap-20">
        <Hero />
        <WhatWeDo />
      </section>
      <section className="sm:px-16 px-3 flex flex-col justify-center items-center sm:mt-28 mt-14">
        <section className="xl:max-w-[85.375rem] w-full flex justify-between items-center py-6 bg-BgWhite">
          <h1 className={styles.subHeading}>About us</h1>
          <Image
            src="/Decoration/ColorfulRectangles.svg"
            width={56}
            height={56}
            alt=""
            className="w-[56px] h-[56px] "
          />
        </section>
        <section className=" bg-[#FFD035] mt-2" id="special-box">
          <AboutUs />
        </section>
      </section>
      <section className="sm:px-16 px-6 flex flex-col justify-center items-center sm:mt-36 mt-[4.5rem] sm:gap-52 gap-24">
        <OurWorks />
        <GetStarted />
      </section>
    </main>
  );
}
