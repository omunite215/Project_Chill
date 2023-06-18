import { Footer, GetStarted, Navbar } from "@/components";
import { AboutUs, Brief, Hero, OurWorks } from "./Components";
import Image from "next/image";
import styles from "@/styles/Styles";

export default function Home() {
  return (
    <main>
      <section className={`${styles.paddingX} ${styles.flexCenter}`}>
        <section className={`${styles.boxWidth}`}>
          <Hero />
        </section>
      </section>
      <section className={`${styles.paddingX} ${styles.flexCenter}`}>
        <section className={`${styles.boxWidth}`}>
          <Brief/>
        </section>
      </section>
      <section className={`w-full ${styles.flexCenter}`}>
        <section className={`${styles.boxWidth}`}>
          <AboutUs/>
        </section>
      </section>
      <section className={`${styles.paddingX} ${styles.flexStart}`}>
        <section className={`${styles.boxWidth}`}>
          <OurWorks />
          <GetStarted />
          <Footer />
        </section>
      </section>
    </main>
  );
}
