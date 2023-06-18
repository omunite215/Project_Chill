import styles from "@/styles/Styles"
import Image from "next/image"
import Link from "next/link"

const Brief = () => {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
      <section className={`${styles.flexStart} flex-col gap-[50px] md:px-0 px-3`}>
        <h1 className=" font-RocGrotesk font-semibold text-[34px]">What we do?</h1>
        <section className={`flex md:flex-row flex-col md:justify-start justify-center md:items-start items-center gap-8`}>
          <Image src="/Images/WhatWeDo.svg" height={425} width={696} className="md:h-auto sm:h-[50%] h-[35%] md:w-auto sm:w-[80%] w-[50%]" alt="WhatWeDo"/>
          <section className="flex flex-col items-start justify-start gap-[112px]">
            <ul className=" font-RocGrotesk font-semibold text-[34px] text-PrimaryBlack flex flex-col gap-[50px] underline">
              <li>Branding</li>
              <li>Web Design</li>
              <li>Development</li>
            </ul>
            <section className="flex justify-between items-center md:gap-44 gap-16">
              <p className=" font-Euclid font-medium text-[20px] text-PrimaryBlack w-full">See all</p>
              <Link href="/works">
                <section className="border-2 h-[57px] w-[176px] border-PrimaryBlack rounded-full bg-transparent flex justify-center items-center">
                  <span id="arrow"></span>
                </section>
              </Link>
            </section>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Brief