import Form from "./ContactComponents/Form";
import { Address, Hero } from "@/Common_Components";

const page = () => {
  return (
    <main>
      <section className="sm:px-16 px-6 flex flex-col justify-center items-center gap-10">
        <Hero
          title="Contact us"
          heading="Have a project?"
          image="/Decoration/EllipseYellow.svg"
          underLine="/Decoration/UnderlineYellow.svg"
          lastWordColor="#FFD035"
        />
        <Form />
        <section className="mt-48 xl:max-w-[85.375rem] w-full flex justify-start items-center">
          <Address />
        </section>
      </section>
    </main>
  );
};

export default page;
