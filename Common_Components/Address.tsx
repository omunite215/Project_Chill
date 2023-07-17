import { AddressContent } from "@/constants";
import Image from "next/image";

const Address = () => {
  return (
    <section className="xl:max-w-[85.375rem] w-full flex justify-start items-center sm:px-16 px-6 ">
      <section className="flex sm:flex-row flex-col justify-between items-center sm:gap-32 gap-16">
        {AddressContent.map((items) => (
          <section className=" text-PrimaryBlack flex flex-col justify-start items-start gap-4">
            <Image src="/location.svg" width={24} height={24} alt="location" />
            <p className=" font-RocGrotesk text-xl font-semibold">
              {items.name}
            </p>
            <p className=" font-ObjectSans font-normal text-2xl w-72">
              {items.address}
            </p>
            <p className=" font-Euclid text-base font-normal">{items.phone}</p>
            <p className=" font-Euclid text-base font-normal">{items.mail}</p>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Address;
