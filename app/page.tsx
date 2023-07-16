import Image from "next/image";
import styles from "@/styles";
import { GetStarted } from "@/Common_Components";
import { AboutUs, Hero, OurWorks, WhatWeDo } from "./HomeStuff/HomeSections";

export default function Home() {
  return (
    <main>
      <section className="sm:px-16 px-6 flex flex-col justify-center items-center">
        <Hero />
        <WhatWeDo />
      </section>
      <section className=" flex flex-col justify-center items-center pt-[5.12rem] sm:pt-[7.12rem]">
        <section className="xl:max-w-[85.375rem] w-full flex justify-between items-center xl:px-16 lg:px-32 px-6 py-6 bg-BgWhite">
          <h1 className={styles.subHeading}>About us</h1>
          <Image
            src="/Decoration/ColorfulRectangles.svg"
            width={56}
            height={56}
            alt=""
            className="w-[56px] h-[56px] "
          />
        </section>
        <section className=" bg-[#FFD035]" id="special-box">
          <AboutUs />
        </section>
      </section>
      <section className="sm:px-16 px-6 flex flex-col justify-center items-center">
        <OurWorks />
        <GetStarted />
      </section>
    </main>
  );
}
