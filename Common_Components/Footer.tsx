import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="xl:max-w-[85.375rem] w-full flex justify-start items-center py-6 pt-[171px] pb-8 sm:px-16 px-6 ">
      <section className=" flex justify-between items-center gap-11 flex-wrap">
        <section className="flex flex-col gap-6 justify-center items-start">
          <h3 className=" text-PrimaryBlack font-ObjectSans text-xl">
            Check Our Works
          </h3>
          <section className=" flex justify-start items-center gap-6">
            <Image
              src="/footer/dribbble.svg"
              width={24}
              height={24}
              alt="dribbble"
            />
            <Image
              src="/footer/instagram.svg"
              width={24}
              height={24}
              alt="instagram"
            />
            <Image
              src="/footer/behance.svg"
              width={24}
              height={24}
              alt="behance"
            />
          </section>
        </section>
        <section className="flex flex-col gap-6 justify-center items-start">
          <h3 className=" text-PrimaryBlack font-ObjectSans text-xl">
            Check us on
          </h3>
          <section className=" flex justify-start items-center gap-6">
            <Image
              src="/footer/facebook.svg"
              width={24}
              height={24}
              alt="facebook"
            />
            <Image
              src="/footer/spotify.svg"
              width={24}
              height={24}
              alt="spotify"
            />
          </section>
        </section>
        <section className="flex flex-col gap-6 justify-center items-start">
          <h3 className=" text-PrimaryBlack font-ObjectSans text-xl">
            Say Hello
          </h3>
          <section className=" flex justify-start items-center">
            <Link
              href="mailto:hello@chillagency.az"
              className=" text-PrimaryBlack text-[16px] font-Euclid"
            >
              👋 hello@chillagency.az
            </Link>
          </section>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
